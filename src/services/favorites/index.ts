import { getFavorites } from './selectors/getFavorites';
import { favoritesReducer } from './slice/favoritesSlice';
import { addFavorite, removeFavorite } from './slice/favoritesSlice';
import { FavoritesSchema } from './types/FavoritesSchema';

export {
    favoritesReducer,
    FavoritesSchema,
    getFavorites,
    addFavorite,
    removeFavorite,
};
