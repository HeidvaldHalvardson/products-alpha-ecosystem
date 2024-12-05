import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { categoriesApi } from '@/services/categories';
import { favoritesReducer } from '@/services/favorites';
import { productsApi } from '@/services/products';

import type { StateSchema } from './StateSchema';

export const createReduxStore = () => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        favorites: favoritesReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(
                productsApi.middleware,
                categoriesApi.middleware,
            ),
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
