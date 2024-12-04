import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { FavoritesSchema } from '@/services/favorites';
import type { ProductInterface } from '@/services/types';

const LOCAL_STORAGE_KEY_FAVORITES = 'favorites';

const initialState: FavoritesSchema = {
    favorites: JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITES) || '[]',
    ),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<ProductInterface>) => {
            const product = action.payload;
            state.favorites.push(product);
            localStorage.setItem(
                LOCAL_STORAGE_KEY_FAVORITES,
                JSON.stringify(state.favorites),
            );
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(
                item => item.id !== action.payload,
            );
            localStorage.setItem(
                LOCAL_STORAGE_KEY_FAVORITES,
                JSON.stringify(state.favorites),
            );
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const { reducer: favoritesReducer } = favoritesSlice;
