/**
 * Local-only id generator for tables with client-generated text primary
 * keys (pets, care tasks, husbandry log entries). Not cryptographically
 * strong and not meant to be — these ids never leave the device.
 */
export function generateLocalId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
