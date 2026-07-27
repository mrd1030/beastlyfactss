# beastlyfactsapp

Mobile app for BeastlyFacts (Expo SDK 57).

## Scope lock

This implementation is scoped to:

- `/home/runner/work/beastlyfactss/beastlyfactss/beastlyfactsapp`

Critical paths prioritized:

- Home (`src/app/(tabs)/index.tsx`)
- Facts (`src/app/(tabs)/facts.tsx`)
- Library/Guides (`src/components/library-screen.tsx`)
- Pets (`src/app/(tabs)/profile.tsx`)
- Settings (`src/app/(tabs)/settings.tsx`)
- Entry (`src/app/entry/[id].tsx`)
- Encyclopedia (`src/app/encyclopedia/[id].tsx`)

## Acceptance criteria

### Accessibility

- Interactive controls expose role/label/state semantics.
- Modal and collapsible surfaces expose dialog/expanded semantics.
- Text scales with dynamic type (font scaling enabled with max multiplier).
- Reduced-motion users receive reduced animation behavior.
- Accessibility smoke tests run in CI.

### Quality gates

Required commands:

```bash
npm run lint
npm run typecheck
npm run test:coverage
```

Composite gate:

```bash
npm run quality
```

CI workflows:

- `.github/workflows/beastlyfactsapp-quality.yml`
- `.github/workflows/beastlyfactsapp-codeql.yml`

> Branch protection/status-check enforcement is configured in GitHub repository settings; set these workflows as required checks for `main`.

### Mobile friendliness

- Touchable controls maintain accessible tap targets and semantic labels.
- Core scroll/list screens preserve safe-area and bottom inset behavior.
- UI text remains readable under scaled fonts.

### Advanced functions

Implemented foundations:

- Universal/deep link config in `app.json`.
- Offline sync queue (`src/lib/offline-sync-queue.ts`).
- Background refresh loop (`src/lib/background-refresh.ts`).
- Runtime telemetry abstraction (`src/lib/telemetry.ts`).
- Remote config / feature flag bootstrap (`src/lib/remote-config.ts`).
- i18n-ready translation utility (`src/lib/i18n.ts`).

## Development

```bash
npm install
npm run start
```

## Test coverage targets

Jest coverage thresholds are enforced in `jest.config.js`:

- Branches: 65%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## Accessibility regression checklist

See `/home/runner/work/beastlyfactss/beastlyfactss/beastlyfactsapp/docs/accessibility-regression-checklist.md`.
