import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

import { isDatabaseAvailable, requireDb } from './client';
import migrations from './migrations/migrations';

/**
 * Gates rendering until the local SQLite schema is up to date. Runs on
 * every app start. If the database couldn't open at all (see
 * src/db/client.ts — expected on a plain web preview, which lacks the
 * cross-origin isolation expo-sqlite's sync web backend needs), this
 * skips migrations entirely and renders the app anyway rather than
 * blocking or crashing; local-storage-backed features simply won't
 * persist in that environment.
 */
export function DatabaseProvider({ children }: PropsWithChildren) {
  if (!isDatabaseAvailable) {
    return children;
  }
  return <MigrationGate>{children}</MigrationGate>;
}

function MigrationGate({ children }: PropsWithChildren) {
  const { success, error } = useMigrations(requireDb(), migrations);

  if (error) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText type="smallBold">Could not set up local storage</ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={styles.message}>
          {error.message}
        </ThemedText>
      </ThemedView>
    );
  }

  if (!success) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText type="small" themeColor="textSecondary">
          Setting up local storage…
        </ThemedText>
      </ThemedView>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    padding: Spacing.four,
  },
  message: {
    textAlign: 'center',
  },
});
