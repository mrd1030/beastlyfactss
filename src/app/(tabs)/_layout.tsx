import AppTabs from '@/components/app-tabs';

/**
 * The tab bar itself (Browse + Pack). Split out from the root layout so
 * the root can wrap this group in a Stack alongside non-tab screens like
 * entry/[id] — a Tabs/NativeTabs Navigator only knows about routes
 * explicitly registered as Triggers, so a detail screen pushed from
 * Browse needs to live as a sibling Stack screen, not inside this group.
 */
export default function TabsLayout() {
  return <AppTabs />;
}
