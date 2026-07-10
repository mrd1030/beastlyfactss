import { StyleSheet, View } from 'react-native';

import type { CatalogCareInfo } from '@/content-client/species-catalog';
import { Spacing } from '@/constants/theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Renders a bundled catalog species's real per-species care numbers
 * (src/content-client/species-catalog.ts's `CatalogCareInfo`), skipping
 * any sub-field that wasn't explicitly grounded in the source guide text
 * for this exact species. Deliberately terse — this is a quick-reference
 * summary, not the long-form housing/diet prose the original guides have
 * (that prose isn't part of the bundled catalog; see facts/quiz instead).
 */
export function CareInfoSummary({ careInfo }: { careInfo: CatalogCareInfo }) {
  const rows: { label: string; value: string }[] = [];

  if (careInfo.feedingIntervalDays != null) {
    const days = careInfo.feedingIntervalDays;
    rows.push({ label: 'Feeding', value: days === 1 ? 'Daily' : `Every ${days} days` });
  }
  if (careInfo.temperatureRangeF?.min != null && careInfo.temperatureRangeF?.max != null) {
    rows.push({ label: 'Temperature', value: `${careInfo.temperatureRangeF.min}–${careInfo.temperatureRangeF.max}°F` });
  }
  if (careInfo.humidityRangePercent?.min != null && careInfo.humidityRangePercent?.max != null) {
    rows.push({ label: 'Humidity', value: `${careInfo.humidityRangePercent.min}–${careInfo.humidityRangePercent.max}%` });
  }
  if (careInfo.cleaningIntervalDays != null) {
    const days = careInfo.cleaningIntervalDays;
    rows.push({ label: 'Cleaning', value: days === 1 ? 'Daily' : `Every ${days} days` });
  }

  if (rows.length === 0) return null;

  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      <ThemedText type="smallBold">Care at a glance</ThemedText>
      {rows.map((row) => (
        <View key={row.label} style={styles.row}>
          <ThemedText type="small" themeColor="textSecondary">
            {row.label}
          </ThemedText>
          <ThemedText type="small">{row.value}</ThemedText>
        </View>
      ))}
    </ThemedView>
  );
}

/** Renders a bundled catalog species's real curated `facts[]` as a plain
 * bullet list — this is the catalog's substitute for a Sanity `body`
 * (the catalog doesn't carry long-form portable-text content). */
export function FactsList({ facts }: { facts: string[] }) {
  if (facts.length === 0) return null;

  return (
    <View style={styles.factsContainer}>
      <ThemedText type="smallBold">Facts</ThemedText>
      {facts.map((fact, index) => (
        <View key={index} style={styles.listRow}>
          <ThemedText type="default">{'•'}</ThemedText>
          <ThemedText type="default" style={styles.listText}>
            {fact}
          </ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  factsContainer: {
    gap: Spacing.two,
  },
  listRow: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  listText: {
    flex: 1,
  },
});
