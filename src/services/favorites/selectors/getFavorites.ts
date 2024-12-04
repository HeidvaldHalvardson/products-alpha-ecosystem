import type { StateSchema } from '@/StoreProvider';

export const getFavorites = (state: StateSchema) => state.favorites.favorites;
