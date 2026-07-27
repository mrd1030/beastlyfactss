import { getSyncStatusMessage } from '@/lib/sync-status';

describe('sync status messages', () => {
  it('maps explicit statuses', () => {
    expect(getSyncStatusMessage('conflict')).toContain('Remote changes');
    expect(getSyncStatusMessage('not-configured')).toContain("isn't available");
    expect(getSyncStatusMessage('database-unavailable')).toContain('local device database');
    expect(getSyncStatusMessage('not-signed-in')).toContain('Sign in');
    expect(getSyncStatusMessage('not-connected')).toContain('Create or join');
    expect(getSyncStatusMessage('idle')).toContain('already up to date');
  });

  it('maps success statuses to completed copy', () => {
    expect(getSyncStatusMessage('pulled')).toBe('Household sync completed.');
    expect(getSyncStatusMessage('pushed')).toBe('Household sync completed.');
    expect(getSyncStatusMessage('joined')).toBe('Household sync completed.');
    expect(getSyncStatusMessage('created')).toBe('Household sync completed.');
  });
});
