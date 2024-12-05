import { Checkbox } from 'antd';

import styles from './PageFilters.module.scss';

interface PageFiltersProps {
    className?: string;
    favoritesOnChange: () => void;
}

export const PageFilters = (props: PageFiltersProps) => {
    const { className = '', favoritesOnChange } = props;

    return (
        <div className={`${styles.PageFilters} ${className}`}>
            <Checkbox onChange={favoritesOnChange}>Show favorites</Checkbox>
        </div>
    );
};
