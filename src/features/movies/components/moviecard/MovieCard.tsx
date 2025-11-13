import { Link } from "react-router-dom";
import type { Movie } from "../../types";
import { useFavoritesStore } from "../../../../store/useFavoritesStore";
import styles from "./Moviecard.module.scss";
import GlobalButton from "../../../../components/common/button/GlobalButton";

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w342";

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const isFavorite = useFavoritesStore((state) => 
        state.isFavorite(movie.id)
    );

    return(
        <article className={styles.card}>
            <Link to={`/movie/${movie.id}`} className={styles.imageWrapper}>
                {movie.posterPath ? (
                    <img
                        src={`${POSTER_BASE_URL}${movie.posterPath}`}
                        alt={movie.title}
                        className={styles.image}
                        loading="lazy" 
                    />
                ) : (
                    <div className={styles.noImage}>No Image</div>
                )}
            </Link>

            <div className={styles.content}>
                <header className={styles.header}>
                    <h2 className={styles.title}> {movie.title} </h2>
                    <span className={styles.releaseDate}>
                        {movie.releaseDate?.slice(0, 4) ?? "Year unknown"}
                    </span>
                </header>

                <p className={styles.rating}>⭐ {movie.voteAverage.toFixed(1)} / 10</p>

                <p className={styles.overview}>
                    {movie.overview || "No description available."}
                </p>

                <GlobalButton
                    type="button"
                    onClick={() => toggleFavorite(movie)}
                    label={isFavorite ? "Remove favorite" : "Add favorite"}
                />
            </div>
        </article>
    );
};

