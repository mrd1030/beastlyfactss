import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundSelected}
      iconColor={{ default: colors.textSecondary, selected: colors.accent }}
      labelStyle={{
        default: { color: colors.textSecondary },
        selected: { color: colors.accent, fontWeight: '600' },
      }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Browse</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'safari', selected: 'safari.fill' }}
          src={{
            default: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="compass-outline" />,
            selected: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="compass" />,
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="facts">
        <NativeTabs.Trigger.Label>Facts</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'book', selected: 'book.fill' }}
          src={{
            default: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="book-outline" />,
            selected: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="book" />,
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Pack</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'pawprint', selected: 'pawprint.fill' }}
          src={{
            default: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="paw-outline" />,
            selected: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="paw" />,
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
          src={{
            default: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="person-outline" />,
            selected: <NativeTabs.Trigger.VectorIcon family={Ionicons} name="person" />,
          }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
