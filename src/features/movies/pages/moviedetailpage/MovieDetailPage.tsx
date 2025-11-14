import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useMovieCast } from "../../hooks/useMovieCast";
import { useFavoritesStore } from "../../../../store/useFavoritesStore";
import { MediaDetailLayout } from "../../../../components/media/mediadetaillayout/MediaDetailLayout";
import styles from "./MovieDetailPage.module.scss";
import { MediaCastLayout } from "../../../../components/media/mediacastlayout/MediaCastLayout";

export const MovieDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: movie,
        isLoading,
        isError,
    } = useMovieDetails(id);

    const {
        data: cast,
        isLoading: isCastLoading,
        isError: isCastError,
    } = useMovieCast(id);

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

    if(isCastLoading)
        <p className={styles.message}>Loading cast...</p>                
    
    if(isCastError && !isCastLoading)
        <p className={styles.message}>Could not load cast information.</p>

    return (
        <>
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
            <MediaCastLayout
                cast={cast}
                isLoading={isCastLoading}
                isError={isCastError}
            />
        </>
    );
};

