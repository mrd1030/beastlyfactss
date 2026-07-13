import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import type { CatalogGuide } from '@/content-client/species-catalog';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { Card } from './card';
import { Eyebrow } from './eyebrow';
import { ThemedText } from './themed-text';

interface GuideRow {
  key: string;
  icon: string;
  title: string;
  render: () => React.ReactNode;
}

/**
 * The full care guide for a catalog species — beastlyfactss's own real
 * guide content (housing/diet/enrichment/health prose, supply checklist,
 * FAQs, cost estimates), rendered as one card of tappable collapsible
 * sections so the entry screen stays scannable instead of becoming a wall
 * of prose. FAQs/costs are genuinely absent for some species (cat/dog
 * breed guides) and simply don't get a row.
 */
export function GuideSections({ guide }: { guide: CatalogGuide }) {
  const theme = useTheme();
  const [openKey, setOpenKey] = useState<string | null>('housing');

  const prose = (text: string) => (
    <ThemedText type="default" style={styles.prose}>
      {text}
    </ThemedText>
  );

  const rows: GuideRow[] = [
    { key: 'housing', icon: '🏠', title: 'Housing', render: () => prose(guide.housing) },
    { key: 'diet', icon: '🍽️', title: 'Diet', render: () => prose(guide.diet) },
    { key: 'enrichment', icon: '🧠', title: 'Enrichment', render: () => prose(guide.enrichment) },
    { key: 'health', icon: '❤️', title: 'Health', render: () => prose(guide.health) },
    {
      key: 'checklist',
      icon: '✅',
      title: 'Supply checklist',
      render: () => (
        <View style={styles.stack}>
          {guide.checklist.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <ThemedText type="small" style={{ color: theme.success }}>
                ✓
              </ThemedText>
              <ThemedText type="default" style={styles.bulletText}>
                {item}
              </ThemedText>
            </View>
          ))}
        </View>
      ),
    },
  ];

  if (guide.faqs?.length) {
    rows.push({
      key: 'faqs',
      icon: '💬',
      title: 'FAQs',
      render: () => (
        <View style={styles.stack}>
          {guide.faqs!.map((faq, i) => (
            <View key={i} style={styles.faq}>
              <ThemedText type="smallBold">{faq.q}</ThemedText>
              <ThemedText type="default" style={styles.prose}>
                {faq.a}
              </ThemedText>
            </View>
          ))}
        </View>
      ),
    });
  }

  if (guide.costs?.setup?.length || guide.costs?.annual?.length) {
    rows.push({
      key: 'costs',
      icon: '💰',
      title: 'What it costs',
      render: () => (
        <View style={styles.stack}>
          {(['setup', 'annual'] as const).map((kind) => {
            const items = guide.costs?.[kind];
            if (!items?.length) return null;
            const low = items.reduce((sum, i) => sum + i.low, 0);
            const high = items.reduce((sum, i) => sum + i.high, 0);
            return (
              <View key={kind} style={styles.costGroup}>
                <View style={styles.costHeaderRow}>
                  <ThemedText type="smallBold">{kind === 'setup' ? 'One-time setup' : 'Per year'}</ThemedText>
                  <ThemedText type="smallBold" style={{ color: theme.accent }}>
                    ${low}–${high}
                  </ThemedText>
                </View>
                {items.map((item, i) => (
                  <View key={i} style={styles.costRow}>
                    <ThemedText type="small" themeColor="textSecondary" style={styles.costItem}>
                      {item.item}
                    </ThemedText>
                    <ThemedText type="small">
                      ${item.low}–${item.high}
                    </ThemedText>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      ),
    });
  }

  return (
    <View style={styles.container}>
      <Eyebrow>Care guide</Eyebrow>
      <Card padded={false}>
        {rows.map((row, index) => {
          const open = openKey === row.key;
          return (
            <View key={row.key} style={index > 0 && { borderTopWidth: 1, borderTopColor: theme.hairline }}>
              <Pressable
                onPress={() => setOpenKey(open ? null : row.key)}
                style={({ pressed }) => [styles.rowHeader, pressed && { opacity: 0.6 }]}>
                <ThemedText type="default">{row.icon}</ThemedText>
                <ThemedText type="smallBold" style={styles.rowTitle}>
                  {row.title}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {open ? '▾' : '▸'}
                </ThemedText>
              </Pressable>
              {open && <View style={styles.rowBody}>{row.render()}</View>}
            </View>
          );
        })}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
  },
  rowTitle: {
    flex: 1,
  },
  rowBody: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.three,
  },
  prose: {
    lineHeight: 22,
  },
  stack: {
    gap: Spacing.two,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  bulletText: {
    flex: 1,
    lineHeight: 22,
  },
  faq: {
    gap: Spacing.one,
    borderRadius: Radius.sm,
  },
  costGroup: {
    gap: Spacing.one,
  },
  costHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.one,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  costItem: {
    flex: 1,
  },
});
