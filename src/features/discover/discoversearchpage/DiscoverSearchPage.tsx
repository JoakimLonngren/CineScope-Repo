import styles from "./DiscoverSearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSearchMovies } from "../../movies/hooks/useSearchMovies";
import { useSearchTVShows } from "../../tv/hooks/useSearchTV";
import { MovieGrid } from "../../movies/components/moviegrid/MovieGrid";
import { TVGrid } from "../../tv/components/tvgrid/TVGrid";
import { MediaSearchResult } from "../../../components/media/mediasearchresult/MediaSearchResult";

export const DiscoverSearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    const {
        data: movies = [],
        isLoading: isLoadingMovies,
        isError: isErrorMovies,
    } = useSearchMovies(query);

    const {
        data: tvShows = [],
        isLoading: isLoadingTvShows,
        isError: isErrorTvShows,
    } = useSearchTVShows(query);

    const isAnyError = isErrorMovies || isErrorTvShows;
    const isAnyLoading = isLoadingMovies || isLoadingTvShows;
    const hasMovies = movies.length > 0;
    const hasTvShows = tvShows.length > 0;
    const hasAnyResults = hasMovies || hasTvShows; 

    return (
        <section className={styles.container}> 
            <header className={styles.header}>
                <h1 className={styles.title}>Search results</h1>
                {query && (
                    <p className={styles.subtitle}>
                        Showing results for: <strong className={styles.searchQuery}>{query}</strong>
                    </p>
                )}
            </header>

            {isAnyError && (
                <p className={styles.message}>
                    Couln't load search results. Please try again.
                </p>
            )}

            {isAnyLoading && !hasAnyResults && (
                <p className={styles.message}>Loading...</p>
            )}

            {!isAnyLoading && !hasAnyResults && query && (
                <p className={styles.message}>
                    No results found for <strong>{query}</strong>
                </p>
            )} 

            <div className={styles.resultsWrapper}>
                <MediaSearchResult
                    title="Movies"
                    isLoading={isLoadingMovies}
                    itemsCount={movies.length}
                >
                    <MovieGrid movies={movies} isLoading={isLoadingMovies}/>
                </MediaSearchResult>

                <MediaSearchResult
                    title="TV Shows"
                    isLoading={isLoadingTvShows}
                    itemsCount={tvShows.length}    
                >
                    <TVGrid tvshows={tvShows} isLoading={isLoadingTvShows} />
                </MediaSearchResult>
                
            </div>  
                
        </section>
    );
}