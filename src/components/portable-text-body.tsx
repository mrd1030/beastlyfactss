import { StyleSheet, View } from 'react-native';

import type { PortableTextBlock } from '@/content-client/types';
import { Spacing } from '@/constants/theme';

import { ThemedText } from './themed-text';

/**
 * Basic block-to-paragraph renderer for a Sanity portable-text `body`
 * array. Intentionally simple — normal paragraphs, headings, and list
 * items rendered as plain themed text blocks. Does not handle inline
 * marks (bold/italic/links) or embedded image/custom blocks; those are
 * skipped rather than crashing. This does not need to replicate the
 * website's full PortableTextRenderer, just be a reasonable offline-
 * friendly stand-in.
 */
export function PortableTextBody({ blocks }: { blocks?: PortableTextBlock[] | null }) {
  if (!blocks || blocks.length === 0) {
    return (
      <ThemedText type="small" themeColor="textSecondary">
        No body content for this entry.
      </ThemedText>
    );
  }

  return (
    <View style={styles.container}>
      {blocks.map((block, index) => {
        if (block._type !== 'block' || !block.children) return null;

        const text = block.children.map((span) => span.text).join('');
        if (!text.trim()) return null;

        const key = block._key ?? `block-${index}`;

        if (block.listItem) {
          return (
            <View key={key} style={styles.listRow}>
              <ThemedText type="default">{'•'}</ThemedText>
              <ThemedText type="default" style={styles.listText}>
                {text}
              </ThemedText>
            </View>
          );
        }

        switch (block.style) {
          case 'h1':
          case 'h2':
            return (
              <ThemedText key={key} type="subtitle">
                {text}
              </ThemedText>
            );
          case 'h3':
            return (
              <ThemedText key={key} type="smallBold">
                {text}
              </ThemedText>
            );
          case 'blockquote':
            return (
              <ThemedText key={key} type="small" themeColor="textSecondary" style={styles.blockquote}>
                {text}
              </ThemedText>
            );
          default:
            return (
              <ThemedText key={key} type="default">
                {text}
              </ThemedText>
            );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },
  listRow: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  listText: {
    flex: 1,
  },
  blockquote: {
    fontStyle: 'italic',
    paddingLeft: Spacing.two,
  },
});
