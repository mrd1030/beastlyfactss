import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Share, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { Collapsible } from '@/components/ui/collapsible';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { getSpeciesById } from '@/content-client/species-catalog';
import { isDatabaseAvailable } from '@/db/client';
import {
  addHusbandryLogEntry,
  createCareTask,
  createFoodInventoryItem,
  createMedicationPlan,
  createPetRecord,
  deleteCareTask,
  deleteMedicationPlan,
  deleteFoodInventoryItem,
  deletePetRecord,
  getPet,
  listCareTasksForPet,
  listFoodInventoryItemsForPet,
  listHusbandryLogForPet,
  listMedicationPlansForPet,
  listPetRecordsForPet,
  updateFoodInventoryItem,
  updateMedicationPlan,
} from '@/db/helpers';
import type { CareTask, FoodInventoryItem, MedicationPlan, PetRecord } from '@/db/types';
import { useTheme } from '@/hooks/use-theme';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';
import { getCareTeam } from '@/lib/care-team-store';
import { refreshCareStatusWidget } from '@/lib/care-widget';
import { markHouseholdSyncDirty } from '@/lib/household-sync-store';
import { getEffectiveTaskDueDate, markCareTaskDone } from '@/lib/care-task-engine';
import { addDays, localDateString } from '@/lib/date';
import { pickPetPhoto } from '@/lib/pick-pet-photo';
import { buildVetSummary } from '@/lib/vet-summary';

type RecordTypeOption = 'vet' | 'vaccine' | 'lab' | 'photo' | 'note';

const RECORD_TYPE_OPTIONS: { value: RecordTypeOption; label: string }[] = [
  { value: 'vet', label: 'Vet' },
  { value: 'vaccine', label: 'Vaccine' },
  { value: 'lab', label: 'Lab' },
  { value: 'photo', label: 'Photo' },
  { value: 'note', label: 'Note' },
];

function formatTaskStatus(task: CareTask | undefined, today: string): string {
  if (!task) {
    return 'Schedule missing';
  }
  const effectiveDueDate = getEffectiveTaskDueDate(task);
  if (effectiveDueDate < today) {
    return `Overdue since ${effectiveDueDate}`;
  }
  if (effectiveDueDate === today) {
    return 'Due today';
  }
  return `Next due ${effectiveDueDate}`;
}

function formatDateLabel(timestamp: string | null | undefined): string {
  if (!timestamp) {
    return 'Not yet';
  }
  return new Date(timestamp).toLocaleString();
}

