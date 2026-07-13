import Constants from 'expo-constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Switch, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMenu } from '@/components/app-menu';
import { Card } from '@/components/card';
import { Eyebrow } from '@/components/eyebrow';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TwoToneTitle } from '@/components/two-tone-title';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useAuth } from '@/contexts/auth-context';
import { useThemePreference } from '@/contexts/theme-preference';
import { resetAllLocalData } from '@/db/helpers';
import { useTheme } from '@/hooks/use-theme';
import { sendSignInCode, signOutOfAccount, verifySignInCode } from '@/lib/auth';
import { scheduleCareReminderPreview } from '@/lib/care-notifications';
import { addCaregiver, clearCareTeam, getCareTeam, removeCaregiver, setActiveCaregiver, syncSelfCaregiverName } from '@/lib/care-team-store';
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
 * Settings tab — profile editing, appearance, notifications, and account/
 * data controls. Profile/preferences stay on-device only; a Supabase email
 * account (see contexts/auth-context.tsx) is what makes the household-sync
 * section below usable, since joining a household now requires being a
 * signed-in, authorized member rather than just knowing its invite code.
 */
export default function SettingsScreen() {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { preference, setPreference } = useThemePreference();
  const { user } = useAuth();

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
  const [emailDraft, setEmailDraft] = useState('');
  const [codeDraft, setCodeDraft] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [authBusy, setAuthBusy] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
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
    const trimmed = nameDraft.trim() || 'Beast Keeper';
    await updateProfile({ displayName: trimmed });
    await syncSelfCaregiverName(trimmed);
    setEditingName(false);
    await queryClient.invalidateQueries({ queryKey: ['profile'] });
    await queryClient.invalidateQueries({ queryKey: ['careTeam'] });
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
    const fresh = await resetIdentity();
    await syncSelfCaregiverName(fresh.displayName);
    queryClient.invalidateQueries({ queryKey: ['profile'] });
    queryClient.invalidateQueries({ queryKey: ['careTeam'] });
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
      setWidgetStatusNote('Home widget refresh needs the full app installed on an iPhone or Android device.');
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
        setSyncStatusNote('Cloud sync isn\'t available in this build yet.');
      } else if (result.status === 'database-unavailable') {
        setSyncStatusNote('Cloud sync needs the local device database, which is unavailable in this preview environment.');
      } else if (result.status === 'not-signed-in') {
        setSyncStatusNote('Sign in above first to use cloud sync.');
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

  const handleSendCode = async () => {
    setAuthBusy(true);
    setAuthError(null);
    const result = await sendSignInCode(emailDraft);
    if (result.status === 'sent') {
      setCodeSent(true);
    } else if (result.status === 'error') {
      setAuthError(result.message);
    } else {
      setAuthError('Cloud sign-in isn\'t available in this build yet.');
    }
    setAuthBusy(false);
  };

  const handleVerifyCode = async () => {
    setAuthBusy(true);
    setAuthError(null);
    const result = await verifySignInCode(emailDraft, codeDraft);
    if (result.status === 'verified') {
      setCodeDraft('');
      setCodeSent(false);
    } else if (result.status === 'error') {
      setAuthError(result.message);
    } else {
      setAuthError('Cloud sign-in isn\'t available in this build yet.');
    }
    setAuthBusy(false);
  };

  const handleUseDifferentEmail = () => {
    setCodeSent(false);
    setCodeDraft('');
    setAuthError(null);
  };

  const handleSignOut = async () => {
    await signOutOfAccount();
    setEmailDraft('');
    setCodeDraft('');
    setCodeSent(false);
    await refreshSyncQueries();
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
          <View style={styles.headerRow}>
            <View style={styles.headerBlock}>
              <TwoToneTitle first="Sett" second="ings" style={styles.title} />
              <ThemedText type="small" themeColor="textSecondary">
                Update your profile, appearance, reminders, and local app data.
              </ThemedText>
            </View>
            <AppMenu />
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

          <Eyebrow style={styles.sectionTitle}>Account</Eyebrow>
          <Card variant="soft" style={styles.widgetCard}>
            <ThemedText type="smallBold">Cloud account</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Sign in with your email so you can create or join a shared household below - this is what makes an
              invite code actually authorize a device, instead of anyone who sees the code getting full access.
            </ThemedText>
            {!supabaseReady ? (
              <ThemedText type="small" themeColor="textSecondary">
                Cloud sign-in isn&apos;t available in this build yet.
              </ThemedText>
            ) : user ? (
              <>
                <ThemedText type="smallBold">{user.email}</ThemedText>
                <Pressable onPress={handleSignOut}>
                  <ThemedView type="backgroundElement" style={styles.widgetButton}>
                    <ThemedText type="smallBold">Sign out</ThemedText>
                  </ThemedView>
                </Pressable>
              </>
            ) : codeSent ? (
              <>
                <ThemedText type="small" themeColor="textSecondary">
                  Enter the 6-digit code sent to {emailDraft}.
                </ThemedText>
                <ThemedView type="backgroundElement" style={styles.nameInputBox}>
                  <TextInput
                    value={codeDraft}
                    onChangeText={setCodeDraft}
                    placeholder="6-digit code"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.nameInput, { color: theme.text }]}
                    keyboardType="number-pad"
                    autoFocus
                  />
                </ThemedView>
                <View style={styles.profileActions}>
                  <Pressable onPress={handleVerifyCode} disabled={authBusy}>
                    <ThemedView type="backgroundSelected" style={styles.widgetButton}>
                      <ThemedText type="smallBold">{authBusy ? 'Verifying…' : 'Verify code'}</ThemedText>
                    </ThemedView>
                  </Pressable>
                  <Pressable onPress={handleUseDifferentEmail} disabled={authBusy}>
                    <ThemedView type="backgroundElement" style={styles.widgetButton}>
                      <ThemedText type="smallBold">Use a different email</ThemedText>
                    </ThemedView>
                  </Pressable>
                </View>
              </>
            ) : (
              <>
                <ThemedView type="backgroundElement" style={styles.nameInputBox}>
                  <TextInput
                    value={emailDraft}
                    onChangeText={setEmailDraft}
                    placeholder="you@example.com"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.nameInput, { color: theme.text }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </ThemedView>
                <Pressable onPress={handleSendCode} disabled={authBusy}>
                  <ThemedView type="backgroundSelected" style={styles.widgetButton}>
                    <ThemedText type="smallBold">{authBusy ? 'Sending…' : 'Send sign-in code'}</ThemedText>
                  </ThemedView>
                </Pressable>
              </>
            )}
            {authError ? (
              <ThemedText type="small" style={{ color: theme.danger }}>
                {authError}
              </ThemedText>
            ) : null}
          </Card>

          <Eyebrow style={styles.sectionTitle}>Household sync</Eyebrow>
          <Card variant="soft" style={styles.widgetCard}>
            <ThemedText type="smallBold">Supabase cloud household</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Keep pets, tasks, logs, meds, food, records, and the care team synced across devices with a shared household invite code.
            </ThemedText>
            {!supabaseReady ? (
              <ThemedText type="small" themeColor="textSecondary">
                Cloud sync isn&apos;t available in this build yet.
              </ThemedText>
            ) : !user ? (
              <ThemedText type="small" themeColor="textSecondary">
                Sign in above to enable cloud sync.
              </ThemedText>
            ) : householdConnection ? (
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
                <Pressable onPress={handleCreateHousehold} disabled={syncBusy}>
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
                <Pressable onPress={handleJoinHousehold} disabled={syncBusy}>
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
                ? 'Add it from your home screen: touch and hold, tap the + button, then search for BeastlyFacts.'
                : 'iPhone only, and requires the full app installed from the App Store rather than this preview.'}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {androidWidgetSupported
                ? 'Android quick-check and daily-fact widgets are also available - add them the same way from your home screen.'
                : 'Android quick-check and daily-fact widgets are coming soon.'}
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
              BeastlyFacts companion · v{Constants.expoConfig?.version ?? '1.0.0'}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  headerBlock: {
    flex: 1,
    gap: Spacing.one,
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
