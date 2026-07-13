import Ionicons from '@expo/vector-icons/Ionicons';
import { usePathname, useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { useThemePreference } from '@/contexts/theme-preference';

type IconName = keyof typeof Ionicons.glyphMap;

// Home leads: the brand is facts-first, so the front door is the daily fact,
// not the care dashboard. Saved (/explore) left the bar - it's reachable from
// Home's tiles and the Pets screen - to keep the bar at five roomy targets.
const TABS: {
  name: string;
  href: '/' | '/profile' | '/guides' | '/facts' | '/settings';
  label: string;
  icon: IconName;
  activeIcon: IconName;
}[] = [
  { name: 'index', href: '/', label: 'Home', icon: 'home-outline', activeIcon: 'home' },
  { name: 'facts', href: '/facts', label: 'Facts', icon: 'sparkles-outline', activeIcon: 'sparkles' },
  { name: 'guides', href: '/guides', label: 'Library', icon: 'book-outline', activeIcon: 'book' },
  { name: 'profile', href: '/profile', label: 'Pets', icon: 'paw-outline', activeIcon: 'paw' },
  { name: 'settings', href: '/settings', label: 'Settings', icon: 'settings-outline', activeIcon: 'settings' },
];

export function PersistentFooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <FooterContainer>
      {TABS.map((tab) => (
        <FooterButton
          key={tab.name}
          icon={tab.icon}
          activeIcon={tab.activeIcon}
          label={tab.label}
          isFocused={isTabFocused(pathname, tab.href)}
          onPress={() => router.navigate(tab.href)}
        />
      ))}
    </FooterContainer>
  );
}

function FooterButton({
  icon,
  activeIcon,
  label,
  isFocused,
  onPress,
}: {
  icon: IconName;
  activeIcon: IconName;
  label: string;
  isFocused: boolean;
  onPress: () => void;
}) {
  const { colorScheme } = useThemePreference();
  const colors = Colors[colorScheme];

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.tabButton, pressed && styles.pressed]}>
      <View style={[styles.iconWrap, isFocused && { backgroundColor: colors.backgroundSelected }]}>
        <Ionicons
          name={isFocused ? activeIcon : icon}
          size={18}
          color={isFocused ? colors.accent : colors.textSecondary}
        />
      </View>
      <ThemedText
        numberOfLines={1}
        type={isFocused ? 'smallBold' : 'small'}
        themeColor={isFocused ? 'accent' : 'textSecondary'}
        style={styles.tabLabel}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

function isTabFocused(pathname: string, href: (typeof TABS)[number]['href']): boolean {
  if (href === '/') {
    return pathname === '/' || pathname === '/index';
  }
  if (href === '/profile') {
    return pathname === '/profile' || pathname.startsWith('/pet');
  }
  if (href === '/guides') {
    return pathname === '/guides' || pathname.startsWith('/entry') || pathname.startsWith('/encyclopedia');
  }
  if (href === '/facts') {
    return pathname === '/facts';
  }
  if (href === '/settings') {
    return pathname === '/settings';
  }
  return false;
}

function FooterContainer({ children }: { children: ReactNode }) {
  const { colorScheme } = useThemePreference();
  const colors = Colors[colorScheme];

  return (
    <View
      style={[
        styles.tabListContainer,
        { backgroundColor: colors.background, borderTopColor: colors.backgroundElement },
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.three,
    paddingHorizontal: Spacing.one,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.half,
    minHeight: 52,
  },
  pressed: {
    opacity: 0.7,
  },
  iconWrap: {
    width: 40,
    height: 28,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    lineHeight: 12,
  },
});