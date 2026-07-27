export type SyncActionStatus =
  | 'conflict'
  | 'not-configured'
  | 'database-unavailable'
  | 'not-signed-in'
  | 'not-connected'
  | 'idle'
  | 'pulled'
  | 'pushed'
  | 'joined'
  | 'created';

export function getSyncStatusMessage(status: SyncActionStatus): string {
  switch (status) {
    case 'conflict':
      return 'Remote changes were found since this device last synced. Pull latest or push this device to choose which version wins.';
    case 'not-configured':
      return "Cloud sync isn't available in this build yet.";
    case 'database-unavailable':
      return 'Cloud sync needs the local device database, which is unavailable in this preview environment.';
    case 'not-signed-in':
      return 'Sign in above first to use cloud sync.';
    case 'not-connected':
      return 'Create or join a household first.';
    case 'idle':
      return 'Everything is already up to date.';
    default:
      return 'Household sync completed.';
  }
}
