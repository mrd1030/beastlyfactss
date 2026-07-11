import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { fetchEntryDetailBySlug } from '@/content-client/queries';

export default function EntrySlugRedirectScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const articleSlug = typeof slug === 'string' ? slug : '';

  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ['entryBySlug', articleSlug],
    queryFn: () => fetchEntryDetailBySlug(articleSlug),
    enabled: !!articleSlug,
  });

  useEffect(() => {
    if (data?._id) {
      router.replace({ pathname: '/entry/[id]', params: { id: data._id } });
    }
  }, [data?._id, router]);

  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      {isFetching && <ThemedText type="small">Opening article…</ThemedText>}
      {!isFetching && error && (
        <>
          <ThemedText type="small">Could not open that linked article.</ThemedText>
          <ThemedText type="linkPrimary" onPress={() => refetch()}>
            Retry
          </ThemedText>
        </>
      )}
      {!isFetching && !error && !data && <ThemedText type="small">That linked article was not found.</ThemedText>}
    </ThemedView>
  );
}
