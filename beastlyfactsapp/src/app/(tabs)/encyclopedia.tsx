import { Redirect } from 'expo-router';

export default function EncyclopediaRedirectScreen() {
  return <Redirect href="/guides?view=encyclopedia" />;
}
