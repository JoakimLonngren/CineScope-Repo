import styles from "./TVGrid.module.scss";
import type { TVShow } from "../../types";
import { TVCard } from "../tvcard/TVCard";

interface TVGridProps {
    tvshows: TVShow[];
    isLoading: boolean;
}

export const TVGrid = ({tvshows, isLoading}: TVGridProps) => {
    if(isLoading){
        return <p className={styles.message}>Loading tvshows...</p>
    }

    if(!tvshows.length) {
        return <p className={styles.message}>No tvshows found.</p>
    }

    const sortedTVShows = [...tvshows].sort((a, b) => {
        if(a.posterPath && !b.posterPath) return -1;
        if(!a.posterPath && b.posterPath) return 1;
        return 0;
    });

    return(
        <section className={styles.grid} aria-label="TVshows">
            {sortedTVShows.map((tvshow) => (
                <TVCard key={tvshow.id} tvshow={tvshow} />
            ))}
        </section>
    );
};