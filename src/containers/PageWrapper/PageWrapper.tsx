import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

export const PageWrapper = (props: PageWrapperProps) => {
    const { className = '', children } = props;

    return (
        <div className={`${styles.PageWrapper} ${className}`}>{children}</div>
    );
};
