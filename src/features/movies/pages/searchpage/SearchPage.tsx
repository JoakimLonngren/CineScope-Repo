import styles from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../../hooks/useSearchMovies";
import { MovieGrid } from "../../components/moviegrid/MovieGrid";

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    const {
        data: movies = [],
        isLoading,
        isError,
    } = useSearchMovies(query);

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Search results</h1>
                {query && (
                    <p className={styles.subtitle}>
                        Showing results for: <strong className={styles.searchQuery}>{query}</strong>
                    </p>
                )}
            </header>

            {/* If error occurs*/}
            {isError && (
                <p className={styles.error}>
                    Couldn't load search results. Please try again.
                </p>
            )}

            <MovieGrid movies={movies} isLoading={isLoading} />
        </section>
    );
};