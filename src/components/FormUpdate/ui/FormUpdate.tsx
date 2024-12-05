import { useEffect } from 'react';

import { message } from 'antd';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { PageTitle } from '@/components/PageTitle';
import { getProductById, updateProductById } from '@/services/products';
import type { ProductInterface } from '@/services/types';

import styles from './FormUpdate.module.scss';

export const FormUpdate = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const { data: product, isLoading, error } = getProductById(+id);
    const [updateProduct, { isLoading: isUpdating }] = updateProductById();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ProductInterface>();

    useEffect(() => {
        if (product) {
            setValue('title', product.title);
            setValue('price', product.price);
            setValue('description', product.description);
        }
    }, [product, setValue]);

    const onSubmit = async (data: ProductInterface) => {
        try {
            await updateProduct({ id: Number(id), body: data }).unwrap();
            messageApi.open({
                type: 'success',
                content: 'Update success',
            });
            navigate(location.state?.from || '/products');
        } catch (e) {
            messageApi.open({
                type: 'error',
                content: e.data.error,
            });
            console.error('Error updating product', e);
        }
    };

    const onCancel = () => {
        navigate(location.state?.from || '/products');
    };

    if (isLoading) return <Loader />;
    if (!isLoading && error)
        return <p>Произошла ошибка, пожалуйста обновите страницу</p>;

    return (
        <>
            {contextHolder}
            <PageTitle>Update product {product.title}</PageTitle>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                    <label>Title</label>
                    <input
                        type="text"
                        {...register('title', {
                            required: 'Title is required',
                            minLength: {
                                value: 3,
                                message:
                                    'Title must be at least 3 characters long',
                            },
                        })}
                    />
                    {errors.title && (
                        <p className={styles.error}>{errors.title.message}</p>
                    )}
                </div>

                <div className={styles.field}>
                    <label>Price</label>
                    <input
                        type="number"
                        {...register('price', {
                            required: 'Price is required',
                            validate: {
                                notZero: value =>
                                    !(+value === 0) ||
                                    'Price must be greater than 0',
                            },
                        })}
                    />
                    {errors.price && (
                        <p className={styles.error}>{errors.price.message}</p>
                    )}
                </div>

                <div className={styles.field}>
                    <label>Description</label>
                    <textarea {...register('description')} />
                </div>

                <div className={styles.controls}>
                    <button type="submit" disabled={isUpdating}>
                        {isUpdating ? 'Updating' : 'Update'}
                    </button>
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};
