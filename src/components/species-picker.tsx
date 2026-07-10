import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import type { ProvisionalEntry } from '@/content-client/types';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Search/select list linking a pet to one of its possible "species" —
 * primarily the 78 bundled catalog species (content-client/species-catalog.ts),
 * plus any supplementary Sanity `post` entries not already covered by the
 * catalog (see PackScreen's identical dedup). Used by the Add/Edit Pet
 * form. Deliberately a plain filtered list rather than a native
 * picker/modal, matching the rest of this app's simple inline-list style
 * (e.g. the Browse category chip row).
 */
export function SpeciesPicker({
  entries,
  selectedId,
  onSelect,
}: {
  entries: ProvisionalEntry[];
  selectedId: string | null;
  onSelect: (entry: ProvisionalEntry | null) => void;
}) {
  const theme = useTheme();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => `${e.title} ${e.categoryTitle ?? ''}`.toLowerCase().includes(q));
  }, [entries, query]);

  const selectedEntry = entries.find((e) => e._id === selectedId);

  return (
    <View style={styles.container}>
      {selectedEntry && (
        <ThemedView type="backgroundSelected" style={styles.selectedRow}>
          <ThemedText type="small" style={styles.selectedText}>
            Linked to: {selectedEntry.title}
          </ThemedText>
          <Pressable onPress={() => onSelect(null)} hitSlop={8}>
            <ThemedText type="linkPrimary">Unlink</ThemedText>
          </Pressable>
        </ThemedView>
      )}

      <ThemedView type="backgroundElement" style={styles.searchBox}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search species by name…"
          placeholderTextColor={theme.textSecondary}
          style={[styles.searchInput, { color: theme.text }]}
        />
      </ThemedView>

      <ScrollView style={styles.list} nestedScrollEnabled>
        {filtered.length === 0 && (
          <ThemedText type="small" themeColor="textSecondary" style={styles.emptyText}>
            No matching entries.
          </ThemedText>
        )}
        {filtered.map((entry) => {
          const selected = entry._id === selectedId;
          return (
            <Pressable key={entry._id} onPress={() => onSelect(selected ? null : entry)}>
              <ThemedView
                type={selected ? 'backgroundSelected' : 'background'}
                style={styles.optionRow}>
                <ThemedText type="small" numberOfLines={1} style={styles.optionTitle}>
                  {entry.emoji ? `${entry.emoji} ` : ''}
                  {entry.title}
                </ThemedText>
                {entry.categoryTitle && (
                  <ThemedText type="small" themeColor="textSecondary">
                    {entry.categoryTitle}
                  </ThemedText>
                )}
              </ThemedView>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },
  selectedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
  },
  selectedText: {
    flex: 1,
    marginRight: Spacing.two,
  },
  searchBox: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  searchInput: {
    height: 40,
    fontSize: 14,
  },
  list: {
    maxHeight: 220,
  },
  emptyText: {
    padding: Spacing.two,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Spacing.one,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    marginBottom: 2,
  },
  optionTitle: {
    flex: 1,
    marginRight: Spacing.two,
  },
});
