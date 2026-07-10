import { Image, Pressable, StyleSheet } from 'react-native';

import { Spacing } from '@/constants/theme';
import type { Pet } from '@/db/types';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export const PET_CARD_SIZE = 88;

/**
 * One real owned-pet card at the top of the Pack tab. Simpler than
 * PackCard (no locked/unlocked flip — the pet obviously already exists);
 * tapping opens that pet's detail screen. `speciesTitle` is looked up by
 * the Pack screen from the same catalog it already fetches, so this
 * component doesn't need its own Sanity fetch.
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
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ThemedView type="backgroundElement" style={styles.card}>
        {pet.photoUri ? (
          <Image source={{ uri: pet.photoUri }} style={styles.photo} />
        ) : (
          <ThemedView type="backgroundSelected" style={styles.photoPlaceholder}>
            <ThemedText type="default">🐾</ThemedText>
          </ThemedView>
        )}
        <ThemedText type="smallBold" numberOfLines={1}>
          {pet.nickname}
        </ThemedText>
        {speciesTitle ? (
          <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
            {speciesTitle}
          </ThemedText>
        ) : (
          <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
            No species linked
          </ThemedText>
        )}
      </ThemedView>
    </Pressable>
  );
}

export function AddPetCard({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ThemedView type="backgroundSelected" style={[styles.card, styles.addCard]}>
        <ThemedText type="subtitle" style={styles.addIcon}>
          +
        </ThemedText>
        <ThemedText type="small">Add pet</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: PET_CARD_SIZE + Spacing.three * 2,
  },
  card: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
    alignItems: 'center',
    gap: 2,
  },
  addCard: {
    justifyContent: 'center',
    minHeight: PET_CARD_SIZE + 34,
  },
  addIcon: {
    lineHeight: 32,
  },
  photo: {
    width: PET_CARD_SIZE,
    height: PET_CARD_SIZE,
    borderRadius: PET_CARD_SIZE / 2,
    marginBottom: 2,
  },
  photoPlaceholder: {
    width: PET_CARD_SIZE,
    height: PET_CARD_SIZE,
    borderRadius: PET_CARD_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
});
