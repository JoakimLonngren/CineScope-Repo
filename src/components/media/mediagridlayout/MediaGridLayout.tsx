import styles from "./MediaGridLayout.module.scss";
import type { ReactNode } from "react";

interface MediaGridLayoutProps<T> {
    items: T[];
    isLoading?: boolean;
    ariaLabel: string;
    loadingMessage?: string;
    emptyMessage?: string;
    renderItem: (item:T) => ReactNode;
    getHasPoster: (item:T) => boolean;
}

export const MediaGridLayout = <T,>({
    items,
    isLoading,
    ariaLabel,
    loadingMessage = "",
    emptyMessage = "No content found.",
    renderItem,
    getHasPoster,
}: MediaGridLayoutProps<T>) => {

    if(isLoading) {
        return <p className={styles.message}>{loadingMessage}</p>
    }

    if(!items.length) {
        return <p className={styles.message}>{emptyMessage}</p>
    }

    const sortedItems = [...items].sort((a, b) => {
        const aHasPoster = getHasPoster(a);
        const bHasPoster = getHasPoster(b);

        if(aHasPoster && !bHasPoster) return -1;
        if(!aHasPoster && bHasPoster) return 1;
        return 0;
    });

    return (
        <section className={styles.grid} aria-label={ariaLabel}>
            {sortedItems.map((item) => renderItem(item))}
        </section>
    )

}