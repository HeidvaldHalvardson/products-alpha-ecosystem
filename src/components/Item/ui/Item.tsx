import { useState } from 'react';

import { CloseOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import type { ProductInterface } from '@/services/types';

import styles from './Item.module.scss';

interface ItemProps {
    className?: string;
    isFavorite?: boolean;
    onFavoriteHandler?: () => void;
    onDeleteHandler?: () => void;
    data: ProductInterface;
}

export const Item = (props: ItemProps) => {
    const {
        className = '',
        data,
        isFavorite = false,
        onFavoriteHandler = () => {},
        onDeleteHandler = () => {},
    } = props;

    const [favorite, setFavorite] = useState(isFavorite);
    const navigate = useNavigate();

    const onFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFavorite(!favorite);
        onFavoriteHandler();
    };

    const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDeleteHandler();
    };

    const onCardClick = () => {
        navigate(`/products/${data.id}`);
    };

    const desc =
        data.description.length <= 200
            ? data.description
            : data.description.slice(0, 200) + '\u2026';

    return (
        <li className={`${styles.Item} ${className}`} onClick={onCardClick}>
            <img
                src={
                    data.category.image
                        ? data.category.image
                        : 'https://metallps.ru/assets/cache_image/empty_720x540_e0a.png'
                }
                width={100}
                height={100}
                alt="Изображение товара."
            />
            <div className={styles.desc}>
                <div className={styles.header}>
                    <h3>{data.title}</h3>
                    <div>{data.price} ₽</div>
                </div>
                <p>{desc}</p>
            </div>
            <div className={styles.controls}>
                <button onClick={e => onDeleteClick(e)}>
                    <CloseOutlined />
                </button>
                <button onClick={e => onFavoriteClick(e)}>
                    {favorite ? <HeartFilled /> : <HeartOutlined />}
                </button>
            </div>
        </li>
    );
};
