import type { ReactNode } from 'react';

import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const { className = '', to, children } = props;

    return (
        <Link to={to} className={`${styles.AppLink} ${className}`}>
            {children}
        </Link>
    );
};
