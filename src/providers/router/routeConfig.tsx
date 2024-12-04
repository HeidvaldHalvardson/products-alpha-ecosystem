import type { RouteProps } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProductsPage } from '@/pages/ProductsPage';

export enum AppRoutes {
    MAIN = 'main',
    PRODUCTS = 'products',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PRODUCTS]: '/products',
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
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
