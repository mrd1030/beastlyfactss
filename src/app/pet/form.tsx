import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SpeciesPicker } from '@/components/species-picker';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { fetchCollectionEntries } from '@/content-client/queries';
import { getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import type { ProvisionalEntry } from '@/content-client/types';
import { isDatabaseAvailable } from '@/db/client';
import { createPet, getPet, unlockByPet, updatePet } from '@/db/helpers';
import type { Pet } from '@/db/types';
import { useTheme } from '@/hooks/use-theme';
import { generateCareTasksForPet, regenerateCareTasksForPet } from '@/lib/care-task-engine';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';
import { localDateString } from '@/lib/date';
import { pickPetPhoto } from '@/lib/pick-pet-photo';

const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Add/Edit Pet route. Just fetches the two things the form needs
 * (the existing pet, in edit mode, and the species list) and defers all
 * form-state ownership to `PetFormBody` below, which mounts only once
 * that data is ready and takes it as ordinary props — this deliberately
 * avoids priming form state from an effect (see the `key` on PetFormBody):
 * initial values are derived once, at mount, directly from props instead.
 */
export default function PetFormScreen() {
  const { petId } = useLocalSearchParams<{ petId?: string }>();
  const isEditing = !!petId;

  const { data: existingPet, isFetching: loadingPet } = useQuery({
    queryKey: ['pet', petId],
    queryFn: () => getPet(petId as string),
    enabled: isEditing && isDatabaseAvailable,
  });

  // Secondary/supplementary: Sanity blog posts not already covered by the
  // bundled catalog (see PackScreen's identical dedup, keeping the two
  // species-picking surfaces consistent). The catalog itself is local and
  // synchronous, so it's always ready — only the Sanity half can still be
  // loading/erroring.
  const { data: blogEntries } = useQuery({
    queryKey: ['species', 'collectionEntries'],
    queryFn: fetchCollectionEntries,
  });

  const entries = useMemo(() => {
    const catalogEntries = getAllSpeciesAsEntries();
    const catalogIds = new Set(catalogEntries.map((e) => e._id));
    const extraBlogEntries = (blogEntries ?? []).filter((entry) => !catalogIds.has(entry.slug ?? entry._id));
    return [...catalogEntries, ...extraBlogEntries];
  }, [blogEntries]);

  const notReady = isEditing && (loadingPet || !existingPet);
  if (notReady) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedText type="small">Loading…</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <PetFormBody
      key={petId ?? 'new'}
      isEditing={isEditing}
      existingPet={existingPet ?? null}
      entries={entries}
    />
  );
}

/**
 * Owns all form field state and the save/create logic. Creating a pet (1)
 * generates its care-task reminder set from the provisional category
 * defaults (care-schedule-defaults.ts) and (2) — the single most
 * important wire in this stage — calls `unlockByPet` if a species is
 * linked, so owning a pet unlocks that species in the Pack collection
 * grid too. Editing an existing pet only regenerates care tasks / re-fires
 * the unlock if the linked species actually changed, so a plain
 * nickname/photo edit doesn't wipe task completion history for no reason.
 */
