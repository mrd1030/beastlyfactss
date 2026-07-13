import {
  FlexWidget,
  TextWidget,
  registerWidgetTaskHandler,
  requestWidgetUpdate,
  type WidgetInfo,
} from 'react-native-android-widget';

import { getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import { isDatabaseAvailable } from '@/db/client';
import { listDueCareTasks, listPets, listRecentHusbandryLog, listUpcomingCareTasks } from '@/db/helpers';
import { pickDailyEntry, pickDailyFactText } from '@/lib/daily-fact';
import { addDays, localDateString } from '@/lib/date';

export const ANDROID_CARE_WIDGET_NAME = 'PetCareQuickWidget';
export const ANDROID_DAILY_FACT_WIDGET_NAME = 'DailyFactQuickWidget';

let taskHandlerRegistered = false;

async function renderCareWidget(_: WidgetInfo) {
  const today = localDateString();
  const [pets, dueTasks, dueSoonTasks, recentActivity] = isDatabaseAvailable
    ? await Promise.all([
        listPets(),
        listDueCareTasks(today),
        listUpcomingCareTasks(addDays(today, 1), addDays(today, 3)),
        listRecentHusbandryLog(8),
      ])
    : [[], [], [], []];

  const spotlightPet = dueTasks.length > 0 ? pets.find((pet) => pet.id === dueTasks[0].petId) ?? pets[0] : pets[0];
  const latestActivity = spotlightPet
    ? recentActivity.find((entry) => entry.petId === spotlightPet.id) ?? recentActivity[0]
    : recentActivity[0];

  return (
    <FlexWidget
      clickAction="OPEN_URI"
      clickActionData={{ uri: 'beastlyfactsapp://profile' }}
      style={{
        width: 'match_parent',
        height: 'match_parent',
        padding: 16,
        borderRadius: 24,
        backgroundColor: '#F4F7F2',
      }}>
      <TextWidget text="Pet quick checks" style={{ fontSize: 18, fontWeight: '700', color: '#14301B' }} />
      <TextWidget
        text={spotlightPet ? spotlightPet.nickname : 'No pets yet'}
        style={{ fontSize: 14, marginTop: 6, color: '#45604C' }}
      />
      <FlexWidget style={{ flexDirection: 'row', marginTop: 12, flexGap: 10 }}>
        <FlexWidget style={{ flex: 1, padding: 10, borderRadius: 16, backgroundColor: '#FFFFFF' }}>
          <TextWidget text={`${dueTasks.length}`} style={{ fontSize: 22, fontWeight: '700', color: '#B26B00' }} />
          <TextWidget text="Due now" style={{ fontSize: 12, color: '#45604C' }} />
        </FlexWidget>
        <FlexWidget style={{ flex: 1, padding: 10, borderRadius: 16, backgroundColor: '#FFFFFF' }}>
          <TextWidget text={`${dueSoonTasks.length}`} style={{ fontSize: 22, fontWeight: '700', color: '#2C7A4B' }} />
          <TextWidget text="Due soon" style={{ fontSize: 12, color: '#45604C' }} />
        </FlexWidget>
      </FlexWidget>
      <TextWidget
        text={
          latestActivity
            ? `Latest: ${latestActivity.title ?? latestActivity.entryType}${latestActivity.actorName ? ` · ${latestActivity.actorName}` : ''}`
            : 'Tap to open the care dashboard.'
        }
        style={{ fontSize: 12, marginTop: 12, color: '#45604C' }}
        maxLines={2}
        truncate="END"
      />
    </FlexWidget>
  );
}

async function renderDailyFactWidget(_: WidgetInfo) {
  const dailyEntry = pickDailyEntry(getAllSpeciesAsEntries());
  const factText = pickDailyFactText(dailyEntry) ?? 'Open the app for today’s animal fact.';

  return (
    <FlexWidget
      clickAction="OPEN_URI"
      clickActionData={{ uri: 'beastlyfactsapp://facts' }}
      style={{
        width: 'match_parent',
        height: 'match_parent',
        padding: 16,
        borderRadius: 24,
        backgroundColor: '#EEF6E7',
      }}>
      <TextWidget text="Daily fact" style={{ fontSize: 18, fontWeight: '700', color: '#14301B' }} />
      <TextWidget
        text={dailyEntry?.title ?? 'Animal spotlight'}
        style={{ fontSize: 13, marginTop: 6, color: '#45604C' }}
        maxLines={1}
        truncate="END"
      />
      <TextWidget
        text={factText}
        style={{ fontSize: 13, marginTop: 12, color: '#14301B' }}
        maxLines={5}
        truncate="END"
      />
    </FlexWidget>
  );
}

export function registerAndroidHomeWidgetTaskHandler(): void {
  if (taskHandlerRegistered) {
    return;
  }

  taskHandlerRegistered = true;
  registerWidgetTaskHandler(async ({ widgetInfo, renderWidget }) => {
    if (widgetInfo.widgetName === ANDROID_DAILY_FACT_WIDGET_NAME) {
      renderWidget(await renderDailyFactWidget(widgetInfo));
      return;
    }

    renderWidget(await renderCareWidget(widgetInfo));
  });
}

export async function requestAndroidHomeWidgetRefresh(): Promise<void> {
  await requestWidgetUpdate({
    widgetName: ANDROID_CARE_WIDGET_NAME,
    renderWidget: renderCareWidget,
  }).catch(() => {});

  await requestWidgetUpdate({
    widgetName: ANDROID_DAILY_FACT_WIDGET_NAME,
    renderWidget: renderDailyFactWidget,
  }).catch(() => {});
}
