import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import { isDatabaseAvailable } from '@/db/client';
import { addFavorite, listFavorites, removeFavorite } from '@/db/helpers';

const FAVORITES_QUERY_KEY = ['favorites'] as const;

/**
 * Local favorites/bookmarks, backed by the `favorites` table. Degrades to
 * an always-empty, no-op set on web previews where the local database
 * can't open (see src/db/client.ts) instead of crashing.
 */
export function useFavorites() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: FAVORITES_QUERY_KEY,
    queryFn: listFavorites,
    enabled: isDatabaseAvailable,
  });

  const favoriteIds = useMemo(() => new Set((data ?? []).map((f) => f.entryId)), [data]);

  const toggleFavorite = useCallback(
    async (entryId: string) => {
      if (!isDatabaseAvailable) return;
      if (favoriteIds.has(entryId)) {
        await removeFavorite(entryId);
      } else {
        await addFavorite(entryId);
      }
      await queryClient.invalidateQueries({ queryKey: FAVORITES_QUERY_KEY });
    },
    [favoriteIds, queryClient]
  );

  return { favorites: data ?? [], favoriteIds, toggleFavorite };
}
