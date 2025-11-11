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

    return (
        <section className={styles.grid} aria-label="Movies">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    );
};