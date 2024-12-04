import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { favoritesReducer } from '@/services/favorites';
import { productsApi } from '@/services/products';

import type { StateSchema } from './StateSchema';

export const createReduxStore = () => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        [productsApi.reducerPath]: productsApi.reducer,
        favorites: favoritesReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(productsApi.middleware),
    });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
