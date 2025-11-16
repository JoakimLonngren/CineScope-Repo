import styles from "./TVShowsHomePage.module.scss";
import { usePopularTV } from "../../hooks/usePopularTV";
import { TVGrid } from "../../components/tvgrid/TVGrid";

export const TVShowsHomePage = () => {
    const {
        data: tvshows = [],
        isLoading,
        isError,
    } = usePopularTV();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Popular TV-shows</h1>
                <p className={styles.subtitle}>
                    Browse TV-shows that people are watching right now.
                </p>
            </header>

            {isError && (
                <p className={styles.error}>
                    Couldn't load TV shows right now. Please try again.
                </p>
            )}

            <TVGrid tvshows={tvshows} isLoading={isLoading}/>
        </div>
    )
}