import React from 'react';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className = '' } = props;

    return (
        <div className={`${styles.NotFoundPage} ${className}`}>
            Страница не найдена
        </div>
    );
};
