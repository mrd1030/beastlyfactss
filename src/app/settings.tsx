import { version } from 'expo/package.json';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { Eyebrow } from '@/components/eyebrow';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useThemePreference } from '@/contexts/theme-preference';
import { resetAllLocalData } from '@/db/helpers';
import { useTheme } from '@/hooks/use-theme';
import { ensureNotificationPermission } from '@/lib/notification-permission';
import { getProfile, resetIdentity, updateProfile, type ThemePreference } from '@/lib/profile-store';

const THEME_OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

/**
 * Settings screen — a pushed (stack) screen reached from Profile via a
 * gear icon, not its own tab (matching iOS HIG / Material Design
 * convention where Settings lives off Account/Profile, not in the tab
 * bar). Holds Appearance, Notifications, account reset, and delete-all-data
 * — everything that isn't identity/stats/"My Pets" (which stayed on the
 * Profile tab). All local-only, no accounts/backend yet — see
 * profile-store.ts and db/helpers/reset.ts.
 */
export default function SettingsScreen() {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { preference, setPreference } = useThemePreference();

  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [notifStatusNote, setNotifStatusNote] = useState<string | null>(null);

  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });

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
      await resetAllLocalData();
      await queryClient.invalidateQueries();
      setConfirmingDelete(false);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedText type="smallBold">Settings</ThemedText>
          <ThemedView style={styles.headerSpacer} />
        </ThemedView>

        <ScrollView contentContainerStyle={styles.scrollContent}>
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

          <Eyebrow style={styles.sectionTitle}>Account</Eyebrow>
          <Card padded={false}>
            <Pressable onPress={handleResetIdentity}>
              <ThemedView style={[styles.settingRow, { backgroundColor: 'transparent' }]}>
                <ThemedText type="small">Reset local profile (sign out)</ThemedText>
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
                    Delete all data
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
                  Permanently delete every pet, care task, husbandry log, favorite, and discovered species on this
                  device? This cannot be undone.
                </ThemedText>
                <ThemedView style={[styles.confirmDeleteActions, { backgroundColor: 'transparent' }]}>
                  <Pressable onPress={() => setConfirmingDelete(false)} hitSlop={8}>
                    <ThemedText type="link">Cancel</ThemedText>
                  </Pressable>
                  <Pressable onPress={handleDeleteAllData} disabled={deleting} hitSlop={8}>
                    <ThemedText type="linkPrimary" style={{ color: theme.danger }}>
                      {deleting ? 'Deleting…' : 'Delete everything'}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSpacer: {
    width: 44,
  },
  scrollContent: {
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.one,
  },
  sectionTitle: {
    marginTop: Spacing.four,
    marginBottom: Spacing.two,
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
