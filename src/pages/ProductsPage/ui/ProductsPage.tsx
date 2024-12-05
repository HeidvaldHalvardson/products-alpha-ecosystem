import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { List } from '@/components/List/List';
import { Loader } from '@/components/Loader';
import { PageFilters } from '@/components/PageFilters';
import { PageTitle } from '@/components/PageTitle';
import { Pagination } from '@/components/Pagination';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addFavorite, removeFavorite } from '@/services/favorites';
import { getFavorites } from '@/services/favorites/selectors/getFavorites';
import {
    getProducts,
    deleteProductById,
    ITEMS_PER_PAGE,
} from '@/services/products';
import type { ProductInterface } from '@/services/types';

const ProductsPage = () => {
    const dispatch = useAppDispatch();
    const favorites = useSelector(getFavorites);
    const [deleteProduct] = deleteProductById();

    const location = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const page = query.get('page');
        if (page) {
            setPage(+page);
        }
    }, [location.search]);

    const {
        data: products,
        error,
        isLoading,
        isFetching,
    } = getProducts({
        offset: (page - 1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
    });

    const addFavoriteHandler = (product: ProductInterface) => {
        dispatch(addFavorite(product));
    };

    const removeFavoriteHandler = (id: number) => {
        dispatch(removeFavorite(id));
    };

    useEffect(() => {
        if (products && products.length < ITEMS_PER_PAGE) {
            setHasMore(false);
        } else if (products && products.length === ITEMS_PER_PAGE) {
            setHasMore(true);
        }
    }, [products]);

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
        navigate(`/products?page=${page + 1}`);
    };

    const prevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
        navigate(`/products?page=${page - 1}`);
    };

    const filteredProducts = showFavorites
        ? products?.filter(product =>
              favorites.some(fav => fav.id === product.id),
          )
        : products;

    return (
        <div>
            <PageTitle>products</PageTitle>
            <PageFilters
                favoritesOnChange={() => setShowFavorites(!showFavorites)}
            />
            {isLoading || isFetching ? <Loader /> : null}
            {!isLoading && error ? (
                <p>Произошла ошибка, пожалуйста обновите страницу</p>
            ) : null}
            {!isLoading &&
            !isFetching &&
            !error &&
            products &&
            products.length ? (
                <>
                    <Pagination
                        prevPage={prevPage}
                        nextPage={nextPage}
                        current={page}
                        hasMore={hasMore}
                    />
                    <List
                        list={filteredProducts}
                        favorites={favorites}
                        onDelete={deleteProduct}
                        addFavorite={addFavoriteHandler}
                        removeFavorite={removeFavoriteHandler}
                    />
                </>
            ) : null}
            {products && products.length === 0 ? (
                <>
                    <p>По вашему запросу товаров не найдено</p>
                    <button onClick={() => navigate(-1)}>
                        Вернуться на предыдущую страницу
                    </button>
                </>
            ) : null}
        </div>
    );
};

export default ProductsPage;
