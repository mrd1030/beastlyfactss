/** Device-local 'YYYY-MM-DD' string for `date` (defaults to now). Used to
 * key streak/day-log rows so "today" means the user's local calendar day,
 * not UTC. */
export function localDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** 1-366 day-of-year for `date`, in local time. */
export function dayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diffMs = date.getTime() - start.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

/** Adds `days` (may be negative) to a 'YYYY-MM-DD' local date string,
 * returning a new 'YYYY-MM-DD' string. Used by the care-task engine to
 * compute next-due dates from an interval, and by the care-notification
 * scheduler to compute its rolling window. */
export function addDays(dateStr: string, days: number): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

/** True if `a` (a 'YYYY-MM-DD' string) is on or before `b`. Plain string
 * comparison works because the format is zero-padded and always
 * year-month-day, but this name documents the intent at call sites. */
export function isOnOrBefore(a: string, b: string): boolean {
  return a <= b;
}
