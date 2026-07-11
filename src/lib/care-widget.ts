import { isAndroidWidgetSupportedEnvironment } from './android-widget-runtime';

export async function refreshCareStatusWidget(): Promise<void> {
  if (!isAndroidWidgetSupportedEnvironment()) {
    return Promise.resolve();
  }

  const widgets = await import('@/widgets/android-home-widgets').catch(() => null);
  if (!widgets) {
    return Promise.resolve();
  }

  await widgets.requestAndroidHomeWidgetRefresh();
}
