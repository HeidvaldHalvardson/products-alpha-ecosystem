import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ProductInterface } from '@/services/types';

const baseUrl = 'https://api.escuelajs.co/api/v1/';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Products'],
    // endpoints: builder => ({
    //     getProducts: builder.query<
    //         ProductInterface[],
    //         { offset: number; limit: number }
    //     >({
    //         query: ({ offset, limit }) => {}
    //             `products?offset=${offset}&limit=${limit}`,
    //     }),
    //     providesTags: result => ['Products'],
    // }),
    endpoints: build => ({
        getProducts: build.query<
            ProductInterface[],
            { offset: number; limit: number }
        >({
            query: ({ offset = 0, limit = 10 }) => ({
                url: '/products',
                params: {
                    offset,
                    limit,
                },
            }),
            providesTags: result => ['Products'],
        }),
        // addUser: build.mutation({
        //     query: user => ({
        //         url: 'users',
        //         method: 'POST',
        //         body: user,
        //     }),
        //     invalidatesTags: ['User'],
        // }),
        // updateUser: build.mutation({
        //     query: user => ({
        //         url: `users/${user.id}`,
        //         method: 'PUT',
        //         body: user,
        //     }),
        //     invalidatesTags: ['User'],
        // }),
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
export const { useGetProductsQuery, useDeleteProductMutation } = productsApi;
