import type { CareTask, HusbandryLogEntry, MedicationPlan, Pet } from '@/db/types';

import { getEffectiveTaskDueDate } from './care-task-engine';
import { localDateString } from './date';

export type HealthReportRange = '7d' | '30d' | '90d' | 'all';

export interface HealthReportSummary {
  rangeLabel: string;
  filteredLog: HusbandryLogEntry[];
  symptomCount: number;
  medicationCount: number;
  careCount: number;
  vetCount: number;
  latestWeightGrams: number | null;
  overdueTaskCount: number;
  dueSoonTaskCount: number;
  dueMedicationCount: number;
}

function rangeStart(range: HealthReportRange): Date | null {
  const now = new Date();
  if (range === 'all') {
    return null;
  }

  const days = range === '7d' ? 7 : range === '30d' ? 30 : 90;
  const start = new Date(now);
  start.setDate(now.getDate() - (days - 1));
  start.setHours(0, 0, 0, 0);
  return start;
}

export function buildHealthReportSummary(
  range: HealthReportRange,
  log: HusbandryLogEntry[],
  tasks: CareTask[],
  medicationPlans: MedicationPlan[]
): HealthReportSummary {
  const start = rangeStart(range);
  const filteredLog = log.filter((entry) => !start || new Date(entry.timestamp) >= start);
  const latestWeight = filteredLog.find((entry) => entry.weightGrams != null)?.weightGrams ?? null;
  const today = localDateString();

  return {
    rangeLabel: range === 'all' ? 'All time' : range === '7d' ? 'Last 7 days' : range === '30d' ? 'Last 30 days' : 'Last 90 days',
    filteredLog,
    symptomCount: filteredLog.filter((entry) => entry.entryType === 'symptom').length,
    medicationCount: filteredLog.filter((entry) => entry.entryType === 'medication').length,
    careCount: filteredLog.filter((entry) => ['feeding', 'cleaning', 'water', 'check', 'task'].includes(entry.entryType)).length,
    vetCount: filteredLog.filter((entry) => entry.entryType === 'vet').length,
    latestWeightGrams: latestWeight,
    overdueTaskCount: tasks.filter((task) => getEffectiveTaskDueDate(task) < today).length,
    dueSoonTaskCount: tasks.filter((task) => {
      const due = getEffectiveTaskDueDate(task);
      return due >= today && due <= localDateString(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));
    }).length,
    dueMedicationCount: medicationPlans.filter((plan) => {
      const linkedTask = tasks.find((task) => task.id === plan.taskId);
      return linkedTask ? getEffectiveTaskDueDate(linkedTask) <= today : false;
    }).length,
  };
}

export function buildHealthReportShareText(
  pet: Pet,
  summary: HealthReportSummary,
  medicationPlans: MedicationPlan[]
): string {
  const lines = [
    `${pet.nickname} health report`,
    summary.rangeLabel,
    '',
    `Symptoms logged: ${summary.symptomCount}`,
    `Medication events: ${summary.medicationCount}`,
    `Care confirmations: ${summary.careCount}`,
    `Vet entries: ${summary.vetCount}`,
    `Overdue tasks: ${summary.overdueTaskCount}`,
    `Due soon: ${summary.dueSoonTaskCount}`,
    `Medication tasks due: ${summary.dueMedicationCount}`,
    `Latest weight: ${summary.latestWeightGrams != null ? `${summary.latestWeightGrams} g` : 'Not logged'}`,
    '',
    'Medication plans',
    medicationPlans.length > 0
      ? medicationPlans
          .map(
            (plan) =>
              `- ${plan.medicationName}: ${plan.dosage}${plan.instructions ? ` (${plan.instructions})` : ''}${plan.lastGivenAt ? ` · last given ${new Date(plan.lastGivenAt).toLocaleString()}` : ''}`
          )
          .join('\n')
      : '- No medication plans',
    '',
    'Recent timeline',
    summary.filteredLog.length > 0
      ? summary.filteredLog
          .slice(0, 12)
          .map(
            (entry) =>
              `- ${new Date(entry.timestamp).toLocaleString()} · ${entry.title ?? entry.entryType}${entry.actorName ? ` · ${entry.actorName}` : ''}: ${entry.note}`
          )
          .join('\n')
      : '- No entries in this range',
  ];

  return lines.join('\n');
}
