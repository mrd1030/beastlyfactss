import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { TwoToneTitle } from './two-tone-title';

/** Every destination in the app, including the ones that don't fit on the
 * five-slot tab bar (Encyclopedia view, Blog, My Pack). `first`/`second`
 * split each label the same way the page titles are two-toned (see
 * two-tone-title.tsx), so the menu reads as one consistent brand treatment. */
const MENU_ITEMS = [
  { emoji: '🏠', first: 'Hom', second: 'e', route: { pathname: '/' as const } },
  { emoji: '🧠', first: 'Fun ', second: 'Facts', route: { pathname: '/facts' as const } },
  { emoji: '📋', first: 'Care ', second: 'Guides', route: { pathname: '/guides' as const } },
  { emoji: '📚', first: 'Encyclo', second: 'pedia', route: { pathname: '/guides' as const, params: { view: 'encyclopedia' } } },
  { emoji: '📰', first: 'Blo', second: 'g', route: { pathname: '/blog' as const } },
  { emoji: '⭐', first: 'My ', second: 'Pack', route: { pathname: '/explore' as const } },
  { emoji: '🐾', first: 'Pet', second: 's', route: { pathname: '/profile' as const } },
  { emoji: '⚙️', first: 'Sett', second: 'ings', route: { pathname: '/settings' as const } },
];

/**
 * Hamburger menu listing every screen in the app. Rendered as a trigger
 * button - every main screen places one in its own header row (see Home,
 * Facts, Library, Pets, Settings) so it's reachable from anywhere, not
 * just Home - that opens a top-anchored dropdown sheet.
 */
export function AppMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const theme = useTheme();

  const navigate = (route: (typeof MENU_ITEMS)[number]['route']) => {
    setOpen(false);
    router.navigate(route);
  };

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Open menu">
        <View style={[styles.trigger, { backgroundColor: theme.backgroundElement }]}>
          <Ionicons name="menu" size={22} color={theme.text} />
        </View>
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View />
        </Pressable>
        <View style={[styles.sheet, { backgroundColor: theme.background, borderColor: theme.hairline }]}>
          {MENU_ITEMS.map((item) => (
            <Pressable
              key={item.first + item.second}
              onPress={() => navigate(item.route)}
              style={({ pressed }) => [styles.item, pressed && { backgroundColor: theme.backgroundElement }]}>
              <ThemedText style={styles.itemEmoji}>{item.emoji}</ThemedText>
              <TwoToneTitle type="smallBold" first={item.first} second={item.second} />
            </Pressable>
          ))}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  sheet: {
    position: 'absolute',
    top: Spacing.six,
    right: Spacing.three,
    minWidth: 220,
    borderRadius: Radius.lg,
    borderWidth: 1,
    paddingVertical: Spacing.one,
    overflow: 'hidden',
    // RN shadow props are iOS-only; elevation covers Android, and the
    // border + backdrop carry the depth cue on web.
    elevation: 6,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  itemEmoji: {
    fontSize: 18,
    lineHeight: 24,
  },
});
