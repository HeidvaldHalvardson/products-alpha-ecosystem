import React from 'react';

import { Loader } from '@/components/Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className = '' } = props;

    return (
        <div className={`${styles.PageLoader} ${className}`}>
            <Loader />
        </div>
    );
};
