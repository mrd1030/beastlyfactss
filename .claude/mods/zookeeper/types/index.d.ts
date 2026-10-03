export type Flag = { rule: string; where: string; detail: string }

declare module 'claude-code' {
  interface PluginState {
    zookeeper: { flags: Flag[] }
  }
}
