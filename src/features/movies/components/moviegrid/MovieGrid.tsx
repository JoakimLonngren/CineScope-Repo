import type { Movie } from "../../types";
import { MovieCard } from "../moviecard/MovieCard";
import { MediaGridLayout } from "../../../../components/media/mediagridlayout/MediaGridLayout";

interface MovieGridProps {
    movies: Movie[];
    isLoading?: boolean;
}

export const MovieGrid = ({ movies, isLoading }: MovieGridProps) => {
    return (
        <MediaGridLayout
            items={movies}
            isLoading={isLoading}
            ariaLabel="Movies"
            loadingMessage="Loading movies..."
            emptyMessage="No movies found."
            getHasPoster={(movie) => Boolean(movie.posterPath)}
            renderItem={(movie) => <MovieCard key={movie.id} movie={movie} />} 
        />
    );
};