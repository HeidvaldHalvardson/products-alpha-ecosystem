import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/components/PageLoader';
import { PageWrapper } from '@/containers';

import { routeConfig } from './routeConfig';

export const AppRouter = () => (
    <PageWrapper>
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    </PageWrapper>
);
