import { FormCreate } from '@/components/FormCreate';
import { FormUpdate } from '@/components/FormUpdate';
import { PageWrapperWithBack } from '@/containers';
import { ProductFormType } from '@/pages/ProductFormPage';

interface ProductFormPageProps {
    mode: ProductFormType;
}

const ProductFormPage = ({ mode }: ProductFormPageProps) => {
    return (
        <PageWrapperWithBack>
            {mode === ProductFormType.UPDATE ? <FormUpdate /> : <FormCreate />}
        </PageWrapperWithBack>
    );
};

export default ProductFormPage;
