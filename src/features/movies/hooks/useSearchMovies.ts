import { useQuery } from "@tanstack/react-query";
import { tmdbClient, type TmdbMovieListResponse } from "../../../api/tmdbClient";
import { mapFromTmdb, type Movie } from "../types";

const searchMovies = async (query: string): Promise<Movie[]> => {
    if(!query.trim()) return [];
    const response = await tmdbClient.get<TmdbMovieListResponse>("/search/movie", {
        params: { query }
    });
    return response.data.results.map(mapFromTmdb);
}; 

export const useSearchMovies = (query: string) => 
    useQuery({
        queryKey: ["search-movies", query],
        queryFn: () => searchMovies(query),
        enabled: !!query.trim(),
    });