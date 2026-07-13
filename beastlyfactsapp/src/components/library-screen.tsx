import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Image, Pressable, RefreshControl, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMenu } from '@/components/app-menu';
import { Card } from '@/components/card';
import { CategoryChips } from '@/components/category-chips';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TwoToneTitle } from '@/components/two-tone-title';
import { Collapsible } from '@/components/ui/collapsible';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import {
    getAllEncyclopediaAnimals,
    getAppRouteFromContentLink,
    getDifficultyTone,
    getEncyclopediaCategories,
    getEncyclopediaCategoryEmoji,
    getGlossaryCategories,
    getGuideImageSourceForAnimal,
} from '@/content-client/encyclopedia-catalog';
import { getGuideImageSource } from '@/content-client/guide-image-map';
import { getAllCategories, getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import type { ProvisionalEntry } from '@/content-client/types';
import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';

type LibraryView = 'guides' | 'encyclopedia';

function LibraryToggle({ activeView }: { activeView: LibraryView }) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={styles.toggleRow}>
      {([
        ['guides', 'Care Guides'],
        ['encyclopedia', 'Encyclopedia'],
      ] as const).map(([view, label]) => {
        const selected = activeView === view;
        return (
          <Pressable
            key={view}
            onPress={() => router.replace(view === 'guides' ? '/guides' : '/guides?view=encyclopedia')}>
            <ThemedView
              type="backgroundElement"
              style={[styles.toggleChip, selected && { backgroundColor: theme.accent }]}>
              <ThemedText type="smallBold" style={selected ? { color: theme.onAccent } : undefined}>
                {label}
              </ThemedText>
            </ThemedView>
          </Pressable>
        );
      })}
    </View>
  );
}

