import styles from "./MovieHomePage.module.scss"
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { MovieGrid } from "../../components/moviegrid/MovieGrid";

export const MovieHomePage = () => {
    const {
        data: movies = [],
        isLoading,
        isError,
    } = usePopularMovies();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Popular movies</h1>
                <p className={styles.subtitle}>
                    Browse the movies people are watching right now.
                </p>
            </header>

            {isError && (
                <p className={styles.error}>
                    Coulnd't load movies right now. Please try again.
                </p>
            )}
            
            <MovieGrid movies={movies} isLoading={isLoading} />
        </div>
    );
};