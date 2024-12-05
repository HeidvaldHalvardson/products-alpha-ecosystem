import type { ReactNode } from 'react';

import styles from './PageWrapperWithBack.module.scss';

interface PageWrapperWithBackProps {
    children?: ReactNode;
}

export const PageWrapperWithBack = ({ children }: PageWrapperWithBackProps) => {
    return <div className={styles.PageWrapperWithBack}>{children}</div>;
};
