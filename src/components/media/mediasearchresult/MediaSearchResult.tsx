import styles from "./MediaSearchResult.module.scss";
import type { ReactNode } from "react";

interface MediaSearchResultProps {
    title: string;
    isLoading: boolean;
    itemsCount: number;
    children: ReactNode;
}

export const MediaSearchResult = ({
    title,
    isLoading,
    itemsCount,
    children,
}: MediaSearchResultProps) => {

    if(!isLoading && itemsCount === 0)
        return null;

    return(
        <section className={styles.container}>
            <h2 className={styles.title}></h2>

            {isLoading && itemsCount === 0 ? (
                <p className={styles.loading}>Loading {title.toLowerCase()}...</p>
            ) : (
                children
            )}
        </section>
    );
};