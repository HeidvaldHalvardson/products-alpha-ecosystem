import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { List } from '@/components/List/List';
import { Loader } from '@/components/Loader';
import { PageTitle } from '@/components/PageTitle';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addFavorite, removeFavorite } from '@/services/favorites';
import { getFavorites } from '@/services/favorites/selectors/getFavorites';
import { getProducts, deleteProductById } from '@/services/products';
import type { ProductInterface } from '@/services/types';

const ProductsPage = () => {
    const {
        data: products,
        error,
        isLoading,
    } = getProducts({ offset: 0, limit: 10 });
    const [deleteProduct] = deleteProductById();

    const dispatch = useAppDispatch();
    const favorites = useSelector(getFavorites);

    const [showFavorites, setShowFavorites] = useState(false);

    const addFavoriteHandler = (product: ProductInterface) => {
        dispatch(addFavorite(product));
    };

    const removeFavoriteHandler = (id: number) => {
        dispatch(removeFavorite(id));
    };

    if (isLoading) return <Loader />;

    if (!isLoading && error)
        return <p>Произошла ошибка, пожалуйста обновите страницу</p>;

    return (
        <div>
            <PageTitle>products</PageTitle>
            {!isLoading && !error && products && products.length ? (
                <List
                    list={products}
                    favorites={favorites}
                    onDelete={deleteProduct}
                    addFavorite={addFavoriteHandler}
                    removeFavorite={removeFavoriteHandler}
                />
            ) : (
                <p>По вашему запросу товаров не найдено</p>
            )}
        </div>
    );
};

export default ProductsPage;
