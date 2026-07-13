import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Blocking confirm step for actions that write a log entry and/or advance a
 * care task's due date - without this, a stray double-tap on a one-tap quick
 * action silently created duplicate log entries and rolled due dates forward
 * with no way to tell it had happened. A themed Modal instead of the native
 * Alert.alert so it matches the rest of the app's own confirm surfaces
 * (compare the inline "Delete pet…" pattern) rather than looking like a
 * system dialog.
 */
export function ConfirmDialog({
  visible,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const theme = useTheme();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <Pressable style={styles.backdrop} onPress={onCancel}>
        <Pressable onPress={(e) => e.stopPropagation()} style={styles.cardWrapper}>
          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="smallBold">{title}</ThemedText>
            {message ? (
              <ThemedText type="small" themeColor="textSecondary">
                {message}
              </ThemedText>
            ) : null}
            <View style={styles.actions}>
              <Pressable onPress={onCancel} hitSlop={8}>
                <ThemedView type="backgroundSelected" style={styles.button}>
                  <ThemedText type="smallBold">{cancelLabel}</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable onPress={onConfirm} hitSlop={8}>
                <ThemedView type="background" style={[styles.button, { backgroundColor: theme.accent }]}>
                  <ThemedText type="smallBold" style={{ color: theme.onAccent }}>
                    {confirmLabel}
                  </ThemedText>
                </ThemedView>
              </Pressable>
            </View>
          </ThemedView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.four,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 360,
  },
  card: {
    borderRadius: Radius.lg,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  button: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
  },
});
