import type { categoriesApi } from '@/services/categories';
import type { FavoritesSchema } from '@/services/favorites';
import type { productsApi } from '@/services/products';

export interface StateSchema {
    favorites: FavoritesSchema;
    [productsApi.reducerPath]: ReturnType<typeof productsApi.reducer>;
    [categoriesApi.reducerPath]: ReturnType<typeof categoriesApi.reducer>;
}
