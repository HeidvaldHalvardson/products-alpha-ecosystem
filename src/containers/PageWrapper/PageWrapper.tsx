import type { ReactNode } from 'react';

import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
    children?: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return <div className={styles.PageWrapper}>{children}</div>;
};
