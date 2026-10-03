export type Card = {
  done: string[]
  doing: string[]
  waiting: string[]
  updatedAt: number | null
}

declare module 'claude-code' {
  interface PluginState {
    'where-are-we': { card: Card }
  }
}
