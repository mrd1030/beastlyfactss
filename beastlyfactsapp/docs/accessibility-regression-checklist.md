# Accessibility regression checklist (beastlyfactsapp)

Run before merge on iOS, Android, and web-mobile for core paths.

## Keyboard/screen reader

- [ ] Every Pressable control has a meaningful accessible label.
- [ ] Selected/expanded/disabled states are announced where applicable.
- [ ] Dialogs/modals can be dismissed and announce context.
- [ ] Tab buttons announce selected state.

## Visual & text scaling

- [ ] Dynamic text scaling (up to 200%) keeps controls readable and usable.
- [ ] No clipped headings/content in Home, Facts, Library, Pets, Settings.
- [ ] Status meanings are not color-only.

## Motion

- [ ] Reduced Motion setting disables or shortens non-essential animation.

## Core path smoke

- [ ] Home: menu, saved toggles, and primary navigation are operable.
- [ ] Facts: search, shuffle, category filtering, pagination are operable.
- [ ] Library/Guides: category filters and entry navigation are operable.
- [ ] Pets: task actions and timeline navigation are operable.
- [ ] Settings: sync controls and destructive actions are clearly announced.

## Automated checks

- [ ] `npm run test` passes.
- [ ] Accessibility smoke tests pass (`src/test/accessibility-smoke.test.tsx`).
