export interface ProductInterface {
    id: number;
    title: string;
    creationAt: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
    };
    images: string[];
}

export interface CreateProductInterface {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

export interface CategoriesInterface {
    id: number;
    name: string;
}
