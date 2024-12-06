import { message } from 'antd';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { PageTitle } from '@/components/PageTitle';
import { getCategories } from '@/services/categories';
import { createProduct } from '@/services/products';
import type {
    CategoriesInterface,
    CreateProductInterface,
} from '@/services/types';

import styles from './FormCreate.module.scss';

export interface FormValues extends Omit<CreateProductInterface, 'images'> {
    images: { url: string }[];
}

const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;

export const FormCreate = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        trigger,
    } = useForm<FormValues>({
        defaultValues: {
            images: [{ url: '' }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'images',
    });

    const [createProductFunc, { isLoading }] = createProduct();
    const { data: categories } = getCategories();

    const onSubmit = async (data: FormValues) => {
        const sendData = {
            ...data,
            images: data.images.map(image => image.url),
        };

        try {
            const createdProduct = await createProductFunc(sendData).unwrap();
            messageApi.open({
                type: 'success',
                content: 'Update success',
            });
            navigate(`/products/${createdProduct.id}`);
        } catch (e) {
            messageApi.open({
                type: 'error',
                content: e.data.message,
            });
            console.error('Error updating product', e);
        }
    };

    const onCancel = () => {
        navigate(location.state?.from || '/products');
    };

    const handleAppend = async () => {
        const isValid = await trigger('images');
        if (isValid) {
            append({ url: '' });
        }
    };

    return (
        <>
            {contextHolder}
            <PageTitle>Create product</PageTitle>
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

                <div className={styles.field}>
                    <label>Category</label>
                    <select
                        {...register('categoryId', {
                            required: 'Category is required',
                        })}
                    >
                        <option value="">Select a category</option>
                        {categories?.map((category: CategoriesInterface) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.categoryId && (
                        <p className={styles.error}>
                            {errors.categoryId.message}
                        </p>
                    )}
                </div>

                <div>
                    <label>Images</label>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id}>
                                <input
                                    {...register(
                                        `images.${index}.url` as const,
                                        {
                                            required: 'Image URL is required',
                                            validate: {
                                                url: value =>
                                                    urlPattern.test(value) ||
                                                    'Enter a valid URL',
                                            },
                                        },
                                    )}
                                />
                                {index > 0 && (
                                    <button
                                        className={styles.remove}
                                        type="button"
                                        onClick={() => remove(index)}
                                    >
                                        Remove
                                    </button>
                                )}
                                {errors.images?.[index]?.url && (
                                    <p className={styles.errorImages}>
                                        {errors.images[index].url?.message}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                    <button
                        className={styles.append}
                        type="button"
                        onClick={handleAppend}
                    >
                        Append
                    </button>
                    {errors.images && <p>{errors.images.message}</p>}
                </div>

                <div className={styles.controls}>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Creating' : 'Create'}
                    </button>
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};
