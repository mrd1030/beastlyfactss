import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AddPetCard, PetCard } from '@/components/pet-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { getAllSpecies } from '@/content-client/species-catalog';
import { isDatabaseAvailable } from '@/db/client';
import { getStreakState, listDiscoveredSpecies, listPets } from '@/db/helpers';
import { useTheme } from '@/hooks/use-theme';
import { pickPetPhoto } from '@/lib/pick-pet-photo';
import { getProfile, updateProfile } from '@/lib/profile-store';

/**
 * Profile tab — local identity + stats + "My Pets" (moved here from the
 * Pack tab, which is now a pure species-collection grid). App settings
 * (appearance/notifications/account reset/delete-all-data) live on the
 * separate pushed `/settings` screen, reached via the gear icon here —
 * see src/app/settings.tsx. Everything here is on-device only: no
 * accounts/backend yet (deferred by the user).
 */
export default function ProfileScreen() {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();

  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState('');

  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });

  const { data: pets } = useQuery({ queryKey: ['pets'], queryFn: listPets, enabled: isDatabaseAvailable });
  const { data: streak } = useQuery({
    queryKey: ['streakState'],
    queryFn: getStreakState,
    enabled: isDatabaseAvailable,
  });
  const { data: discovered } = useQuery({
    queryKey: ['discoveredSpecies'],
    queryFn: listDiscoveredSpecies,
    enabled: isDatabaseAvailable,
  });

  const totalSpecies = getAllSpecies().length;
  const totalDiscovered = (discovered ?? []).filter((row) => row.discovered).length;

  const startEditingName = () => {
    setNameDraft(profile?.displayName ?? '');
    setEditingName(true);
  };

  const saveName = async () => {
    const trimmed = nameDraft.trim();
    await updateProfile({ displayName: trimmed || 'Beast Keeper' });
    setEditingName(false);
    queryClient.invalidateQueries({ queryKey: ['profile'] });
  };

  const handlePickAvatar = async () => {
    const uri = await pickPetPhoto();
    if (!uri) return;
    await updateProfile({ avatarUri: uri });
    queryClient.invalidateQueries({ queryKey: ['profile'] });
  };

  const openPet = (petId: string) => {
    router.push({ pathname: '/pet/[id]', params: { id: petId } });
  };

  const openAddPet = () => {
    router.push('/pet/form');
  };

  const openSettings = () => {
    router.push('/settings');
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.headerRow}>
            <ThemedText type="title" style={styles.title}>
              Profile
            </ThemedText>
            <Pressable onPress={openSettings} hitSlop={8}>
              <ThemedText type="linkPrimary">⚙ Settings</ThemedText>
            </Pressable>
          </ThemedView>

          <ThemedView style={styles.identityRow}>
            <Pressable onPress={handlePickAvatar}>
              {profile?.avatarUri ? (
                <Image source={{ uri: profile.avatarUri }} style={styles.avatar} />
              ) : (
                <ThemedView type="backgroundElement" style={styles.avatarPlaceholder}>
                  <ThemedText type="subtitle">🦎</ThemedText>
                </ThemedView>
              )}
            </Pressable>
            <View style={styles.identityText}>
              {editingName ? (
                <ThemedView style={styles.nameEditRow}>
                  <ThemedView type="backgroundElement" style={styles.nameInputBox}>
                    <TextInput
                      value={nameDraft}
                      onChangeText={setNameDraft}
                      placeholder="Your name"
                      placeholderTextColor={theme.textSecondary}
                      style={[styles.nameInput, { color: theme.text }]}
                      autoFocus
                    />
                  </ThemedView>
                  <Pressable onPress={saveName} hitSlop={8}>
                    <ThemedText type="linkPrimary">Save</ThemedText>
                  </Pressable>
                </ThemedView>
              ) : (
                <Pressable onPress={startEditingName}>
                  <ThemedText type="title" style={styles.nickname}>
                    {profile?.displayName ?? 'Beast Keeper'}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    Tap to edit
                  </ThemedText>
                </Pressable>
              )}
            </View>
          </ThemedView>

          <ThemedView style={styles.statsRow}>
            <ThemedView type="backgroundElement" style={styles.statBox}>
              <ThemedText type="smallBold">🔥 {streak?.currentStreak ?? 0}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Day streak
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.statBox}>
              <ThemedText type="smallBold">
                {totalDiscovered}/{totalSpecies}
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Discovered
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.statBox}>
              <ThemedText type="smallBold">{pets?.length ?? 0}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Pets
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText type="smallBold" style={styles.sectionTitle}>
            My Pets
          </ThemedText>

          {!isDatabaseAvailable && (
            <ThemedView type="backgroundElement" style={styles.infoBox}>
              <ThemedText type="small">Local storage is unavailable in this environment, so pets cannot be saved here.</ThemedText>
            </ThemedView>
          )}

          {isDatabaseAvailable && (pets ?? []).length === 0 && (
            <ThemedView type="backgroundElement" style={styles.infoBox}>
              <ThemedText type="small">
                No pets yet — add one to start tracking care reminders and a husbandry log.
              </ThemedText>
            </ThemedView>
          )}

          {isDatabaseAvailable && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.petsRow}>
              {(pets ?? []).map((pet) => (
                <PetCard key={pet.id} pet={pet} onPress={() => openPet(pet.id)} />
              ))}
              <AddPetCard onPress={openAddPet} />
            </ScrollView>
          )}
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
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.one,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.two,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  identityRow: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  identityText: {
    flex: 1,
  },
  nickname: {
    fontSize: 22,
    lineHeight: 28,
  },
  nameEditRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  nameInputBox: {
    flex: 1,
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  nameInput: {
    height: 40,
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginTop: Spacing.three,
  },
  statBox: {
    flex: 1,
    borderRadius: Spacing.two,
    padding: Spacing.two,
    alignItems: 'center',
    gap: 2,
  },
  sectionTitle: {
    marginTop: Spacing.four,
    marginBottom: Spacing.two,
  },
  infoBox: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
  },
  petsRow: {
    flexGrow: 0,
  },
});