function GuidesView() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const theme = useTheme();
  const { favoriteIds, toggleFavorite } = useFavorites();
  // Bundled species guides only. Sanity blog posts used to be merged in
  // here, which muddied the category chips with blog-only categories and
  // made the count unrelatable to the encyclopedia - they now live on the
  // dedicated /blog screen instead.
  const catalogEntries = useMemo(() => getAllSpeciesAsEntries(), []);
  const catalogCategories = useMemo(() => getAllCategories(), []);

  // The non-species guides (dog/cat universal care + the dog size guides).
  // Counted separately so "species guides" lines up with the encyclopedia's
  // profile count - every species guide has a matching profile.
  const generalGuideCount = useMemo(
    () => catalogEntries.filter((entry) => /(-universal|-breed)$/.test(entry._id)).length,
    [catalogEntries]
  );

  const visibleEntries = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return catalogEntries.filter((entry) => {
      if (activeCategory && entry.categoryTitle !== activeCategory) return false;
      if (query) {
        const haystack = `${entry.title} ${entry.excerpt ?? ''} ${entry.categoryTitle ?? ''}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [activeCategory, catalogEntries, searchText]);

  const openEntry = (entry: ProvisionalEntry) => {
    router.push({ pathname: '/entry/[id]', params: { id: entry._id } });
  };

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={visibleEntries}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        const localThumb = getGuideImageSource(item.slug ?? item._id);
        const isSaved = favoriteIds.has(item._id);
        const categoryEmoji = item.categoryTitle ? getEncyclopediaCategoryEmoji(item.categoryTitle) : null;
        return (
          <Pressable onPress={() => openEntry(item)}>
            <Card variant="filled" style={styles.entryCard}>
              {/* Full-width image — contain so no face/eyes are ever cropped */}
              {localThumb ? (
                <Image source={localThumb} style={styles.entryThumb} resizeMode="contain" />
              ) : (
                <ThemedView type="backgroundSelected" style={[styles.entryThumb, styles.entryFallbackThumb]}>
                  <ThemedText style={styles.fallbackEmoji}>{item.emoji ?? '📘'}</ThemedText>
                </ThemedView>
              )}
              {/* Text body below image */}
              <View style={styles.entryBody}>
                <View style={styles.entryCardHeader}>
                  <ThemedText type="smallBold" numberOfLines={2} style={styles.entryTitle}>
                    {item.title}
                  </ThemedText>
                  <Pressable onPress={() => toggleFavorite(item._id)} hitSlop={8}>
                    <ThemedText type="linkPrimary">{isSaved ? '★ Saved' : '☆ Save'}</ThemedText>
                  </Pressable>
                </View>
                <View style={styles.entryMetaRow}>
                  <ThemedView type="backgroundSelected" style={styles.entryMetaBadge}>
                    <ThemedText type="small">Care guide</ThemedText>
                  </ThemedView>
                  {item.categoryTitle ? (
                    <ThemedText type="small" themeColor="textSecondary">
                      {categoryEmoji ? `${categoryEmoji} ` : ''}
                      {item.categoryTitle}
                    </ThemedText>
                  ) : null}
                </View>
                {item.excerpt && (
                  <ThemedText type="small" themeColor="textSecondary" numberOfLines={3} style={styles.entryExcerpt}>
                    {item.excerpt}
                  </ThemedText>
                )}
              </View>
            </Card>
          </Pressable>
        );
      }}
      ListHeaderComponent={
        <View style={styles.headerContent}>
          <View style={styles.titleRow}>
            <TwoToneTitle first="Lib" second="rary" style={styles.title} />
            <AppMenu />
          </View>

          <LibraryToggle activeView="guides" />

          <ThemedView type="backgroundElement" style={styles.searchBox}>
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search guides, species, or categories…"
              placeholderTextColor={theme.textSecondary}
              style={[styles.searchInput, { color: theme.text }]}
            />
          </ThemedView>

          <CategoryChips
            options={catalogCategories.map((item) => {
              const emoji = getEncyclopediaCategoryEmoji(item);
              return { key: item, label: emoji ? `${emoji} ${item}` : item };
            })}
            active={activeCategory}
            onSelect={setActiveCategory}
          />

          <View style={styles.resultHeader}>
            <ThemedText type="smallBold">
              {activeCategory || searchText.trim()
                ? `${visibleEntries.length} of ${catalogEntries.length} guides`
                : `${catalogEntries.length - generalGuideCount} species guides · ${generalGuideCount} general`}
            </ThemedText>
          </View>
        </View>
      }
      ListEmptyComponent={
        <ThemedText type="small" themeColor="textSecondary">
          No guides match that search.
        </ThemedText>
      }
    />
  );
}

function EncyclopediaView() {
  const router = useRouter();
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const animals = useMemo(() => getAllEncyclopediaAnimals(), []);
  const categories = useMemo(() => getEncyclopediaCategories(), []);
  const glossaryCategories = useMemo(() => getGlossaryCategories(), []);

  const visibleAnimals = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return animals.filter((animal) => {
      if (activeCategory && animal.category !== activeCategory) return false;
      if (!query) return true;
      return `${animal.name} ${animal.scientific} ${animal.bio.overview}`.toLowerCase().includes(query);
    });
  }, [activeCategory, animals, searchText]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setActiveCategory(null);
    setSearchText('');
    await Promise.resolve();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.list}
      contentContainerStyle={styles.encyclopediaContent}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
      <View style={styles.headerContent}>
        <View style={styles.titleRow}>
          <TwoToneTitle first="Encyclo" second="pedia" style={styles.title} />
          <AppMenu />
        </View>

        <LibraryToggle activeView="encyclopedia" />

        <ThemedView type="backgroundElement" style={styles.searchBox}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search species, scientific names, or overview text…"
            placeholderTextColor={theme.textSecondary}
            style={[styles.searchInput, { color: theme.text }]}
          />
        </ThemedView>

        <CategoryChips
          options={categories.map((category) => ({ key: category.name, label: `${category.emoji} ${category.name}` }))}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        <View style={styles.resultHeader}>
          <ThemedText type="smallBold">
            {activeCategory || searchText.trim()
              ? `${visibleAnimals.length} of ${animals.length} profiles`
              : `${animals.length} species profiles`}
          </ThemedText>
        </View>
      </View>

      <View style={styles.entryStack}>
        {visibleAnimals.map((animal) => {
          const imageSource = getGuideImageSourceForAnimal(animal);
          return (
            <Pressable key={animal.id} onPress={() => router.push({ pathname: '/encyclopedia/[id]', params: { id: animal.id } })}>
              <Card variant="filled" style={styles.entryCard}>
                {imageSource ? (
                  <Image source={imageSource} style={styles.entryThumb} resizeMode="contain" />
                ) : (
                  <ThemedView type="backgroundSelected" style={[styles.entryThumb, styles.entryFallbackThumb]}>
                    <ThemedText style={styles.fallbackEmoji}>{animal.emoji}</ThemedText>
                  </ThemedView>
                )}
                <View style={styles.entryBody}>
                  <View style={styles.entryCardHeader}>
                    <ThemedText type="smallBold" numberOfLines={2} style={styles.entryTitle}>
                      {animal.name}
                    </ThemedText>
                  </View>
                  <View style={styles.entryMetaRow}>
                    <ThemedView type="backgroundSelected" style={styles.entryMetaBadge}>
                      <ThemedText type="small">Reference</ThemedText>
                    </ThemedView>
                    <ThemedText type="small" themeColor="textSecondary">
                      {animal.scientific}
                    </ThemedText>
                  </View>
                  <ThemedText type="small" themeColor={getDifficultyTone(animal.difficulty)}>
                    {animal.category} · {animal.difficulty}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary" numberOfLines={3} style={styles.entryExcerpt}>
                    {animal.bio.overview}
                  </ThemedText>
                </View>
              </Card>
            </Pressable>
          );
        })}
      </View>

      <Collapsible title="Glossary">
        <View style={styles.glossaryStack}>
          {glossaryCategories.map((category) => (
            <Collapsible key={category.id} title={`${category.emoji} ${category.label}`}>
              <View style={styles.termStack}>
                {category.terms.map((term) => (
                  <Card key={`${category.id}-${term.term}`} variant="filled" style={styles.termCard}>
                    <ThemedText type="smallBold">{term.term}</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {term.definition}
                    </ThemedText>
                    {!!term.related?.length && (
                      <View style={styles.relatedStack}>
                        <ThemedText type="smallBold">Related</ThemedText>
                        {term.related.map((related) => {
                          const appRoute = getAppRouteFromContentLink(related.to);
                          return appRoute ? (
                            <Pressable key={related.label} onPress={() => router.push(appRoute)}>
                              <ThemedText type="linkPrimary">{related.label}</ThemedText>
                            </Pressable>
                          ) : (
                            <ThemedText key={related.label} type="small" themeColor="textSecondary">
                              {related.label}
                            </ThemedText>
                          );
                        })}
                      </View>
                    )}
                  </Card>
                ))}
              </View>
            </Collapsible>
          ))}
        </View>
      </Collapsible>
    </ScrollView>
  );
}

export default function LibraryScreen() {
  const { view } = useLocalSearchParams<{ view?: string }>();
  const activeView: LibraryView = view === 'encyclopedia' ? 'encyclopedia' : 'guides';

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>{activeView === 'guides' ? <GuidesView /> : <EncyclopediaView />}</SafeAreaView>
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
    paddingTop: Spacing.three,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.two,
  },
  encyclopediaContent: {
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.three,
  },
  headerContent: {
    gap: Spacing.three,
    marginBottom: Spacing.one,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    flexWrap: 'wrap',
  },
  toggleChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  searchBox: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
  },
  searchInput: {
    height: 44,
    fontSize: 14,
  },
  resultHeader: {
    gap: Spacing.half,
  },
  entryStack: {
    gap: Spacing.two,
  },
  entryCard: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  entryThumb: {
    width: '100%',
    height: 220,
    borderRadius: Radius.lg,
  },
  entryFallbackThumb: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: undefined,
  },
  fallbackEmoji: {
    fontSize: 48,
    lineHeight: 60,
  },
  entryBody: {
    padding: Spacing.three,
    gap: Spacing.one,
  },
  entryCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  entryTitle: {
    flex: 1,
  },
  entryMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
    alignItems: 'center',
  },
  entryMetaBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  entryExcerpt: {
    lineHeight: 18,
  },
  glossaryStack: {
    gap: Spacing.two,
  },
  termStack: {
    gap: Spacing.two,
  },
  termCard: {
    gap: Spacing.one,
  },
  relatedStack: {
    gap: Spacing.one,
  },
});
