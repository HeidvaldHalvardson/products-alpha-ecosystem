import { AppLink } from '@/components/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/providers/router/routeConfig';

import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className = '' } = props;

    return (
        <div className={`${styles.Header} ${className}`}>
            <div className={styles.inner}>
                <h1>
                    <AppLink
                        className={styles.link}
                        to={RoutePath[AppRoutes.MAIN]}
                    >
                        Store
                    </AppLink>
                </h1>
            </div>
        </div>
    );
};
