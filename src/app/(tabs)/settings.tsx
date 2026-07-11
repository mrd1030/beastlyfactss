import { version } from 'expo/package.json';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Switch, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { Eyebrow } from '@/components/eyebrow';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useThemePreference } from '@/contexts/theme-preference';
import { resetAllLocalData } from '@/db/helpers';
import { useTheme } from '@/hooks/use-theme';
import { scheduleCareReminderPreview } from '@/lib/care-notifications';
import { addCaregiver, clearCareTeam, getCareTeam, removeCaregiver, setActiveCaregiver } from '@/lib/care-team-store';
import { createRemoteHousehold, disconnectHousehold, isSupabaseReady, joinRemoteHousehold, pullConnectedHousehold, pushConnectedHousehold, syncConnectedHousehold } from '@/lib/household-sync';
import { clearHouseholdConnection, getHouseholdConnection, markHouseholdSyncDirty } from '@/lib/household-sync-store';
import { ensureNotificationPermission } from '@/lib/notification-permission';
import { pickPetPhoto } from '@/lib/pick-pet-photo';
import { clearProfile, getProfile, resetIdentity, updateProfile, type ThemePreference } from '@/lib/profile-store';
import { isAndroidWidgetSupportedEnvironment } from '@/lib/android-widget-runtime';
import { refreshCareStatusWidget } from '@/lib/care-widget';
import { isWidgetsSupportedEnvironment } from '@/lib/widgets-runtime';

const THEME_OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

/**
 * Settings tab — profile editing, appearance, notifications, and local
 * account/data controls. Everything here stays on-device only: there is
 * still no backend auth yet, so this is a local profile/preferences hub.
 */
