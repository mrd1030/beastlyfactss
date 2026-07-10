import { StyleSheet, View } from 'react-native';

import type { CatalogCareInfo } from '@/content-client/species-catalog';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { Eyebrow } from './eyebrow';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Renders a bundled catalog species's real per-species care numbers
 * (src/content-client/species-catalog.ts's `CatalogCareInfo`) as a row of
 * compact stat tiles, skipping any sub-field that wasn't explicitly
 * grounded in the source guide text for this exact species. This is the
 * quick-reference summary; the long-form prose lives in GuideSections.
 */
export function CareInfoSummary({ careInfo }: { careInfo: CatalogCareInfo }) {
  const tiles: { icon: string; label: string; value: string }[] = [];

  if (careInfo.feedingIntervalDays != null) {
    const days = careInfo.feedingIntervalDays;
    tiles.push({ icon: '🍽️', label: 'Feeding', value: days === 1 ? 'Daily' : `Every ${days}d` });
  }
  if (careInfo.temperatureRangeF?.min != null && careInfo.temperatureRangeF?.max != null) {
    tiles.push({ icon: '🌡️', label: 'Temp', value: `${careInfo.temperatureRangeF.min}–${careInfo.temperatureRangeF.max}°F` });
  }
  if (careInfo.humidityRangePercent?.min != null && careInfo.humidityRangePercent?.max != null) {
    tiles.push({ icon: '💧', label: 'Humidity', value: `${careInfo.humidityRangePercent.min}–${careInfo.humidityRangePercent.max}%` });
  }
  if (careInfo.cleaningIntervalDays != null) {
    const days = careInfo.cleaningIntervalDays;
    tiles.push({ icon: '🧹', label: 'Cleaning', value: days === 1 ? 'Daily' : `Every ${days}d` });
  }

  if (tiles.length === 0) return null;

  return (
    <View style={styles.section}>
      <Eyebrow>Care at a glance</Eyebrow>
      <View style={styles.tileRow}>
        {tiles.map((tile) => (
          <ThemedView key={tile.label} type="backgroundElement" style={styles.tile}>
            <ThemedText type="default">{tile.icon}</ThemedText>
            <ThemedText type="smallBold">{tile.value}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {tile.label}
            </ThemedText>
          </ThemedView>
        ))}
      </View>
    </View>
  );
}

/** Renders a bundled catalog species's real curated `facts[]` as a bullet
 * list under an eyebrow header — the catalog's substitute for a Sanity
 * `body`. */
export function FactsList({ facts }: { facts: string[] }) {
  const theme = useTheme();
  if (facts.length === 0) return null;

  return (
    <View style={styles.section}>
      <Eyebrow>Wild facts</Eyebrow>
      <View style={styles.factsContainer}>
        {facts.map((fact, index) => (
          <View key={index} style={styles.listRow}>
            <ThemedText type="default" style={{ color: theme.accent }}>
              ✦
            </ThemedText>
            <ThemedText type="default" style={styles.listText}>
              {fact}
            </ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  tileRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  tile: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    alignItems: 'center',
    gap: 2,
    minWidth: 92,
    flexGrow: 1,
  },
  factsContainer: {
    gap: Spacing.two,
  },
  listRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  listText: {
    flex: 1,
    lineHeight: 22,
  },
});
