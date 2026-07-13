import { Tabs } from 'expo-router';

/**
 * Tab navigator for the "(tabs)" group. The built-in tab bar is hidden
 * because PersistentFooterNav (rendered in app/_layout.tsx) handles all
 * bottom-nav UI via router.navigate(). Using the standard file-based Tabs
 * here avoids the expo-router/ui TabTrigger/Pressable crash on web.
 */
export default function TabsLayout() {
  return (
    <Tabs tabBar={() => null} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="guides" />
      <Tabs.Screen name="facts" />
      <Tabs.Screen name="explore" options={{ href: null }} />
      <Tabs.Screen name="encyclopedia" options={{ href: null }} />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