export default function SettingsScreen() {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { preference, setPreference } = useThemePreference();

  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [notifStatusNote, setNotifStatusNote] = useState<string | null>(null);
  const [widgetStatusNote, setWidgetStatusNote] = useState<string | null>(null);
  const [caregiverDraft, setCaregiverDraft] = useState('');
  const [careTeamError, setCareTeamError] = useState<string | null>(null);
  const [householdNameDraft, setHouseholdNameDraft] = useState('');
  const [inviteCodeDraft, setInviteCodeDraft] = useState('');
  const [syncStatusNote, setSyncStatusNote] = useState<string | null>(null);
  const [syncBusy, setSyncBusy] = useState(false);
  const widgetSupported = isWidgetsSupportedEnvironment();
  const androidWidgetSupported = isAndroidWidgetSupportedEnvironment();
  const supabaseReady = isSupabaseReady();

  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });
  const { data: careTeam } = useQuery({ queryKey: ['careTeam'], queryFn: getCareTeam });
  const { data: householdConnection } = useQuery({
    queryKey: ['householdSyncConnection'],
    queryFn: getHouseholdConnection,
  });

  const startEditingName = () => {
    setNameDraft(profile?.displayName ?? '');
    setEditingName(true);
  };

  const saveName = async () => {
    const trimmed = nameDraft.trim();
    await updateProfile({ displayName: trimmed || 'Beast Keeper' });
    setEditingName(false);
    await queryClient.invalidateQueries({ queryKey: ['profile'] });
  };

  const handlePickAvatar = async () => {
    const uri = await pickPetPhoto();
    if (!uri) return;
    await updateProfile({ avatarUri: uri });
    await queryClient.invalidateQueries({ queryKey: ['profile'] });
  };

  const handleToggleNotifications = async (next: boolean) => {
    await updateProfile({ notificationsEnabled: next });
    queryClient.invalidateQueries({ queryKey: ['profile'] });
    if (next) {
      const granted = await ensureNotificationPermission();
      setNotifStatusNote(
        granted ? null : 'Notifications are on in-app, but the OS permission is off or unavailable here.'
      );
    } else {
      setNotifStatusNote(null);
    }
  };

  const handleResetIdentity = async () => {
    await resetIdentity();
    queryClient.invalidateQueries({ queryKey: ['profile'] });
  };

  const handleDeleteAllData = async () => {
    setDeleting(true);
    try {
      await clearProfile();
      await clearCareTeam();
      await clearHouseholdConnection();
      await resetAllLocalData();
      await refreshCareStatusWidget().catch(() => {});
      setPreference('system');
      setNotifStatusNote(null);
      setWidgetStatusNote(null);
      queryClient.clear();
      setConfirmingDelete(false);
      router.replace('/profile');
    } finally {
      setDeleting(false);
    }
  };

  const handleAddCaregiver = async () => {
    const trimmed = caregiverDraft.trim();
    if (!trimmed) {
      setCareTeamError('Enter a caregiver name first.');
      return;
    }
    setCareTeamError(null);
    await addCaregiver(trimmed);
    setCaregiverDraft('');
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTeam'] });
    await queryClient.invalidateQueries({ queryKey: ['householdSyncConnection'] });
  };

  const handleSelectCaregiver = async (id: string) => {
    await setActiveCaregiver(id);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTeam'] });
    await queryClient.invalidateQueries({ queryKey: ['householdSyncConnection'] });
  };

  const handleRemoveCaregiver = async (id: string) => {
    await removeCaregiver(id);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTeam'] });
    await queryClient.invalidateQueries({ queryKey: ['householdSyncConnection'] });
  };

  const handleRefreshWidget = async () => {
    if (!widgetSupported && !androidWidgetSupported) {
      setWidgetStatusNote('Home widget refresh is available in native builds, not Expo Go or the web preview.');
      return;
    }

    await refreshCareStatusWidget();
    setWidgetStatusNote('Widget snapshot refreshed.');
  };

  const refreshSyncQueries = async () => {
    await queryClient.invalidateQueries();
    await queryClient.invalidateQueries({ queryKey: ['householdSyncConnection'] });
    await queryClient.invalidateQueries({ queryKey: ['careTeam'] });
  };

  const runSyncAction = async (action: () => Promise<{ status: string }>) => {
    setSyncBusy(true);
    setSyncStatusNote(null);
    try {
      const result = await action();
      if (result.status === 'conflict') {
        setSyncStatusNote('Remote changes were found since this device last synced. Pull latest or push this device to choose which version wins.');
      } else if (result.status === 'not-configured') {
        setSyncStatusNote('Add EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY before turning on cloud sync.');
      } else if (result.status === 'database-unavailable') {
        setSyncStatusNote('Cloud sync needs the local device database, which is unavailable in this preview environment.');
      } else if (result.status === 'not-connected') {
        setSyncStatusNote('Create or join a household first.');
      } else if (result.status === 'idle') {
        setSyncStatusNote('Everything is already up to date.');
      } else {
        setSyncStatusNote('Household sync completed.');
      }
      await refreshSyncQueries();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Cloud sync could not finish.';
      setSyncStatusNote(message);
    } finally {
      setSyncBusy(false);
    }
  };

  const handleCreateHousehold = async () => {
    await runSyncAction(() => createRemoteHousehold(householdNameDraft));
  };

  const handleJoinHousehold = async () => {
    await runSyncAction(() => joinRemoteHousehold(inviteCodeDraft));
  };

  const handleSyncNow = async () => {
    await runSyncAction(syncConnectedHousehold);
  };

  const handlePullLatest = async () => {
    await runSyncAction(pullConnectedHousehold);
  };

  const handlePushDevice = async () => {
    await runSyncAction(pushConnectedHousehold);
  };

  const handleDisconnectHousehold = async () => {
    await disconnectHousehold();
    setSyncStatusNote('Household sync was disconnected on this device.');
    await refreshSyncQueries();
  };

  const handlePreviewReminder = async (kind: 'due' | 'overdue') => {
    const granted = await ensureNotificationPermission();
    if (!granted) {
      setNotifStatusNote('Notifications are enabled in-app, but the OS permission is still off or unavailable here.');
      return;
    }

    await scheduleCareReminderPreview(kind);
    setNotifStatusNote(kind === 'overdue' ? 'Sent an overdue reminder preview.' : 'Sent a due-today reminder preview.');
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerBlock}>
            <ThemedText type="title" style={styles.title}>
              Settings
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Update your profile, appearance, reminders, and local app data.
            </ThemedText>
          </View>

          <Eyebrow style={styles.sectionTitle}>Your profile</Eyebrow>
          <Card variant="soft" style={styles.profileCard}>
            <View style={styles.identityRow}>
              <Pressable onPress={handlePickAvatar}>
                {profile?.avatarUri ? (
                  <Image source={{ uri: profile.avatarUri }} style={styles.avatar} />
                ) : (
                  <ThemedView type="backgroundElement" style={styles.avatarPlaceholder}>
                    <ThemedText type="subtitle">🦎</ThemedText>
                  </ThemedView>
                )}
              </Pressable>

              <View style={styles.identityText}>
                {editingName ? (
                  <View style={styles.nameEditRow}>
                    <ThemedView type="backgroundElement" style={styles.nameInputBox}>
                      <TextInput
                        value={nameDraft}
                        onChangeText={setNameDraft}
                        placeholder="Your name"
                        placeholderTextColor={theme.textSecondary}
                        style={[styles.nameInput, { color: theme.text }]}
                        autoFocus
                      />
                    </ThemedView>
                    <Pressable onPress={saveName} hitSlop={8}>
                      <ThemedText type="linkPrimary">Save</ThemedText>
                    </Pressable>
                  </View>
                ) : (
                  <Pressable onPress={startEditingName}>
                    <ThemedText type="title" style={styles.nickname}>
                      {profile?.displayName ?? 'Beast Keeper'}
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      Tap name to edit
                    </ThemedText>
                  </Pressable>
                )}
              </View>
            </View>

            <View style={styles.profileActions}>
              <Pressable onPress={handlePickAvatar}>
                <ThemedView type="backgroundSelected" style={styles.profileActionButton}>
                  <ThemedText type="smallBold">Change photo</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable onPress={() => router.replace('/profile')}>
                <ThemedView type="backgroundElement" style={styles.profileActionButton}>
                  <ThemedText type="smallBold">Open pets</ThemedText>
                </ThemedView>
              </Pressable>
            </View>
          </Card>

          <Eyebrow style={styles.sectionTitle}>Appearance</Eyebrow>
          <ThemedView style={styles.segmentRow}>
            {THEME_OPTIONS.map((option) => {
              const selected = preference === option.value;
              return (
                <Pressable key={option.value} onPress={() => setPreference(option.value)} style={styles.segmentItem}>
                  <ThemedView
                    type="backgroundElement"
                    style={[styles.segmentChip, selected && { backgroundColor: theme.accent }]}>
                    <ThemedText type="smallBold" style={selected ? { color: theme.onAccent } : undefined}>
                      {option.label}
                    </ThemedText>
                  </ThemedView>
                </Pressable>
              );
            })}
          </ThemedView>

          <Eyebrow style={styles.sectionTitle}>Notifications</Eyebrow>
          <Card padded={false}>
            <ThemedView style={[styles.settingRow, { backgroundColor: 'transparent' }]}>
              <ThemedText type="small">Daily fact & care reminders</ThemedText>
              <Switch
                value={profile?.notificationsEnabled ?? true}
                onValueChange={handleToggleNotifications}
                trackColor={{ true: theme.accent, false: theme.backgroundSelected }}
              />
            </ThemedView>
          </Card>
          {notifStatusNote && (
            <ThemedText type="small" themeColor="textSecondary" style={styles.notifNote}>
              {notifStatusNote}
            </ThemedText>
          )}
          <Card variant="soft" style={styles.widgetCard}>
            <ThemedText type="smallBold">Reminder actions</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Care reminders now support faster tap-through with mark-done and snooze actions in native builds.
            </ThemedText>
            <View style={styles.profileActions}>
              <Pressable onPress={() => handlePreviewReminder('due')}>
                <ThemedView type="backgroundElement" style={styles.widgetButton}>
                  <ThemedText type="smallBold">Preview due reminder</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable onPress={() => handlePreviewReminder('overdue')}>
                <ThemedView type="backgroundElement" style={styles.widgetButton}>
                  <ThemedText type="smallBold">Preview overdue alert</ThemedText>
                </ThemedView>
              </Pressable>
            </View>
          </Card>

          <Eyebrow style={styles.sectionTitle}>Household sync</Eyebrow>
          <Card variant="soft" style={styles.widgetCard}>
            <ThemedText type="smallBold">Supabase cloud household</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Keep pets, tasks, logs, meds, food, records, and the care team synced across devices with a shared household invite code.
            </ThemedText>
            {!supabaseReady ? (
              <ThemedText type="small" themeColor="textSecondary">
                Add EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY, then run the SQL in supabase/household-sync.sql.
              </ThemedText>
            ) : null}
            {householdConnection ? (
              <>
                <ThemedText type="smallBold">{householdConnection.householdName}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Invite code: {householdConnection.inviteCode}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {householdConnection.dirtyAt
                    ? `Unsynced local changes since ${new Date(householdConnection.dirtyAt).toLocaleString()}`
                    : householdConnection.lastSyncedAt
                      ? `Last synced ${new Date(householdConnection.lastSyncedAt).toLocaleString()}`
                      : 'Not synced yet'}
                </ThemedText>
                <View style={styles.profileActions}>
                  <Pressable onPress={handleSyncNow} disabled={syncBusy}>
                    <ThemedView type="backgroundSelected" style={styles.widgetButton}>
                      <ThemedText type="smallBold">{syncBusy ? 'Syncing…' : 'Sync now'}</ThemedText>
                    </ThemedView>
                  </Pressable>
                  <Pressable onPress={handlePullLatest} disabled={syncBusy}>
                    <ThemedView type="backgroundElement" style={styles.widgetButton}>
                      <ThemedText type="smallBold">Pull latest</ThemedText>
                    </ThemedView>
                  </Pressable>
                  <Pressable onPress={handlePushDevice} disabled={syncBusy}>
                    <ThemedView type="backgroundElement" style={styles.widgetButton}>
                      <ThemedText type="smallBold">Push this device</ThemedText>
                    </ThemedView>
                  </Pressable>
                  <Pressable onPress={handleDisconnectHousehold} disabled={syncBusy}>
                    <ThemedView type="backgroundElement" style={styles.widgetButton}>
                      <ThemedText type="smallBold">Disconnect</ThemedText>
                    </ThemedView>
                  </Pressable>
                </View>
              </>
            ) : (
              <>
                <ThemedView type="backgroundElement" style={styles.nameInputBox}>
                  <TextInput
                    value={householdNameDraft}
                    onChangeText={setHouseholdNameDraft}
                    placeholder="New household name"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.nameInput, { color: theme.text }]}
                  />
                </ThemedView>
                <Pressable onPress={handleCreateHousehold} disabled={syncBusy || !supabaseReady}>
                  <ThemedView type="backgroundSelected" style={styles.widgetButton}>
                    <ThemedText type="smallBold">{syncBusy ? 'Working…' : 'Create synced household'}</ThemedText>
                  </ThemedView>
                </Pressable>
                <ThemedView type="backgroundElement" style={styles.nameInputBox}>
                  <TextInput
                    value={inviteCodeDraft}
                    onChangeText={setInviteCodeDraft}
                    placeholder="Join with invite code"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.nameInput, { color: theme.text }]}
                    autoCapitalize="characters"
                  />
                </ThemedView>
                <Pressable onPress={handleJoinHousehold} disabled={syncBusy || !supabaseReady}>
                  <ThemedView type="backgroundElement" style={styles.widgetButton}>
                    <ThemedText type="smallBold">Join household</ThemedText>
                  </ThemedView>
                </Pressable>
              </>
            )}
            {syncStatusNote ? (
              <ThemedText type="small" themeColor="textSecondary">
                {syncStatusNote}
              </ThemedText>
            ) : null}
          </Card>

          <Eyebrow style={styles.sectionTitle}>Care team</Eyebrow>
          <Card variant="soft" style={styles.widgetCard}>
            <ThemedText type="smallBold">Shared care mode</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Add the people who help with feedings, meds, and checks so care actions can be attributed in the timeline.
            </ThemedText>
            <View style={styles.careTeamWrap}>
              {(careTeam?.caregivers ?? []).map((caregiver) => {
                const selected = caregiver.id === careTeam?.activeCaregiverId;
                return (
                  <ThemedView key={caregiver.id} type="backgroundElement" style={styles.careTeamChip}>
                    <Pressable onPress={() => handleSelectCaregiver(caregiver.id)}>
                      <ThemedText type="smallBold" style={selected ? { color: theme.accent } : undefined}>
                        {selected ? `✓ ${caregiver.name}` : caregiver.name}
                      </ThemedText>
                    </Pressable>
                    {(careTeam?.caregivers.length ?? 0) > 1 ? (
                      <Pressable onPress={() => handleRemoveCaregiver(caregiver.id)} hitSlop={8}>
                        <ThemedText type="small" themeColor="textSecondary">
                          ✕
                        </ThemedText>
                      </Pressable>
                    ) : null}
                  </ThemedView>
                );
              })}
            </View>
            <ThemedView type="backgroundElement" style={styles.nameInputBox}>
              <TextInput
                value={caregiverDraft}
                onChangeText={setCaregiverDraft}
                placeholder="Add caregiver"
                placeholderTextColor={theme.textSecondary}
                style={[styles.nameInput, { color: theme.text }]}
              />
            </ThemedView>
            <Pressable onPress={handleAddCaregiver}>
              <ThemedView type="backgroundElement" style={styles.widgetButton}>
                <ThemedText type="smallBold">Add caregiver</ThemedText>
              </ThemedView>
            </Pressable>
            {careTeamError ? (
              <ThemedText type="small" style={{ color: theme.danger }}>
                {careTeamError}
              </ThemedText>
            ) : null}
          </Card>

          <Eyebrow style={styles.sectionTitle}>Home widget</Eyebrow>
          <Card variant="soft" style={styles.widgetCard}>
            <ThemedText type="smallBold">Pet Care Status widget</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Shows due care and the latest health watch update right on the iPhone home screen.
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {widgetSupported
                ? 'Available in iOS development or production builds. Add it from the home screen after installing a native build.'
                : 'Unavailable here. Widgets need an iPhone native build and do not run inside Expo Go or on Android.'}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {androidWidgetSupported
                ? 'Android quick-check and daily-fact widgets are available in Android native builds through a separate widget integration path.'
                : 'Android quick-check and daily-fact widgets need a native Android build, not Expo Go.'}
            </ThemedText>
            <Pressable onPress={handleRefreshWidget}>
              <ThemedView type="backgroundElement" style={styles.widgetButton}>
                <ThemedText type="smallBold">Refresh widget snapshot</ThemedText>
              </ThemedView>
            </Pressable>
            {widgetStatusNote ? (
              <ThemedText type="small" themeColor="textSecondary">
                {widgetStatusNote}
              </ThemedText>
            ) : null}
          </Card>

          <Eyebrow style={styles.sectionTitle}>Account & data</Eyebrow>
          <ThemedText type="small" themeColor="textSecondary">
            BeastlyFacts keeps your profile on-device, and household care data can optionally sync through Supabase.
          </ThemedText>
          <Card padded={false}>
            <Pressable onPress={handleResetIdentity}>
              <ThemedView style={[styles.settingRow, { backgroundColor: 'transparent' }]}>
                <ThemedText type="small">Reset local profile</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  →
                </ThemedText>
              </ThemedView>
            </Pressable>

            {!confirmingDelete ? (
              <Pressable onPress={() => setConfirmingDelete(true)}>
                <ThemedView
                  style={[styles.settingRow, { backgroundColor: 'transparent', borderTopWidth: 1, borderTopColor: theme.hairline }]}>
                  <ThemedText type="small" style={{ color: theme.danger }}>
                    Delete local account & app data
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    →
                  </ThemedText>
                </ThemedView>
              </Pressable>
            ) : (
              <ThemedView
                style={[styles.confirmDeleteBox, { backgroundColor: 'transparent', borderTopWidth: 1, borderTopColor: theme.hairline }]}>
                <ThemedText type="small">
                  Permanently delete this device&apos;s local profile, pets, care tasks, husbandry logs, saved items,
                  discovered species, and preferences? This cannot be undone.
                </ThemedText>
                <ThemedView style={[styles.confirmDeleteActions, { backgroundColor: 'transparent' }]}>
                  <Pressable onPress={() => setConfirmingDelete(false)} hitSlop={8}>
                    <ThemedText type="link">Cancel</ThemedText>
                  </Pressable>
                  <Pressable onPress={handleDeleteAllData} disabled={deleting} hitSlop={8}>
                    <ThemedText type="linkPrimary" style={{ color: theme.danger }}>
                      {deleting ? 'Deleting…' : 'Delete local account'}
                    </ThemedText>
                  </Pressable>
                </ThemedView>
              </ThemedView>
            )}
          </Card>

          <ThemedView style={styles.aboutBox}>
            <ThemedText type="small" themeColor="textSecondary">
              BeastlyFacts companion · v{version}
            </ThemedText>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
  },
  headerBlock: {
    gap: Spacing.one,
    marginBottom: Spacing.one,
  },
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.one,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  sectionTitle: {
    marginTop: Spacing.four,
    marginBottom: Spacing.two,
  },
  profileCard: {
    gap: Spacing.three,
  },
  identityRow: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  identityText: {
    flex: 1,
  },
  nickname: {
    fontSize: 22,
    lineHeight: 28,
  },
  nameEditRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  nameInputBox: {
    flex: 1,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
  },
  nameInput: {
    height: 40,
    fontSize: 16,
  },
  profileActions: {
    flexDirection: 'row',
    gap: Spacing.two,
    flexWrap: 'wrap',
  },
  profileActionButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  segmentRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  segmentItem: {
    flex: 1,
  },
  segmentChip: {
    borderRadius: Radius.pill,
    paddingVertical: Spacing.two,
    alignItems: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.three,
  },
  notifNote: {
    marginTop: Spacing.one,
  },
  widgetCard: {
    gap: Spacing.two,
  },
  careTeamWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  careTeamChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  widgetButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    alignSelf: 'flex-start',
  },
  confirmDeleteBox: {
    padding: Spacing.three,
    gap: Spacing.two,
  },
  confirmDeleteActions: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  aboutBox: {
    alignItems: 'center',
    marginTop: Spacing.five,
  },
});
