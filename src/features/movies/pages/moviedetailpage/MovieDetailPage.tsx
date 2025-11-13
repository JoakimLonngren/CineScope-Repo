import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useFavoritesStore } from "../../../../store/useFavoritesStore";
import GlobalButton from "../../../../components/common/button/GlobalButton";
import styles from "./MovieDetailPage.module.scss";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w342";

export const MovieDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: movie,
        isLoading,
        isError,
    } = useMovieDetails(id);

    const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
    const isFavorite = useFavoritesStore((s) => 
    movie ? s.isFavorite(movie.id) : false
    );

    if(isLoading) {
        return <p className={styles.message}>Loading movie details...</p>;
    }

    if(isError || !movie) {
        return <p className={styles.message}>Something went wrong when trying to get the details for this movie.</p>
    }

    return (
        <article className={styles.container}>
            {movie.backdropPath && (
                <div className={styles.backdropWrapper}>
                    <img
                        src={`${BACKDROP_BASE_URL}${movie.backdropPath}`}
                        alt={movie.title}
                        className={styles.backdrop}
                    />
                </div>
            )}

            <div className={styles.content}>            
                <div className={styles.details}>
                    {movie.posterPath && (
                        <img
                            src={`${POSTER_BASE_URL}${movie.posterPath}`}
                            alt={movie.title}
                            className={styles.poster}
                        />
                    )}
                    {/* <GlobalButton
                        type="button"
                        className={styles.favoriteButton}
                        onClick={() => toggleFavorite(movie)}
                        label={isFavorite ? "Remove favorite" : "Add favorite"}
                    /> */}
                    
                </div>

                <div className={styles.text}>
                    <h1 className={styles.title}>{movie.title}</h1>

                    <p className={styles.releaseDate}>{movie.releaseDate?.slice(0,4) ?? "Unknown year"}</p>
                    <p className={styles.rating}>⭐ {movie.voteAverage.toFixed(1)} / 10</p>
                    
                    <p className={styles.overview}>{movie.overview}</p>

                    <GlobalButton
                        type="button"
                        className={styles.favoriteButton}
                        onClick={() => toggleFavorite(movie)}
                        label={isFavorite ? "Remove favorite" : "Add favorite"}
                    />
                </div>
            </div>
        </article>
    );
};

