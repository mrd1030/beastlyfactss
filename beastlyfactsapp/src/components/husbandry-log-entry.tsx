import { Image, Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import type { HusbandryLogEntry, HusbandryLogType } from '@/db/types';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function formatActivityTitle(entry: HusbandryLogEntry): string {
  if (entry.title) return entry.title;
  switch (entry.entryType as HusbandryLogType) {
    case 'feeding':
      return 'Feeding log';
    case 'weight':
      return 'Weight check';
    case 'shed':
      return 'Shed log';
    case 'vet':
      return 'Vet visit';
    case 'symptom':
      return 'Symptom log';
    case 'medication':
      return 'Medication given';
    case 'cleaning':
      return 'Cleaning completed';
    case 'water':
      return 'Water refreshed';
    case 'check':
      return 'Environment checked';
    case 'task':
      return 'Care task completed';
    default:
      return 'General note';
  }
}

export function getLogIcon(entryType: HusbandryLogType | string): string {
  switch (entryType) {
    case 'feeding':
      return '🍽';
    case 'weight':
      return '⚖';
    case 'shed':
      return '🦎';
    case 'vet':
      return '🩺';
    case 'symptom':
      return '🚨';
    case 'medication':
      return '💊';
    case 'cleaning':
      return '🧼';
    case 'water':
      return '💧';
    case 'check':
      return '🌡️';
    case 'task':
      return '✅';
    default:
      return '📝';
  }
}

/**
 * One husbandry-log row — shared by the pet detail screen's recent-activity
 * preview and the full paginated log screen, so the two never drift.
 */
export function HusbandryLogEntryCard({
  entry,
  onDelete,
}: {
  entry: HusbandryLogEntry;
  onDelete: (id: string) => void;
}) {
  return (
    <ThemedView type="backgroundElement" style={styles.logRow}>
      <View style={styles.logHeaderRow}>
        <View style={styles.logTitleRow}>
          <ThemedText type="smallBold">
            {getLogIcon(entry.entryType)} {formatActivityTitle(entry)}
          </ThemedText>
          {entry.weightGrams != null && (
            <ThemedView type="backgroundSelected" style={styles.weightBadge}>
              <ThemedText type="small">{entry.weightGrams} g</ThemedText>
            </ThemedView>
          )}
        </View>
        <Pressable onPress={() => onDelete(entry.id)} hitSlop={8}>
          <ThemedText type="small" themeColor="textSecondary">
            ✕
          </ThemedText>
        </Pressable>
      </View>
      <ThemedText type="small" themeColor="textSecondary">
        {new Date(entry.timestamp).toLocaleString()}
      </ThemedText>
      {entry.actorName ? (
        <ThemedText type="small" themeColor="textSecondary">
          Logged by {entry.actorName}
        </ThemedText>
      ) : null}
      {(entry.symptomSeverity || entry.symptomContext) && (
        <View style={styles.logMetaRow}>
          {entry.symptomSeverity && (
            <ThemedView type="backgroundSelected" style={styles.logBadge}>
              <ThemedText type="small">{entry.symptomSeverity}</ThemedText>
            </ThemedView>
          )}
          {entry.symptomContext && (
            <ThemedView type="backgroundSelected" style={styles.logBadge}>
              <ThemedText type="small">{entry.symptomContext}</ThemedText>
            </ThemedView>
          )}
        </View>
      )}
      {entry.photoUri && <Image source={{ uri: entry.photoUri }} style={styles.timelinePhoto} />}
      <ThemedText type="small">{entry.note}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  logRow: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    gap: Spacing.one,
    marginBottom: Spacing.one,
  },
  logHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  logTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Spacing.one,
    flex: 1,
  },
  weightBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  logMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
  },
  logBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  timelinePhoto: {
    width: '100%',
    height: 160,
    borderRadius: Radius.md,
  },
});
