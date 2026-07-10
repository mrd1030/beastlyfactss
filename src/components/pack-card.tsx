import { Image, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect, useRef } from 'react';

import { Spacing } from '@/constants/theme';
import type { ProvisionalEntry } from '@/content-client/types';
import { sanityImageUrl } from '@/content-client/sanityClient';
import type { UnlockMethod } from '@/db/types';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const UNLOCK_METHOD_ICON: Record<UnlockMethod, string> = {
  read: '📖',
  quiz: '📝',
  pet: '🐾',
};

const FLIP_DURATION = 380;

export const PACK_CARD_SIZE = 108;

/**
 * One collectible-species card in the Pack grid. Shows a full card
 * (thumbnail + title) when unlocked, or a grayscale/locked silhouette
 * when not. Locked cards deep-link to the entry's detail screen (to read
 * or quiz it); unlocked cards open the same detail screen to view content.
 *
 * When `discovered` transitions from false -> true while this card is
 * mounted (i.e. the user unlocked it, then returned to this screen), a
 * short bounded flip/reveal plays exactly once — tap-triggered indirectly,
 * driven by the discrete unlock actions (finishing a quiz, reading to the
 * end) rather than any continuous/drag gesture on the card itself.
 */
export function PackCard({
  entry,
  discovered,
  unlockMethod,
  onPress,
}: {
  entry: ProvisionalEntry;
  discovered: boolean;
  unlockMethod?: UnlockMethod | null;
  onPress: () => void;
}) {
  const flip = useSharedValue(discovered ? 1 : 0);
  const wasDiscoveredRef = useRef(discovered);

  useEffect(() => {
    if (!wasDiscoveredRef.current && discovered) {
      // Locked -> unlocked transition: play the reveal once.
      flip.value = withTiming(1, { duration: FLIP_DURATION, easing: Easing.out(Easing.cubic) });
    } else {
      // Either already discovered on mount, or (shouldn't normally
      // happen) went back to locked — snap without animating.
      flip.value = discovered ? 1 : 0;
    }
    wasDiscoveredRef.current = discovered;
  }, [discovered, flip]);

  const frontStyle = useAnimatedStyle(() => ({
    opacity: interpolate(flip.value, [0, 0.5, 0.5001, 1], [1, 1, 0, 0], Extrapolation.CLAMP),
    transform: [
      { perspective: 800 },
      { rotateY: `${interpolate(flip.value, [0, 1], [0, 180], Extrapolation.CLAMP)}deg` },
    ],
  }));

  const backStyle = useAnimatedStyle(() => ({
    opacity: interpolate(flip.value, [0, 0.4999, 0.5, 1], [0, 0, 1, 1], Extrapolation.CLAMP),
    transform: [
      { perspective: 800 },
      { rotateY: `${interpolate(flip.value, [0, 1], [180, 360], Extrapolation.CLAMP)}deg` },
    ],
  }));

  const thumb = sanityImageUrl(entry.mainImage, 200);
  const showEmoji = !thumb && !!entry.emoji;

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View style={styles.stack}>
        <Animated.View
          style={[styles.face, frontStyle]}
          pointerEvents={discovered ? 'none' : 'auto'}
          importantForAccessibility={discovered ? 'no-hide-descendants' : 'auto'}
          accessibilityElementsHidden={discovered}>
          <ThemedView type="backgroundElement" style={styles.lockedCard}>
            <ThemedText type="subtitle" style={styles.lockIcon}>
              🔒
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary" numberOfLines={2} style={styles.lockedTitle}>
              ???
            </ThemedText>
          </ThemedView>
        </Animated.View>

        <Animated.View
          style={[styles.face, backStyle]}
          pointerEvents={discovered ? 'auto' : 'none'}
          importantForAccessibility={discovered ? 'auto' : 'no-hide-descendants'}
          accessibilityElementsHidden={!discovered}>
          <ThemedView type="backgroundSelected" style={styles.unlockedCard}>
            {thumb ? (
              <Image source={{ uri: thumb }} style={styles.thumb} />
            ) : (
              <ThemedView type="backgroundElement" style={[styles.thumb, styles.emojiThumb]}>
                {showEmoji && <ThemedText style={styles.emojiText}>{entry.emoji}</ThemedText>}
              </ThemedView>
            )}
            <ThemedText type="small" numberOfLines={2} style={styles.unlockedTitle}>
              {entry.title}
            </ThemedText>
            {unlockMethod && (
              <ThemedText type="small" style={styles.unlockIcon}>
                {UNLOCK_METHOD_ICON[unlockMethod]}
              </ThemedText>
            )}
          </ThemedView>
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: PACK_CARD_SIZE,
  },
  stack: {
    width: PACK_CARD_SIZE,
    height: PACK_CARD_SIZE + 24,
  },
  face: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  },
  lockedCard: {
    flex: 1,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
    opacity: 0.6,
  },
  lockIcon: {
    fontSize: 28,
    lineHeight: 32,
  },
  lockedTitle: {
    textAlign: 'center',
  },
  unlockedCard: {
    flex: 1,
    borderRadius: Spacing.two,
    padding: Spacing.one,
    gap: 4,
  },
  thumb: {
    width: '100%',
    height: PACK_CARD_SIZE - Spacing.two * 2,
    borderRadius: Spacing.one,
  },
  emojiThumb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiText: {
    fontSize: 36,
    lineHeight: 42,
  },
  unlockedTitle: {
    paddingHorizontal: 2,
  },
  unlockIcon: {
    position: 'absolute',
    top: 2,
    right: 2,
  },
});
