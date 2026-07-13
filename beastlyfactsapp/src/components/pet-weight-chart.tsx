import { StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export interface PetWeightPoint {
  id: string;
  label: string;
  value: number;
}

export function PetWeightChart({ points }: { points: PetWeightPoint[] }) {
  const theme = useTheme();
  if (points.length === 0) return null;

  const maxValue = Math.max(...points.map((point) => point.value), 1);
  const latestId = points[points.length - 1]?.id;

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="smallBold">Weight trend</ThemedText>
      <View style={styles.row}>
        {points.map((point) => {
          const barHeight = Math.max(20, Math.round((point.value / maxValue) * 72));
          const isLatest = point.id === latestId;
          return (
            <View key={point.id} style={styles.column}>
              <ThemedText type="small" themeColor="textSecondary">
                {point.value}g
              </ThemedText>
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor: isLatest ? theme.accent : theme.backgroundSelected,
                    },
                  ]}
                />
              </View>
              <ThemedText type="small" themeColor="textSecondary">
                {point.label}
              </ThemedText>
            </View>
          );
        })}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.one,
  },
  barTrack: {
    height: 80,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bar: {
    width: '70%',
    borderRadius: Radius.sm,
  },
});
