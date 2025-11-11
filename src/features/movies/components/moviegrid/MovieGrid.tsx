import styles from "./Moviegrid.module.scss";
import type { Movie } from "../../types";
import { MovieCard } from "../moviecard/MovieCard";

interface MovieGridProps {
    movies: Movie[];
    isLoading?: boolean;
}

export const MovieGrid = ({ movies, isLoading }: MovieGridProps) => {
    if(isLoading) {
        return <p className={styles.message}>Loading movies...</p>
    }

    if(!movies.length) {
        return <p className={styles.message}>No movies found.</p>
    }

    const sortedMovies = [...movies].sort((a, b) => {
        if(a.posterPath && !b.posterPath) return -1;
        if(!a.posterPath && b.posterPath) return 1;
        return 0;
    });

    return (
        <section className={styles.grid} aria-label="Movies">
            {sortedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    );
};