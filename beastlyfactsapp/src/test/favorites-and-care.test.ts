import { describeDueStatus, getEffectiveTaskDueDate, isTaskDueSoon } from '@/lib/care-task-engine';
import { getFactFavoriteId, isFactFavoriteId, parseFactFavoriteId } from '@/lib/favorite-keys';

describe('favorite key helpers', () => {
  it('round-trips fact favorite ids', () => {
    const id = getFactFavoriteId(42);
    expect(id).toBe('fact:42');
    expect(isFactFavoriteId(id)).toBe(true);
    expect(parseFactFavoriteId(id)).toBe(42);
  });

  it('rejects non-fact ids', () => {
    expect(isFactFavoriteId('entry:fox')).toBe(false);
    expect(parseFactFavoriteId('entry:fox')).toBe(null);
  });
});

describe('care due-date logic', () => {
  it('uses snoozed date when later than due date', () => {
    const due = getEffectiveTaskDueDate({ nextDueDate: '2026-01-01', snoozedUntilDate: '2026-01-03' });
    expect(due).toBe('2026-01-03');
  });

  it('describes due status correctly', () => {
    expect(describeDueStatus('2026-01-01', '2026-01-01')).toBe('Due today');
    expect(describeDueStatus('2025-12-31', '2026-01-01')).toBe('Overdue');
    expect(describeDueStatus('2026-01-03', '2026-01-01')).toBe('Due in 2 days');
  });

  it('flags due soon window', () => {
    expect(isTaskDueSoon({ nextDueDate: '2026-01-03', snoozedUntilDate: null }, '2026-01-01', 3)).toBe(true);
    expect(isTaskDueSoon({ nextDueDate: '2026-01-10', snoozedUntilDate: null }, '2026-01-01', 3)).toBe(false);
  });
});
