import { Image, Pressable, StyleSheet, View } from 'react-native';

import { Colors, Radius, Spacing } from '@/constants/theme';
import { useThemePreference } from '@/contexts/theme-preference';
import type { Pet } from '@/db/types';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export const PET_CARD_SIZE = 88;
const CARD_W = 120;
const CARD_H = 164;
const PHOTO_H = 110;

/**
 * Portrait photo card for each owned pet. Photo fills the top portion;
 * name/species sit in a semi-transparent scrim at the bottom.
 */
export function PetCard({
  pet,
  speciesTitle,
  onPress,
}: {
  pet: Pet;
  speciesTitle?: string;
  onPress: () => void;
}) {
  const { colorScheme } = useThemePreference();
  const colors = Colors[colorScheme];

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ThemedView type="backgroundElement" style={styles.card}>
        {/* Photo / placeholder */}
        {pet.photoUri ? (
          <Image source={{ uri: pet.photoUri }} style={styles.photo} />
        ) : (
          <View style={[styles.photo, styles.photoPlaceholder, { backgroundColor: colors.backgroundSelected }]}>
            <ThemedText style={styles.placeholderEmoji}>🐾</ThemedText>
          </View>
        )}

        {/* Name + species scrim overlay */}
        <View style={[styles.scrim, { backgroundColor: colorScheme === 'dark' ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.42)' }]}>
          <ThemedText type="smallBold" numberOfLines={1} style={styles.scrimName}>
            {pet.nickname}
          </ThemedText>
          {speciesTitle ? (
            <ThemedText type="small" numberOfLines={1} style={styles.scrimSpecies}>
              {speciesTitle}
            </ThemedText>
          ) : null}
        </View>
      </ThemedView>
    </Pressable>
  );
}

export function AddPetCard({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ThemedView type="backgroundSelected" style={[styles.card, styles.addCard]}>
        <ThemedText type="subtitle" style={styles.addIcon}>+</ThemedText>
        <ThemedText type="small">Add pet</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: Spacing.two,
  },
  card: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  photo: {
    width: CARD_W,
    height: PHOTO_H,
  },
  photoPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderEmoji: {
    fontSize: 36,
    lineHeight: 44,
  },
  scrim: {
    flex: 1,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    justifyContent: 'center',
    gap: 2,
  },
  scrimName: {
    color: '#fff',
  },
  scrimSpecies: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 10,
    lineHeight: 13,
  },
  addCard: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
  },
  addIcon: {
    lineHeight: 32,
  },
});