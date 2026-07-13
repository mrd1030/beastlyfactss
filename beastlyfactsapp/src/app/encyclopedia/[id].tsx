import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import {
  getAppRouteFromContentLink,
  getDifficultyTone,
  getEncyclopediaAnimalById,
  getGuideImageSourceForAnimal,
} from '@/content-client/encyclopedia-catalog';
import { getGuideImageResizeMode } from '@/content-client/guide-image-map';
import { getSpeciesById } from '@/content-client/species-catalog';

export default function EncyclopediaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const animal = id ? getEncyclopediaAnimalById(id) : undefined;

  if (!animal) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedText type="small" style={styles.emptyText}>
            That encyclopedia entry could not be found.
          </ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  const imageSource = getGuideImageSourceForAnimal(animal);
  const linkedGuide = animal.guideId ? getSpeciesById(animal.guideId) : undefined;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerRow}>
            <Pressable onPress={() => router.back()} hitSlop={8}>
              <ThemedText type="linkPrimary">← Back</ThemedText>
            </Pressable>
            {linkedGuide ? (
              <Pressable onPress={() => router.replace({ pathname: '/entry/[id]', params: { id: linkedGuide.id } })} hitSlop={8}>
                <ThemedText type="linkPrimary">Open guide</ThemedText>
              </Pressable>
            ) : (
              <View style={styles.headerSpacer} />
            )}
          </View>

          {imageSource ? (
            <Image source={imageSource} style={styles.heroImage} resizeMode={getGuideImageResizeMode(animal.guideId ?? animal.id)} />
          ) : (
            <ThemedView type="accentSoft" style={styles.heroFallback}>
              <ThemedText style={styles.heroEmoji}>{animal.emoji}</ThemedText>
            </ThemedView>
          )}

          <View style={styles.titleBlock}>
            <ThemedText type="title" style={styles.title}>
              {animal.name}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {animal.scientific}
            </ThemedText>
          </View>

          <View style={styles.metaRow}>
            <ThemedView type="backgroundElement" style={styles.metaChip}>
              <ThemedText type="small">{animal.category}</ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.metaChip}>
              <ThemedText type="small" themeColor={getDifficultyTone(animal.difficulty)}>
                {animal.difficulty}
              </ThemedText>
            </ThemedView>
          </View>

          <Card style={styles.sectionCard}>
            <ThemedText type="smallBold">Overview</ThemedText>
            <ThemedText type="small" style={styles.bodyText}>
              {animal.bio.overview}
            </ThemedText>
          </Card>

          <View style={styles.statsGrid}>
            <Card variant="filled" style={styles.statCard}>
              <ThemedText type="smallBold">Origin</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {animal.bio.origin}
              </ThemedText>
            </Card>
            <Card variant="filled" style={styles.statCard}>
              <ThemedText type="smallBold">Habitat</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {animal.bio.habitat}
              </ThemedText>
            </Card>
            <Card variant="filled" style={styles.statCard}>
              <ThemedText type="smallBold">Adult size</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {animal.bio.adultSize}
              </ThemedText>
            </Card>
            <Card variant="filled" style={styles.statCard}>
              <ThemedText type="smallBold">Wild lifespan</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {animal.bio.wildLifespan}
              </ThemedText>
            </Card>
          </View>

          <Card style={styles.sectionCard}>
            <ThemedText type="smallBold">Wild diet</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {animal.bio.wildDiet}
            </ThemedText>
          </Card>

          <Card style={styles.sectionCard}>
            <ThemedText type="smallBold">Conservation</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {animal.bio.conservation}
            </ThemedText>
          </Card>

          {linkedGuide && (
            <Card variant="soft" style={styles.sectionCard}>
              <ThemedText type="smallBold">Linked care guide</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                This encyclopedia profile is paired with the in-app care guide for {linkedGuide.name}.
              </ThemedText>
              <Pressable onPress={() => router.replace({ pathname: '/entry/[id]', params: { id: linkedGuide.id } })}>
                <ThemedText type="linkPrimary">Open full care guide →</ThemedText>
              </Pressable>
            </Card>
          )}

          {animal.relatedStory && (
            <Card variant="soft" style={styles.sectionCard}>
              <ThemedText type="smallBold">Related story</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {animal.relatedStory.title}
              </ThemedText>
              <Pressable onPress={() => {
                const route = getAppRouteFromContentLink(`/blog/${animal.relatedStory!.slug}/`);
                if (route) {
                  router.replace(route);
                }
              }}>
                <ThemedText type="linkPrimary">Open story →</ThemedText>
              </Pressable>
            </Card>
          )}
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
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSpacer: {
    width: 64,
  },
  emptyText: {
    marginTop: Spacing.three,
  },
  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: Radius.lg,
  },
  heroFallback: {
    height: 220,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroEmoji: {
    fontSize: 72,
    lineHeight: 84,
  },
  titleBlock: {
    gap: Spacing.one,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  metaChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  sectionCard: {
    gap: Spacing.one,
  },
  bodyText: {
    lineHeight: 22,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  statCard: {
    width: '48%',
    gap: Spacing.one,
  },
});
