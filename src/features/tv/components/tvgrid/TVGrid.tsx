import type { TVShow } from "../../types";
import { TVCard } from "../tvcard/TVCard";
import { MediaGridLayout } from "../../../../components/media/mediagridlayout/MediaGridLayout";

interface TVGridProps {
    tvshows: TVShow[];
    isLoading?: boolean;
}

export const TVGrid = ({tvshows, isLoading}: TVGridProps) => {
    return (
        <MediaGridLayout
            items={tvshows}
            isLoading={isLoading}
            ariaLabel="TVshows"
            loadingMessage="Loading series..."
            emptyMessage="No series found."
            getHasPoster={(tvshow) => Boolean(tvshow.posterPath)}
            renderItem={(tvshow) => <TVCard key={tvshow.id} tvshow={tvshow} />} 
        />
    );
};