import { Image, StyleSheet, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { sanityImageUrl } from '@/content-client/sanityClient';
import type { PortableTextBlock } from '@/content-client/types';

import { ThemedText } from './themed-text';

/**
 * Basic block-to-paragraph renderer for a Sanity portable-text `body`
 * array. Handles normal paragraphs, headings, list items, blockquotes,
 * and embedded image blocks. Inline marks (bold/italic/links) are not
 * differentiated — all spans are concatenated as plain text.
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
        const key = block._key ?? `block-${index}`;

        // Embedded image block from Sanity body
        if (block._type === 'image') {
          const url = sanityImageUrl(block as unknown as { asset?: { _ref?: string } }, 800);
          if (!url) return null;
          return (
            <Image
              key={key}
              source={{ uri: url }}
              style={styles.bodyImage}
              resizeMode="contain"
            />
          );
        }

        if (block._type !== 'block' || !block.children) return null;

        const text = block.children.map((span) => span.text).join('');
        if (!text.trim()) return null;

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
  bodyImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
});
