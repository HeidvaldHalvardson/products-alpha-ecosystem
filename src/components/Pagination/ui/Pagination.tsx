import React from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import styles from './Pagination.module.scss';

interface PaginationProps {
    className?: string;
    prevPage?: () => void;
    nextPage?: () => void;
    current?: number;
    hasMore?: boolean;
}

export const Pagination = (props: PaginationProps) => {
    const {
        className = '',
        prevPage = () => {},
        nextPage = () => {},
        current = 1,
        hasMore = true,
    } = props;

    return (
        <div className={`${styles.Pagination} ${className}`}>
            Page
            <button onClick={prevPage} disabled={current === 1}>
                <LeftOutlined />
            </button>
            <p>{current}</p>
            <button onClick={nextPage} disabled={!hasMore}>
                <RightOutlined />
            </button>
        </div>
    );
};
