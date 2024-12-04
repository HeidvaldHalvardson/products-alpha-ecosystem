import React, { Suspense } from 'react';

import { Header } from '@/components/Header/Header';
import { AppRouter } from '@/providers/router/AppRouter';

import './styles/index.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
