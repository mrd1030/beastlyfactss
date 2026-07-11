import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';

/** Every destination in the app, including the ones that don't fit on the
 * five-slot tab bar (Encyclopedia view, Blog, My Pack). */
const MENU_ITEMS = [
  { emoji: '🏠', label: 'Home', route: { pathname: '/' as const } },
  { emoji: '🧠', label: 'Fun Facts', route: { pathname: '/facts' as const } },
  { emoji: '📋', label: 'Care Guides', route: { pathname: '/guides' as const } },
  { emoji: '📚', label: 'Encyclopedia', route: { pathname: '/guides' as const, params: { view: 'encyclopedia' } } },
  { emoji: '📰', label: 'Blog', route: { pathname: '/blog' as const } },
  { emoji: '⭐', label: 'My Pack', route: { pathname: '/explore' as const } },
  { emoji: '🐾', label: 'Pets', route: { pathname: '/profile' as const } },
  { emoji: '⚙️', label: 'Settings', route: { pathname: '/settings' as const } },
];

/**
 * Hamburger menu listing every screen in the app. Rendered as a trigger
 * button (in Home's header) that opens a top-anchored dropdown sheet.
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
              key={item.label}
              onPress={() => navigate(item.route)}
              style={({ pressed }) => [styles.item, pressed && { backgroundColor: theme.backgroundElement }]}>
              <ThemedText style={styles.itemEmoji}>{item.emoji}</ThemedText>
              <ThemedText type="smallBold">{item.label}</ThemedText>
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
