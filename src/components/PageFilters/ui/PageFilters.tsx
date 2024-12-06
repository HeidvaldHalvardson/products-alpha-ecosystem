import { useRef, useState } from 'react';

import { Checkbox, Input, Select } from 'antd';

import { SortOrder } from '@/pages/ProductsPage';

import styles from './PageFilters.module.scss';

interface PageFiltersProps {
    className?: string;
    favoritesOnChange: () => void;
    searchOnChange: (query: string) => void;
    onSortChange: (order: SortOrder) => void;
}

export const PageFilters = (props: PageFiltersProps) => {
    const {
        className = '',
        favoritesOnChange,
        searchOnChange,
        onSortChange,
    } = props;

    const [searchQuery, setSearchQuery] = useState('');
    const timerRef = useRef(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            searchOnChange(value);
        }, 500);
    };

    return (
        <div className={`${styles.PageFilters} ${className}`}>
            <Checkbox onChange={favoritesOnChange}>Show favorites</Checkbox>
            <Input
                className={styles.search}
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products"
            />
            <Select
                className={styles.select}
                defaultValue={SortOrder.DEFAULT}
                onChange={onSortChange}
            >
                <Select.Option value={SortOrder.DEFAULT}>Default</Select.Option>
                <Select.Option value={SortOrder.ASCENDING}>
                    Low to High
                </Select.Option>
                <Select.Option value={SortOrder.DESCENDING}>
                    High to Low
                </Select.Option>
            </Select>
        </div>
    );
};
