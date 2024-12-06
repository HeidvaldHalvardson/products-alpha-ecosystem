import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
    CreateProductInterface,
    ProductInterface,
} from '@/services/types';

const baseUrl = 'https://api.escuelajs.co/api/v1/';

export const ITEMS_PER_PAGE = 10;

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ['Products'],
    endpoints: build => ({
        getProducts: build.query<
            ProductInterface[],
            { offset: number; limit: number; title?: string }
        >({
            query: ({ offset = 0, limit = ITEMS_PER_PAGE, title = '' }) => ({
                url: '/products',
                params: {
                    offset,
                    limit,
                    title,
                },
            }),
            providesTags: ['Products'],
        }),
        getProductById: build.query<ProductInterface, number>({
            query: id => ({
                url: `/products/${id}`,
            }),
            providesTags: result =>
                result ? [{ type: 'Products', id: result.id }] : [],
        }),
        updateProduct: build.mutation<
            ProductInterface,
            { id: number; body: ProductInterface }
        >({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Products', id },
            ],
        }),
        createProduct: build.mutation<ProductInterface, CreateProductInterface>(
            {
                query: body => ({
                    url: '/products',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Products'],
            },
        ),
        deleteProduct: build.mutation({
            query: id => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products'],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProductsQuery,
    useDeleteProductMutation,
    useGetProductByIdQuery,
    useUpdateProductMutation,
    useCreateProductMutation,
} = productsApi;
