import { useParams } from "react-router-dom";
import { useTVDetails } from "../../hooks/useTVDetails";
import { MediaDetailLayout } from "../../../../components/media/mediadetaillayout/MediaDetailLayout";
import styles from "./TVDetailsPage.module.scss"

export const TVDetailPage = () => {
    const { id } = useParams<{id: string}>();

    const {
        data: tvshow,
        isLoading,
        isError,
    } = useTVDetails(id);

    if(isLoading){
        return <p className={styles.message}>Loading TVshow details...</p>;
    }

    if(isError || !tvshow) {
        return <p className={styles.message}>Something went wrong when trying to get the details for this TVshow.</p>
    }

    return (
        <MediaDetailLayout
            title={tvshow.name}
            releaseYear={tvshow.firstAirDate}
            rating={tvshow.voteAverage}
            overview={tvshow.overview}
            backdropPath={tvshow.backdropPath}
            posterPath={tvshow.posterPath}
        />
    );
};