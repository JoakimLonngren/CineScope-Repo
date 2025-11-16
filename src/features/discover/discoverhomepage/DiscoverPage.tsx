import styles from "./Discover.module.scss";
import { TVShowsHomePage } from "../../tv/pages/tvshowshomepage/TVShowsHomePage";
import { MovieHomePage } from "../../movies/pages/moviehomepage/MovieHomePage";

export const DiscoverPage = () => {
    return(
        <div className={styles.container}>
            <MovieHomePage/>
            <TVShowsHomePage/>
        </div>
    )
}