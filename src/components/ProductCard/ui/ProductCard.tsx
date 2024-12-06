import { EditOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppLink } from '@/components/AppLink';
import { PageTitle } from '@/components/PageTitle';
import { AppRoutes, RoutePath } from '@/providers/router/routeConfig';
import type { ProductInterface } from '@/services/types';
import { formattedDate } from '@/utils/formattedDate';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: ProductInterface;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const date = formattedDate(product.creationAt);
    const navigate = useNavigate();
    const location = useLocation();

    const handleEditClick = () => {
        navigate(`/products/update/${product.id}`, {
            state: { from: location.pathname },
        });
    };

    return (
        <>
            <AppLink to={RoutePath[AppRoutes.MAIN]}>Back to main page</AppLink>
            <div className={styles.header}>
                <PageTitle>{product.title}</PageTitle>
                <button onClick={handleEditClick}>
                    <EditOutlined />
                </button>
            </div>
            <div className={styles.inner}>
                <img
                    src={
                        product.category.image
                            ? product.category.image
                            : 'https://metallps.ru/assets/cache_image/empty_720x540_e0a.png'
                    }
                    width={300}
                    height={300}
                    alt="Основное  изображение товара."
                />
                <div>
                    <p className={styles.price}>Price: {product.price} ₽</p>
                    <p className={styles.date}>Product added: {date}</p>
                    {product.description && (
                        <p>
                            <span>Description:</span>
                            {product.description}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <div>More images:</div>
                {product.images.length &&
                    product.images.map(src => (
                        <img
                            key={src}
                            src={src}
                            width={100}
                            height={100}
                            alt="."
                        />
                    ))}
            </div>
        </>
    );
};
