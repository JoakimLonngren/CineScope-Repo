import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useFavoritesStore } from "../../../../store/useFavoritesStore";
import { MediaDetailLayout } from "../../../../components/media/mediadetaillayout/MediaDetailLayout";
import styles from "./MovieDetailPage.module.scss";

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
        <MediaDetailLayout
            title={movie.title}
            releaseYear={movie.releaseDate}
            rating={movie.voteAverage}
            overview={movie.overview}
            backdropPath={movie.backdropPath}
            posterPath={movie.posterPath}
            isFavorite={isFavorite}
            onToggleFavorite={() => toggleFavorite(movie)}
        />
    );
};

