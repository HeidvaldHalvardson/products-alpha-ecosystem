import React from 'react';

import { useParams } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { ProductCard } from '@/components/ProductCard/ui/ProductCard';
import { PageWrapperWithBack } from '@/containers';
import { getProductById } from '@/services/products';

const ProductItemPage = () => {
    const { id } = useParams();
    const { data: product, error, isFetching } = getProductById(+id);

    if (isFetching) return <Loader />;

    return (
        <PageWrapperWithBack>
            {isFetching ? <Loader /> : null}
            {!isFetching && error ? (
                <p>Произошла ошибка, пожалуйста обновите страницу</p>
            ) : null}
            {!isFetching && !error && product ? (
                <ProductCard product={product} />
            ) : null}
        </PageWrapperWithBack>
    );
};

export default ProductItemPage;