function PetFormBody({
  isEditing,
  existingPet,
  entries,
}: {
  isEditing: boolean;
  existingPet: Pet | null;
  entries: ProvisionalEntry[];
}) {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();

  const [nickname, setNickname] = useState(existingPet?.nickname ?? '');
  const [photoUri, setPhotoUri] = useState<string | null>(existingPet?.photoUri ?? null);
  const [linkedEntry, setLinkedEntry] = useState<ProvisionalEntry | null>(() =>
    existingPet?.linkedEntryId ? (entries.find((e) => e._id === existingPet.linkedEntryId) ?? null) : null
  );
  const [acquiredDate, setAcquiredDate] = useState(existingPet?.acquiredDate ?? '');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handlePickPhoto = async () => {
    const uri = await pickPetPhoto();
    if (uri) setPhotoUri(uri);
  };

  const handleUseToday = () => setAcquiredDate(localDateString());

  const handleSave = async () => {
    const trimmedNickname = nickname.trim();
    if (!trimmedNickname) {
      setError('Give your pet a nickname.');
      return;
    }
    if (acquiredDate && !DATE_FORMAT.test(acquiredDate)) {
      setError('Date acquired should look like YYYY-MM-DD, or be left blank.');
      return;
    }
    if (!isDatabaseAvailable) {
      setError('Local storage is unavailable in this environment, so pets can’t be saved here.');
      return;
    }

    setError(null);
    setSaving(true);
    try {
      const patch = {
        nickname: trimmedNickname,
        photoUri,
        linkedEntryId: linkedEntry?._id ?? null,
        acquiredDate: acquiredDate || null,
      };

      let savedPetId: string;

      if (isEditing && existingPet) {
        await updatePet(existingPet.id, patch);
        savedPetId = existingPet.id;

        const speciesChanged = (existingPet.linkedEntryId ?? null) !== (linkedEntry?._id ?? null);
        if (speciesChanged) {
          const updatedPet: Pet = { ...existingPet, ...patch };
          await regenerateCareTasksForPet(updatedPet, linkedEntry?.categoryTitle ?? null, linkedEntry?.careInfo ?? null);
          if (linkedEntry) {
            await unlockByPet(linkedEntry._id);
          }
        }
      } else {
        const created = await createPet(patch);
        savedPetId = created.id;
        await generateCareTasksForPet(created, linkedEntry?.categoryTitle ?? null, linkedEntry?.careInfo ?? null);
        if (linkedEntry) {
          await unlockByPet(linkedEntry._id);
        }
      }

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['pets'] }),
        queryClient.invalidateQueries({ queryKey: ['pet', savedPetId] }),
        queryClient.invalidateQueries({ queryKey: ['careTasks', savedPetId] }),
        queryClient.invalidateQueries({ queryKey: ['discoveredSpecies'] }),
      ]);
      await refreshAllPetsCareNotifications().catch(() => {});

      router.replace({ pathname: '/pet/[id]', params: { id: savedPetId } });
    } catch (err) {
      console.warn('[pet-form] Could not save pet', err);
      setError('Something went wrong saving this pet. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Cancel</ThemedText>
          </Pressable>
          <ThemedText type="smallBold">{isEditing ? 'Edit pet' : 'Add pet'}</ThemedText>
          <ThemedView style={{ width: 60 }} />
        </ThemedView>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Pressable onPress={handlePickPhoto} style={styles.photoPicker}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.photo} />
            ) : (
              <ThemedView type="backgroundElement" style={styles.photoPlaceholder}>
                <ThemedText type="subtitle">🐾</ThemedText>
              </ThemedView>
            )}
            <ThemedText type="linkPrimary" style={styles.photoLabel}>
              {photoUri ? 'Change photo' : 'Add a photo'}
            </ThemedText>
          </Pressable>

          <ThemedText type="smallBold" style={styles.fieldLabel}>
            Nickname
          </ThemedText>
          <ThemedView type="backgroundElement" style={styles.inputBox}>
            <TextInput
              value={nickname}
              onChangeText={setNickname}
              placeholder="e.g. Rex"
              placeholderTextColor={theme.textSecondary}
              style={[styles.input, { color: theme.text }]}
            />
          </ThemedView>

          <ThemedText type="smallBold" style={styles.fieldLabel}>
            Date acquired
          </ThemedText>
          <ThemedView style={styles.dateRow}>
            <ThemedView type="backgroundElement" style={[styles.inputBox, styles.dateInputBox]}>
              <TextInput
                value={acquiredDate}
                onChangeText={setAcquiredDate}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={theme.textSecondary}
                style={[styles.input, { color: theme.text }]}
              />
            </ThemedView>
            <Pressable onPress={handleUseToday}>
              <ThemedView type="backgroundSelected" style={styles.todayButton}>
                <ThemedText type="small">Today</ThemedText>
              </ThemedView>
            </Pressable>
          </ThemedView>

          <ThemedText type="smallBold" style={styles.fieldLabel}>
            Species
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" style={styles.fieldHint}>
            Linking a species unlocks it in your Pack collection right away.
          </ThemedText>
          <SpeciesPicker entries={entries ?? []} selectedId={linkedEntry?._id ?? null} onSelect={setLinkedEntry} />

          {error && (
            <ThemedView type="backgroundElement" style={styles.errorBox}>
              <ThemedText type="small">{error}</ThemedText>
            </ThemedView>
          )}

          <Pressable onPress={handleSave} disabled={saving} style={styles.saveButtonWrapper}>
            <ThemedView type="backgroundSelected" style={styles.saveButton}>
              <ThemedText type="smallBold">{saving ? 'Saving…' : isEditing ? 'Save changes' : 'Add pet'}</ThemedText>
            </ThemedView>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.one,
  },
  photoPicker: {
    alignItems: 'center',
    gap: Spacing.one,
    marginBottom: Spacing.two,
  },
  photo: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  photoPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoLabel: {
    marginTop: 2,
  },
  fieldLabel: {
    marginTop: Spacing.three,
    marginBottom: Spacing.one,
  },
  fieldHint: {
    marginBottom: Spacing.two,
  },
  inputBox: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  input: {
    height: 40,
    fontSize: 14,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  dateInputBox: {
    flex: 1,
  },
  todayButton: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  errorBox: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
    marginTop: Spacing.three,
  },
  saveButtonWrapper: {
    marginTop: Spacing.four,
  },
  saveButton: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.three,
    alignItems: 'center',
  },
});
