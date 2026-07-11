import type {
  CareTask,
  FoodInventoryItem,
  HusbandryLogEntry,
  MedicationPlan,
  Pet,
  PetRecord,
  SymptomSeverity,
} from '@/db/types';

function formatTimestamp(value: string | null | undefined): string {
  if (!value) {
    return 'Not recorded';
  }
  return new Date(value).toLocaleString();
}

function summarizeSeverity(entries: HusbandryLogEntry[]): string {
  const latestSymptom = entries.find((entry) => entry.entryType === 'symptom');
  if (!latestSymptom) {
    return 'No symptom alerts logged.';
  }

  const severity = (latestSymptom.symptomSeverity ?? 'watch') as SymptomSeverity;
  return `Latest symptom: ${severity.toUpperCase()} on ${formatTimestamp(latestSymptom.timestamp)}${latestSymptom.symptomContext ? ` (${latestSymptom.symptomContext})` : ''}.`;
}

export function buildVetSummary(params: {
  pet: Pet;
  speciesName?: string | null;
  dueTasks: CareTask[];
  log: HusbandryLogEntry[];
  medicationPlans: MedicationPlan[];
  foodItems: FoodInventoryItem[];
  records: PetRecord[];
}): string {
  const { pet, speciesName, dueTasks, log, medicationPlans, foodItems, records } = params;
  const overdueTasks = dueTasks.filter((task) => task.nextDueDate < new Date().toISOString().slice(0, 10));
  const weightEntries = log.filter((entry) => entry.weightGrams != null);
  const latestWeight = weightEntries[0];
  const recentActivity = log.slice(0, 8);

  return [
    `Vet summary for ${pet.nickname}`,
    speciesName ? `Species: ${speciesName}` : null,
    pet.acquiredDate ? `Acquired: ${pet.acquiredDate}` : null,
    '',
    'Health watch',
    summarizeSeverity(log),
    latestWeight?.weightGrams != null ? `Latest weight: ${latestWeight.weightGrams} g on ${formatTimestamp(latestWeight.timestamp)}` : 'Latest weight: none recorded',
    '',
    'Open care items',
    dueTasks.length > 0
      ? dueTasks.map((task) => `- ${task.label ?? task.taskType}: due ${task.nextDueDate}`).join('\n')
      : '- No care tasks currently due.',
    overdueTasks.length > 0 ? `Overdue count: ${overdueTasks.length}` : 'Overdue count: 0',
    '',
    'Medication plan',
    medicationPlans.length > 0
      ? medicationPlans
          .map(
            (plan) =>
              `- ${plan.medicationName}: ${plan.dosage}${plan.instructions ? ` · ${plan.instructions}` : ''} · last given ${formatTimestamp(plan.lastGivenAt)}`
          )
          .join('\n')
      : '- No medication plans recorded.',
    '',
    'Food inventory',
    foodItems.length > 0
      ? foodItems
          .map(
            (item) =>
              `- ${item.name}: ${item.quantity} ${item.unit}${item.lowStockThreshold > 0 ? ` (low at ${item.lowStockThreshold})` : ''}`
          )
          .join('\n')
      : '- No food items recorded.',
    '',
    'Recent timeline',
    recentActivity.length > 0
      ? recentActivity
          .map(
            (entry) =>
              `- ${formatTimestamp(entry.timestamp)} · ${entry.title ?? entry.entryType}${entry.actorName ? ` · ${entry.actorName}` : ''}: ${entry.note}`
          )
          .join('\n')
      : '- No timeline entries yet.',
    '',
    'Records on file',
    records.length > 0
      ? records.map((record) => `- ${record.title} (${record.recordType}) · added ${formatTimestamp(record.createdAt)}`).join('\n')
      : '- No saved records yet.',
  ]
    .filter(Boolean)
    .join('\n');
}
