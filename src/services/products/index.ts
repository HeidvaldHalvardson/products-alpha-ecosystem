import {
    useGetProductsQuery as getProducts,
    useDeleteProductMutation as deleteProductById,
    useGetProductByIdQuery as getProductById,
    useUpdateProductMutation as updateProductById,
    useCreateProductMutation as createProduct,
    productsApi,
    ITEMS_PER_PAGE,
} from './products';

export {
    getProducts,
    deleteProductById,
    productsApi,
    getProductById,
    updateProductById,
    createProduct,
    ITEMS_PER_PAGE,
};
