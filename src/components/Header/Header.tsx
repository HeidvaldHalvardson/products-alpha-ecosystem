import { AppLink } from '@/components/AppLink';
import { AppRoutes, RoutePath } from '@/providers/router/routeConfig';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.inner}>
                <h1>
                    <AppLink
                        className={styles.link}
                        to={RoutePath[AppRoutes.MAIN]}
                    >
                        Store
                    </AppLink>
                </h1>
                <AppLink to={RoutePath[AppRoutes.PRODUCT_CREATE]}>
                    CREATE PRODUCT
                </AppLink>
            </div>
        </div>
    );
};