export default function PetCareToolsScreen() {
  const { petId } = useLocalSearchParams<{ petId: string }>();
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const today = localDateString();

  const [medicationName, setMedicationName] = useState('');
  const [medicationDose, setMedicationDose] = useState('');
  const [medicationIntervalDays, setMedicationIntervalDays] = useState('');
  const [medicationInstructions, setMedicationInstructions] = useState('');
  const [medicationStock, setMedicationStock] = useState('');
  const [medicationLowStock, setMedicationLowStock] = useState('');
  const [medicationError, setMedicationError] = useState<string | null>(null);

  const [foodName, setFoodName] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [foodUnit, setFoodUnit] = useState('servings');
  const [foodLowStock, setFoodLowStock] = useState('');
  const [foodNotes, setFoodNotes] = useState('');
  const [foodError, setFoodError] = useState<string | null>(null);

  const [recordTitle, setRecordTitle] = useState('');
  const [recordNote, setRecordNote] = useState('');
  const [recordType, setRecordType] = useState<RecordTypeOption>('vet');
  const [recordPhotoUri, setRecordPhotoUri] = useState<string | null>(null);
  const [recordError, setRecordError] = useState<string | null>(null);

  const { data: pet } = useQuery({
    queryKey: ['pet', petId],
    queryFn: () => getPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: careTasks } = useQuery({
    queryKey: ['careTasks', petId],
    queryFn: () => listCareTasksForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: husbandryLog } = useQuery({
    queryKey: ['husbandryLog', petId],
    queryFn: () => listHusbandryLogForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: medicationPlans } = useQuery({
    queryKey: ['medicationPlans', petId],
    queryFn: () => listMedicationPlansForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: foodItems } = useQuery({
    queryKey: ['foodInventory', petId],
    queryFn: () => listFoodInventoryItemsForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: petRecords } = useQuery({
    queryKey: ['petRecords', petId],
    queryFn: () => listPetRecordsForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: careTeam } = useQuery({
    queryKey: ['careTeam'],
    queryFn: getCareTeam,
  });

  const taskById = useMemo(() => new Map((careTasks ?? []).map((task) => [task.id, task])), [careTasks]);
  const speciesName = pet?.linkedEntryId ? (getSpeciesById(pet.linkedEntryId)?.name ?? null) : null;
  const activeCaregiver =
    careTeam?.caregivers.find((caregiver) => caregiver.id === careTeam.activeCaregiverId) ?? careTeam?.caregivers[0] ?? null;
  const lowStockFoodItems = (foodItems ?? []).filter((item) => item.quantity <= item.lowStockThreshold);
  const lowStockMedications = (medicationPlans ?? []).filter(
    (plan) => plan.stockRemaining != null && plan.lowStockThreshold != null && plan.stockRemaining <= plan.lowStockThreshold
  );
  const dueMedicationPlans = (medicationPlans ?? []).filter((plan) => {
    const linkedTask = taskById.get(plan.taskId);
    return linkedTask && getEffectiveTaskDueDate(linkedTask) <= today;
  });

  const refreshCareData = async () => {
    await markHouseholdSyncDirty().catch(() => {});
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ['careTasks', petId] }),
      queryClient.invalidateQueries({ queryKey: ['careTasks'] }),
      queryClient.invalidateQueries({ queryKey: ['husbandryLog', petId] }),
      queryClient.invalidateQueries({ queryKey: ['husbandryLog'] }),
      queryClient.invalidateQueries({ queryKey: ['medicationPlans', petId] }),
      queryClient.invalidateQueries({ queryKey: ['foodInventory', petId] }),
      queryClient.invalidateQueries({ queryKey: ['petRecords', petId] }),
    ]);
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
  };

  const handleAddMedicationPlan = async () => {
    if (!petId) return;
    const trimmedName = medicationName.trim();
    const trimmedDose = medicationDose.trim();
    const intervalDays = Number(medicationIntervalDays);
    const stockRemaining = medicationStock.trim() ? Number(medicationStock) : null;
    const lowStockThreshold = medicationLowStock.trim() ? Number(medicationLowStock) : null;

    if (!trimmedName || !trimmedDose) {
      setMedicationError('Add a medication name and dose.');
      return;
    }
    if (!Number.isFinite(intervalDays) || intervalDays < 1) {
      setMedicationError('Medication repeat should be at least 1 day.');
      return;
    }
    if (stockRemaining != null && (!Number.isFinite(stockRemaining) || stockRemaining < 0)) {
      setMedicationError('Starting stock must be zero or more.');
      return;
    }
    if (lowStockThreshold != null && (!Number.isFinite(lowStockThreshold) || lowStockThreshold < 0)) {
      setMedicationError('Low-stock threshold must be zero or more.');
      return;
    }

    setMedicationError(null);
    const task = await createCareTask({
      petId,
      taskType: 'medication',
      intervalDays: Math.round(intervalDays),
      nextDueDate: addDays(today, Math.round(intervalDays)),
      lastCompletedDate: null,
      label: `Medication · ${trimmedName}`,
      source: 'custom',
    });

    await createMedicationPlan({
      petId,
      taskId: task.id,
      medicationName: trimmedName,
      dosage: trimmedDose,
      instructions: medicationInstructions.trim() || null,
      stockRemaining: stockRemaining != null ? Math.round(stockRemaining) : null,
      lowStockThreshold: lowStockThreshold != null ? Math.round(lowStockThreshold) : null,
    });

    setMedicationName('');
    setMedicationDose('');
    setMedicationIntervalDays('');
    setMedicationInstructions('');
    setMedicationStock('');
    setMedicationLowStock('');
    await refreshCareData();
  };

  const handleGiveMedication = async (plan: MedicationPlan) => {
    if (!petId) return;
    const task = taskById.get(plan.taskId);
    if (task) {
      await markCareTaskDone(task);
    }

    const nextStockRemaining =
      plan.stockRemaining != null ? Math.max(0, plan.stockRemaining - 1) : plan.stockRemaining;
    await updateMedicationPlan(plan.id, {
      lastGivenAt: new Date().toISOString(),
      stockRemaining: nextStockRemaining ?? null,
    });
    await addHusbandryLogEntry({
      petId,
      title: `Medication: ${plan.medicationName}`,
      entryType: 'medication',
      note: `Gave ${plan.dosage} of ${plan.medicationName}${plan.instructions ? ` (${plan.instructions})` : '.'}`,
      timestamp: new Date().toISOString(),
      actorName: activeCaregiver?.name ?? null,
      weightGrams: null,
      taskId: task?.id ?? null,
      symptomSeverity: null,
      symptomContext: null,
      photoUri: null,
    });
    await refreshCareData();
  };

  const handleDeleteMedicationPlan = async (plan: MedicationPlan) => {
    if (plan.taskId) {
      await deleteCareTask(plan.taskId);
    } else {
      await deleteMedicationPlan(plan.id);
    }
    await refreshCareData();
  };

  const handleAddFoodItem = async () => {
    if (!petId) return;
    const trimmedName = foodName.trim();
    const quantity = Number(foodQuantity);
    const lowStockThreshold = foodLowStock.trim() ? Number(foodLowStock) : 0;

    if (!trimmedName) {
      setFoodError('Add a food name.');
      return;
    }
    if (!Number.isFinite(quantity) || quantity < 0) {
      setFoodError('Starting quantity must be zero or more.');
      return;
    }
    if (!Number.isFinite(lowStockThreshold) || lowStockThreshold < 0) {
      setFoodError('Low-stock threshold must be zero or more.');
      return;
    }

    setFoodError(null);
    await createFoodInventoryItem({
      petId,
      name: trimmedName,
      quantity: Math.round(quantity),
      unit: foodUnit.trim() || 'servings',
      lowStockThreshold: Math.round(lowStockThreshold),
      notes: foodNotes.trim() || null,
    });
    setFoodName('');
    setFoodQuantity('');
    setFoodUnit('servings');
    setFoodLowStock('');
    setFoodNotes('');
    await refreshCareData();
  };

  const handleUseFoodItem = async (item: FoodInventoryItem, delta: number) => {
    const nextQuantity = Math.max(0, item.quantity + delta);
    await updateFoodInventoryItem(item.id, {
      quantity: nextQuantity,
      lastUsedAt: delta < 0 ? new Date().toISOString() : item.lastUsedAt,
    });

    if (petId && delta < 0) {
      await addHusbandryLogEntry({
        petId,
        title: `Food used: ${item.name}`,
        entryType: 'feeding',
        note: `Used ${Math.abs(delta)} ${item.unit} of ${item.name}.`,
        timestamp: new Date().toISOString(),
        actorName: activeCaregiver?.name ?? null,
        weightGrams: null,
        taskId: null,
        symptomSeverity: null,
        symptomContext: null,
        photoUri: null,
      });
    }

    await refreshCareData();
  };

  const handleDeleteFoodItem = async (itemId: string) => {
    await deleteFoodInventoryItem(itemId);
    await refreshCareData();
  };

  const handlePickRecordPhoto = async () => {
    const uri = await pickPetPhoto();
    if (!uri) return;
    setRecordPhotoUri(uri);
  };

  const handleAddRecord = async () => {
    if (!petId) return;
    const trimmedTitle = recordTitle.trim();
    const trimmedNote = recordNote.trim();

    if (!trimmedTitle && !recordPhotoUri) {
      setRecordError('Add a title or attach a photo.');
      return;
    }

    setRecordError(null);
    await createPetRecord({
      petId,
      title: trimmedTitle || `${recordType} record`,
      recordType,
      note: trimmedNote || null,
      photoUri: recordPhotoUri,
    });
    setRecordTitle('');
    setRecordNote('');
    setRecordType('vet');
    setRecordPhotoUri(null);
    await refreshCareData();
  };

  const handleDeleteRecord = async (record: PetRecord) => {
    await deletePetRecord(record.id);
    await refreshCareData();
  };

  const handleShareVetSummary = async () => {
    if (!pet) return;
    const summary = buildVetSummary({
      pet,
      speciesName,
      dueTasks: (careTasks ?? []).filter((task) => task.nextDueDate <= today),
      log: husbandryLog ?? [],
      medicationPlans: medicationPlans ?? [],
      foodItems: foodItems ?? [],
      records: petRecords ?? [],
    });
    await Share.share({
      title: `${pet.nickname} vet summary`,
      message: summary,
    });
  };

  if (!pet) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedText type="small" style={{ marginTop: Spacing.three }}>
            {isDatabaseAvailable ? 'Loading care tools…' : 'Local storage is unavailable in this environment.'}
          </ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
        </ThemedView>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Card variant="soft" style={styles.heroCard}>
            <ThemedText type="title" style={styles.title}>
              {pet.nickname}&apos;s care tools
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Build medication routines, keep food stocked, save records, and share a clean vet summary from one place.
            </ThemedText>
            <View style={styles.summaryRow}>
              <ThemedView type="backgroundElement" style={styles.summaryBadge}>
                <ThemedText type="smallBold">{dueMedicationPlans.length} meds due</ThemedText>
              </ThemedView>
              <ThemedView type="backgroundElement" style={styles.summaryBadge}>
                <ThemedText type="smallBold">{lowStockFoodItems.length} low food</ThemedText>
              </ThemedView>
              <ThemedView type="backgroundElement" style={styles.summaryBadge}>
                <ThemedText type="smallBold">{(petRecords ?? []).length} records</ThemedText>
              </ThemedView>
            </View>
          </Card>

          <Card variant="filled" style={styles.snapshotCard}>
            <ThemedText type="smallBold">Vet visit summary</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Share a ready-to-send text summary with recent symptoms, due care, medications, food status, and saved records.
            </ThemedText>
            <Pressable onPress={handleShareVetSummary}>
              <ThemedView type="backgroundSelected" style={styles.actionButton}>
                <ThemedText type="smallBold">Share summary</ThemedText>
              </ThemedView>
            </Pressable>
          </Card>

          <Card variant="filled" style={styles.snapshotCard}>
            <ThemedText type="smallBold">Health report</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Open a cleaner report screen with timeline summaries, care counts, symptom history, and a share-ready export.
            </ThemedText>
            <Pressable onPress={() => router.push({ pathname: '/pet/health-report', params: { petId } })}>
              <ThemedView type="backgroundSelected" style={styles.actionButton}>
                <ThemedText type="smallBold">Open health report</ThemedText>
              </ThemedView>
            </Pressable>
          </Card>

          <Card variant="filled" style={styles.snapshotCard}>
            <ThemedText type="smallBold">Widget status</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Expo SDK 57 only supports home widgets on iPhone. Android home widgets would need a separate native integration path.
            </ThemedText>
          </Card>

          <Collapsible title={`Medication planner (${(medicationPlans ?? []).length})`}>
            <View style={styles.sectionContent}>
              <ThemedText type="small" themeColor="textSecondary">
                Add medication schedules with dose details, stock tracking, and one-tap confirmations.
              </ThemedText>
              {lowStockMedications.length > 0 && (
                <ThemedText type="small" style={{ color: theme.warning }}>
                  {lowStockMedications.length} medication plan{lowStockMedications.length === 1 ? '' : 's'} hit the low-stock threshold.
                </ThemedText>
              )}
              <ThemedView type="backgroundSelected" style={styles.inputBox}>
                <TextInput
                  value={medicationName}
                  onChangeText={setMedicationName}
                  placeholder="Medication name"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.input, { color: theme.text }]}
                />
              </ThemedView>
              <View style={styles.twoColumnRow}>
                <ThemedView type="backgroundSelected" style={[styles.inputBox, styles.flexBox]}>
                  <TextInput
                    value={medicationDose}
                    onChangeText={setMedicationDose}
                    placeholder="Dose (0.5 mL, 1 tablet)"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.input, { color: theme.text }]}
                  />
                </ThemedView>
                <ThemedView type="backgroundSelected" style={[styles.inputBox, styles.flexBox]}>
                  <TextInput
                    value={medicationIntervalDays}
                    onChangeText={setMedicationIntervalDays}
                    placeholder="Repeat every N days"
                    placeholderTextColor={theme.textSecondary}
                    keyboardType="number-pad"
                    style={[styles.input, { color: theme.text }]}
                  />
                </ThemedView>
              </View>
              <View style={styles.twoColumnRow}>
                <ThemedView type="backgroundSelected" style={[styles.inputBox, styles.flexBox]}>
                  <TextInput
                    value={medicationStock}
                    onChangeText={setMedicationStock}
                    placeholder="Current stock"
                    placeholderTextColor={theme.textSecondary}
                    keyboardType="number-pad"
                    style={[styles.input, { color: theme.text }]}
                  />
                </ThemedView>
                <ThemedView type="backgroundSelected" style={[styles.inputBox, styles.flexBox]}>
                  <TextInput
                    value={medicationLowStock}
                    onChangeText={setMedicationLowStock}
                    placeholder="Low-stock threshold"
                    placeholderTextColor={theme.textSecondary}
                    keyboardType="number-pad"
                    style={[styles.input, { color: theme.text }]}
                  />
                </ThemedView>
              </View>
              <ThemedView type="backgroundSelected" style={styles.inputBox}>
                <TextInput
                  value={medicationInstructions}
                  onChangeText={setMedicationInstructions}
                  placeholder="Instructions (with food, in the evening, shake first...)"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.input, { color: theme.text }]}
                />
              </ThemedView>
              {medicationError ? (
                <ThemedText type="small" style={{ color: theme.danger }}>
                  {medicationError}
                </ThemedText>
              ) : null}
              <Pressable onPress={handleAddMedicationPlan}>
                <ThemedView type="backgroundSelected" style={styles.actionButton}>
                  <ThemedText type="smallBold">Add medication plan</ThemedText>
                </ThemedView>
              </Pressable>

              {(medicationPlans ?? []).map((plan) => {
                const linkedTask = taskById.get(plan.taskId);
                const lowStock =
                  plan.stockRemaining != null &&
                  plan.lowStockThreshold != null &&
                  plan.stockRemaining <= plan.lowStockThreshold;

                return (
                  <ThemedView key={plan.id} type="backgroundElement" style={styles.itemCard}>
                    <View style={styles.itemHeader}>
                      <View style={styles.itemTitleBlock}>
                        <ThemedText type="smallBold">{plan.medicationName}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">
                          {plan.dosage}
                        </ThemedText>
                      </View>
                      {plan.stockRemaining != null ? (
                        <ThemedView
                          type="backgroundSelected"
                          style={[styles.badge, lowStock ? { backgroundColor: theme.warning } : undefined]}>
                          <ThemedText type="small" style={lowStock ? { color: theme.onAccent } : undefined}>
                            {plan.stockRemaining} left
                          </ThemedText>
                        </ThemedView>
                      ) : null}
                    </View>
                    <ThemedText type="small" themeColor="textSecondary">
                      {formatTaskStatus(linkedTask, today)}
                    </ThemedText>
                    {plan.instructions ? <ThemedText type="small">{plan.instructions}</ThemedText> : null}
                    <ThemedText type="small" themeColor="textSecondary">
                      Last given: {formatDateLabel(plan.lastGivenAt)}
                    </ThemedText>
                    <View style={styles.itemActions}>
                      <Pressable onPress={() => handleGiveMedication(plan)}>
                        <ThemedView type="backgroundSelected" style={styles.inlineButton}>
                          <ThemedText type="smallBold">Give now</ThemedText>
                        </ThemedView>
                      </Pressable>
                      <Pressable onPress={() => handleDeleteMedicationPlan(plan)}>
                        <ThemedText type="small" style={{ color: theme.danger }}>
                          Delete
                        </ThemedText>
                      </Pressable>
                    </View>
                  </ThemedView>
                );
              })}
            </View>
          </Collapsible>

          <Collapsible title={`Food inventory (${(foodItems ?? []).length})`}>
            <View style={styles.sectionContent}>
              <ThemedText type="small" themeColor="textSecondary">
                Track food supply levels so feeding stays easy and low stock does not surprise you.
              </ThemedText>
              {lowStockFoodItems.length > 0 && (
                <ThemedText type="small" style={{ color: theme.warning }}>
                  {lowStockFoodItems.length} food item{lowStockFoodItems.length === 1 ? '' : 's'} need restocking soon.
                </ThemedText>
              )}
              <ThemedView type="backgroundSelected" style={styles.inputBox}>
                <TextInput
                  value={foodName}
                  onChangeText={setFoodName}
                  placeholder="Food item"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.input, { color: theme.text }]}
                />
              </ThemedView>
              <View style={styles.twoColumnRow}>
                <ThemedView type="backgroundSelected" style={[styles.inputBox, styles.flexBox]}>
                  <TextInput
                    value={foodQuantity}
                    onChangeText={setFoodQuantity}
                    placeholder="Starting quantity"
                    placeholderTextColor={theme.textSecondary}
                    keyboardType="number-pad"
                    style={[styles.input, { color: theme.text }]}
                  />
                </ThemedView>
                <ThemedView type="backgroundSelected" style={[styles.inputBox, styles.flexBox]}>
                  <TextInput
                    value={foodUnit}
                    onChangeText={setFoodUnit}
                    placeholder="Unit (cups, cans, servings)"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.input, { color: theme.text }]}
                  />
                </ThemedView>
              </View>
              <ThemedView type="backgroundSelected" style={styles.inputBox}>
                <TextInput
                  value={foodLowStock}
                  onChangeText={setFoodLowStock}
                  placeholder="Low-stock threshold"
                  placeholderTextColor={theme.textSecondary}
                  keyboardType="number-pad"
                  style={[styles.input, { color: theme.text }]}
                />
              </ThemedView>
              <ThemedView type="backgroundSelected" style={styles.noteBox}>
                <TextInput
                  value={foodNotes}
                  onChangeText={setFoodNotes}
                  placeholder="Optional notes (brand, flavor, storage reminder...)"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.noteInput, { color: theme.text }]}
                  multiline
                />
              </ThemedView>
              {foodError ? (
                <ThemedText type="small" style={{ color: theme.danger }}>
                  {foodError}
                </ThemedText>
              ) : null}
              <Pressable onPress={handleAddFoodItem}>
                <ThemedView type="backgroundSelected" style={styles.actionButton}>
                  <ThemedText type="smallBold">Add food item</ThemedText>
                </ThemedView>
              </Pressable>

              {(foodItems ?? []).map((item) => {
                const lowStock = item.quantity <= item.lowStockThreshold;
                return (
                  <ThemedView key={item.id} type="backgroundElement" style={styles.itemCard}>
                    <View style={styles.itemHeader}>
                      <View style={styles.itemTitleBlock}>
                        <ThemedText type="smallBold">{item.name}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">
                          {item.quantity} {item.unit}
                        </ThemedText>
                      </View>
                      {lowStock ? (
                        <ThemedView type="backgroundSelected" style={[styles.badge, { backgroundColor: theme.warning }]}>
                          <ThemedText type="small" style={{ color: theme.onAccent }}>
                            Low
                          </ThemedText>
                        </ThemedView>
                      ) : null}
                    </View>
                    {item.notes ? <ThemedText type="small">{item.notes}</ThemedText> : null}
                    <ThemedText type="small" themeColor="textSecondary">
                      Last used: {formatDateLabel(item.lastUsedAt)}
                    </ThemedText>
                    <View style={styles.itemActions}>
                      <Pressable onPress={() => handleUseFoodItem(item, -1)} disabled={item.quantity <= 0}>
                        <ThemedView
                          type="backgroundSelected"
                          style={[styles.inlineButton, item.quantity <= 0 ? styles.disabledButton : null]}>
                          <ThemedText type="smallBold">Use 1</ThemedText>
                        </ThemedView>
                      </Pressable>
                      <Pressable onPress={() => handleUseFoodItem(item, 5)}>
                        <ThemedView type="backgroundSelected" style={styles.inlineButton}>
                          <ThemedText type="smallBold">+5</ThemedText>
                        </ThemedView>
                      </Pressable>
                      <Pressable onPress={() => handleDeleteFoodItem(item.id)}>
                        <ThemedText type="small" style={{ color: theme.danger }}>
                          Delete
                        </ThemedText>
                      </Pressable>
                    </View>
                  </ThemedView>
                );
              })}
            </View>
          </Collapsible>

          <Collapsible title={`Records vault (${(petRecords ?? []).length})`}>
            <View style={styles.sectionContent}>
              <ThemedText type="small" themeColor="textSecondary">
                Save vaccine cards, visit notes, lab results, and photo snapshots so everything is easy to find before appointments.
              </ThemedText>
              <View style={styles.chipRow}>
                {RECORD_TYPE_OPTIONS.map((option) => {
                  const selected = option.value === recordType;
                  return (
                    <Pressable key={option.value} onPress={() => setRecordType(option.value)}>
                      <ThemedView
                        type="backgroundElement"
                        style={[styles.chip, selected ? { backgroundColor: theme.accent } : undefined]}>
                        <ThemedText type="smallBold" style={selected ? { color: theme.onAccent } : undefined}>
                          {option.label}
                        </ThemedText>
                      </ThemedView>
                    </Pressable>
                  );
                })}
              </View>
              <ThemedView type="backgroundSelected" style={styles.inputBox}>
                <TextInput
                  value={recordTitle}
                  onChangeText={setRecordTitle}
                  placeholder="Record title"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.input, { color: theme.text }]}
                />
              </ThemedView>
              <ThemedView type="backgroundSelected" style={styles.noteBox}>
                <TextInput
                  value={recordNote}
                  onChangeText={setRecordNote}
                  placeholder="Optional note or context"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.noteInput, { color: theme.text }]}
                  multiline
                />
              </ThemedView>
              <View style={styles.itemActions}>
                <Pressable onPress={handlePickRecordPhoto}>
                  <ThemedView type="backgroundSelected" style={styles.inlineButton}>
                    <ThemedText type="smallBold">{recordPhotoUri ? 'Change photo' : 'Add photo'}</ThemedText>
                  </ThemedView>
                </Pressable>
                {recordPhotoUri ? (
                  <Pressable onPress={() => setRecordPhotoUri(null)}>
                    <ThemedText type="small">Remove photo</ThemedText>
                  </Pressable>
                ) : null}
              </View>
              {recordPhotoUri ? <Image source={{ uri: recordPhotoUri }} style={styles.recordPreview} /> : null}
              {recordError ? (
                <ThemedText type="small" style={{ color: theme.danger }}>
                  {recordError}
                </ThemedText>
              ) : null}
              <Pressable onPress={handleAddRecord}>
                <ThemedView type="backgroundSelected" style={styles.actionButton}>
                  <ThemedText type="smallBold">Save record</ThemedText>
                </ThemedView>
              </Pressable>

              {(petRecords ?? []).map((record) => (
                <ThemedView key={record.id} type="backgroundElement" style={styles.itemCard}>
                  <View style={styles.itemHeader}>
                    <View style={styles.itemTitleBlock}>
                      <ThemedText type="smallBold">{record.title}</ThemedText>
                      <ThemedText type="small" themeColor="textSecondary">
                        {record.recordType.toUpperCase()} · {new Date(record.createdAt).toLocaleDateString()}
                      </ThemedText>
                    </View>
                    <Pressable onPress={() => handleDeleteRecord(record)}>
                      <ThemedText type="small" style={{ color: theme.danger }}>
                        Delete
                      </ThemedText>
                    </Pressable>
                  </View>
                  {record.photoUri ? <Image source={{ uri: record.photoUri }} style={styles.recordPreview} /> : null}
                  {record.note ? <ThemedText type="small">{record.note}</ThemedText> : null}
                </ThemedView>
              ))}
            </View>
          </Collapsible>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollContent: {
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.two,
  },
  heroCard: {
    gap: Spacing.two,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
  },
  summaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  summaryBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  snapshotCard: {
    gap: Spacing.one,
  },
  sectionContent: {
    gap: Spacing.two,
  },
  inputBox: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
  },
  noteBox: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  input: {
    height: 42,
    fontSize: 14,
  },
  noteInput: {
    minHeight: 72,
    fontSize: 14,
    textAlignVertical: 'top',
  },
  twoColumnRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  flexBox: {
    flex: 1,
  },
  actionButton: {
    alignSelf: 'flex-start',
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  itemCard: {
    borderRadius: Radius.md,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  itemTitleBlock: {
    flex: 1,
    gap: 2,
  },
  badge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  itemActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.two,
  },
  inlineButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  disabledButton: {
    opacity: 0.45,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  recordPreview: {
    width: '100%',
    height: 160,
    borderRadius: Radius.md,
  },
});
