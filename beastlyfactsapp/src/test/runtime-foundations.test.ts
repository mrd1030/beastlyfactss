import { t } from '@/lib/i18n';
import { getRemoteConfig, loadRemoteConfig } from '@/lib/remote-config';

describe('runtime foundations', () => {
  it('returns i18n fallback strings', () => {
    expect(t('syncQueued')).toContain('queued');
  });

  it('loads remote config defaults', () => {
    const config = loadRemoteConfig();
    expect(config.featureFlags.advancedSyncQueue).toBeDefined();
    expect(getRemoteConfig().releaseChannel).toBeDefined();
  });
});
