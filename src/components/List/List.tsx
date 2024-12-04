import { Item } from '@/components/Item';
import type { ProductInterface } from '@/services/types';

import styles from './List.module.scss';

interface ListProps {
    className?: string;
    list?: ProductInterface[];
    favorites?: ProductInterface[];
    onDelete?: (id: number) => void;
    addFavorite?: (product: ProductInterface) => void;
    removeFavorite?: (id: number) => void;
}

export const List = (props: ListProps) => {
    const {
        className = '',
        list = [],
        favorites = [],
        onDelete = id => {},
        addFavorite = product => {},
        removeFavorite = id => {},
    } = props;

    const onDeleteHandler = (id: number) => {
        onDelete(id);
        removeFavorite(id);
    };

    const isFavorite = (id: number) => {
        return favorites.some(favorite => favorite.id === id);
    };

    return (
        <ul className={`${styles.List} ${className}`}>
            {list.map(item => (
                <Item
                    key={item.id}
                    data={item}
                    isFavorite={isFavorite(item.id)}
                    onDeleteHandler={() => onDeleteHandler(item.id)}
                    onFavoriteHandler={
                        isFavorite(item.id)
                            ? () => removeFavorite(item.id)
                            : () => addFavorite(item)
                    }
                />
            ))}
        </ul>
    );
};
