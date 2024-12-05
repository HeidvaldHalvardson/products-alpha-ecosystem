import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { CategoriesInterface } from '@/services/types';

const baseUrl = 'https://api.escuelajs.co/api/v1/';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: build => ({
        getCategories: build.query<CategoriesInterface[], void>({
            query: () => ({
                url: '/categories',
            }),
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;
