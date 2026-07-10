import Ionicons from '@expo/vector-icons/Ionicons';
import {
    TabList,
    TabListProps,
    Tabs,
    TabSlot,
    TabTrigger,
    TabTriggerSlotProps,
} from 'expo-router/ui';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { useThemePreference } from '@/contexts/theme-preference';

type IconName = keyof typeof Ionicons.glyphMap;

const TABS: {
  name: string;
  href: '/' | '/facts' | '/explore' | '/profile';
  label: string;
  icon: IconName;
  activeIcon: IconName;
}[] = [
  { name: 'home', href: '/', label: 'Browse', icon: 'compass-outline', activeIcon: 'compass' },
  { name: 'facts', href: '/facts', label: 'Facts', icon: 'book-outline', activeIcon: 'book' },
  { name: 'explore', href: '/explore', label: 'Pack', icon: 'paw-outline', activeIcon: 'paw' },
  { name: 'profile', href: '/profile', label: 'Profile', icon: 'person-outline', activeIcon: 'person' },
];

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          {TABS.map((tab) => (
            <TabTrigger key={tab.name} name={tab.name} href={tab.href} asChild>
              <TabButton icon={tab.icon} activeIcon={tab.activeIcon} label={tab.label} />
            </TabTrigger>
          ))}
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

type TabButtonProps = TabTriggerSlotProps & {
  icon: IconName;
  activeIcon: IconName;
  label: string;
};

export function TabButton({ icon, activeIcon, label, isFocused, ...props }: TabButtonProps) {
  const { colorScheme } = useThemePreference();
  const colors = Colors[colorScheme];

  return (
    <Pressable {...props} style={({ pressed }) => [styles.tabButton, pressed && styles.pressed]}>
      <View style={[styles.iconWrap, isFocused && { backgroundColor: colors.backgroundSelected }]}>
        <Ionicons
          name={isFocused ? activeIcon : icon}
          size={20}
          color={isFocused ? colors.accent : colors.textSecondary}
        />
      </View>
      <ThemedText
        type={isFocused ? 'smallBold' : 'small'}
        themeColor={isFocused ? 'accent' : 'textSecondary'}
        style={styles.tabLabel}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const { colorScheme } = useThemePreference();
  const colors = Colors[colorScheme];

  return (
    <View
      {...props}
      style={[
        styles.tabListContainer,
        { backgroundColor: colors.background, borderTopColor: colors.backgroundElement },
      ]}
    />
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
    paddingHorizontal: Spacing.two,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.half,
  },
  pressed: {
    opacity: 0.7,
  },
  iconWrap: {
    width: 44,
    height: 28,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
});
