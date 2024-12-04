import type { ReactNode } from 'react';

import styles from './PageTitle.module.scss';

interface PageTitleProps {
    className?: string;
    children: ReactNode;
}

export const PageTitle = (props: PageTitleProps) => {
    const { className = '', children } = props;

    return <h2 className={`${styles.PageTitle} ${className}`}>{children}</h2>;
};
