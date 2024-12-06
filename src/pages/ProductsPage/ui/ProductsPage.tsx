import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { List } from '@/components/List';
import { Loader } from '@/components/Loader';
import { PageFilters } from '@/components/PageFilters';
import { PageTitle } from '@/components/PageTitle';
import { Pagination } from '@/components/Pagination';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { SortOrder } from '@/pages/ProductsPage';
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
    const [filteredPage, setFilteredPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.DEFAULT);

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
        title: searchQuery,
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
        setPage(prevPage => {
            const nextPage = prevPage + 1;
            navigate(`/products?page=${nextPage}`);
            return nextPage;
        });
    };

    const prevPage = () => {
        setPage(prevPage => {
            const prev = Math.max(prevPage - 1, 1);
            navigate(`/products?page=${prev}`);
            return prev;
        });
    };

    const nextFilteredPage = () => {
        setFilteredPage(prevPage => prevPage + 1);
    };

    const prevFilteredPage = () => {
        setFilteredPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const filteredProducts = useMemo(() => {
        if (showFavorites) {
            let filteredFavorites = favorites;

            if (searchQuery) {
                setFilteredPage(1);
                filteredFavorites = filteredFavorites.filter(product =>
                    product.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                );
            }

            const startIndex = (filteredPage - 1) * ITEMS_PER_PAGE;
            const endIndex = filteredPage * ITEMS_PER_PAGE;

            return filteredFavorites.slice(startIndex, endIndex);
        } else {
            return products;
        }
    }, [favorites, products, showFavorites, filteredPage, searchQuery]);

    const sortedProducts = useMemo(() => {
        if (!filteredProducts) return [];

        return [...filteredProducts].sort((a, b) => {
            switch (sortOrder) {
                case SortOrder.ASCENDING:
                    return a.price - b.price;
                case SortOrder.DESCENDING:
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
    }, [filteredProducts, sortOrder]);

    const handleSearch = (query: string) => {
        setSearchQuery(() => {
            navigate(`/products?page=${1}`);
            return query;
        });
    };

    return (
        <div>
            <PageTitle>products</PageTitle>
            <PageFilters
                favoritesOnChange={() => setShowFavorites(!showFavorites)}
                searchOnChange={handleSearch}
                onSortChange={order => setSortOrder(order)}
            />
            {(isLoading || isFetching) && <Loader />}
            {!isLoading && error && (
                <p>Произошла ошибка, пожалуйста обновите страницу</p>
            )}
            {!isLoading &&
            !isFetching &&
            !error &&
            sortedProducts &&
            sortedProducts.length ? (
                <>
                    {!showFavorites && (
                        <Pagination
                            prevPage={prevPage}
                            nextPage={nextPage}
                            current={page}
                            hasMore={hasMore}
                        />
                    )}
                    {showFavorites && (
                        <Pagination
                            prevPage={prevFilteredPage}
                            nextPage={nextFilteredPage}
                            current={filteredPage}
                            hasMore={sortedProducts.length === ITEMS_PER_PAGE}
                        />
                    )}
                    <List
                        list={sortedProducts}
                        favorites={favorites}
                        onDelete={deleteProduct}
                        addFavorite={addFavoriteHandler}
                        removeFavorite={removeFavoriteHandler}
                    />
                </>
            ) : null}
            {sortedProducts && sortedProducts.length === 0 && (
                <p>По вашему запросу товаров не найдено</p>
            )}
        </div>
    );
};

export default ProductsPage;
