export type Card = {
  done: string[]
  doing: string[]
  // The queue: work lined up after what is in progress, in order.
  next: string[]
  waiting: string[]
  updatedAt: number | null
}

// One archived task. The text fields are the times already written out in
// US Eastern, so the archive doc can copy them as they are.
export type Archived = {
  text: string
  doneAt: number | null
  archivedAt: number
  doneAtText: string
  archivedAtText: string
}

// What Undo puts back: the card and the ledger as they were before the last
// Archive or Reset.
export type Undo = {
  card: Card
  doneAt: Record<string, number>
  archived: Archived[]
}

export type Ledger = {
  doneAt: Record<string, number>
  archived: Archived[]
  undo: Undo | null
}

// A copy of the card and the archive ledger taken just before an Archive,
// Reset or Undo, kept newest first in the backups file.
export type Backup = {
  at: number
  atText: string
  reason: string
  card: Card
  doneAt: Record<string, number>
  archived: Archived[]
}

// A button pressed once and waiting for its confirming second press.
export type Armed = { key: string; at: number }

declare module 'claude-code' {
  interface PluginState {
    'where-are-we': { card: Card; ledger: Ledger; picked: string[]; armed: Armed | null; isHidden: boolean }
  }
}
