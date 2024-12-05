import type { RouteProps } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProductFormPage, ProductFormType } from '@/pages/ProductFormPage';
import { ProductItemPage } from '@/pages/ProductsItemPage';
import { ProductsPage } from '@/pages/ProductsPage';

export enum AppRoutes {
    MAIN = 'main',
    PRODUCTS = 'products',
    PRODUCT = 'product',
    PRODUCT_UPDATE = 'product_update',
    PRODUCT_CREATE = 'product_create',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PRODUCTS]: '/products',
    [AppRoutes.PRODUCT]: '/products/:id',
    [AppRoutes.PRODUCT_UPDATE]: '/products/update/:id',
    [AppRoutes.PRODUCT_CREATE]: '/products/create',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <Navigate to={RoutePath[AppRoutes.PRODUCTS]} />,
    },
    {
        path: RoutePath[AppRoutes.PRODUCTS],
        element: <ProductsPage />,
    },
    {
        path: RoutePath[AppRoutes.PRODUCT],
        element: <ProductItemPage />,
    },
    {
        path: RoutePath[AppRoutes.PRODUCT_UPDATE],
        element: <ProductFormPage mode={ProductFormType.UPDATE} />,
    },
    {
        path: RoutePath[AppRoutes.PRODUCT_CREATE],
        element: <ProductFormPage mode={ProductFormType.CREATE} />,
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
