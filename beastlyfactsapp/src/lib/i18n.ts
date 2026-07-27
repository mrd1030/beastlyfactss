const dictionaries = {
  en: {
    syncQueued: 'Sync action was queued and will retry when connectivity improves.',
    notifPermissionOff: 'Notifications are enabled in-app, but the OS permission is still off or unavailable here.',
  },
} as const;

export type TranslationKey = keyof (typeof dictionaries)['en'];

export function t(key: TranslationKey, locale: keyof typeof dictionaries = 'en'): string {
  if (locale === 'en') return dictionaries.en[key];
  return dictionaries[locale][key] ?? dictionaries.en[key];
}
