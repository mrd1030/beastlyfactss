import type { TextStyle } from 'react-native';

import { Brand } from '@/constants/theme';

import { ThemedText, type ThemedTextProps } from './themed-text';

/**
 * Two-color heading matching the site wordmark treatment (e.g. "Beastly" in
 * the normal text color + orange "Facts"). Split the string wherever you
 * want the color change - it doesn't need to land on a word boundary (see
 * "Encyclo" + "pedia" on the Encyclopedia screen).
 */
export function TwoToneTitle({
  first,
  second,
  type = 'title',
  style,
}: {
  first: string;
  second: string;
  type?: ThemedTextProps['type'];
  style?: TextStyle;
}) {
  return (
    <ThemedText type={type} style={style}>
      {first}
      <ThemedText type={type} style={{ color: Brand.orange }}>
        {second}
      </ThemedText>
    </ThemedText>
  );
}
