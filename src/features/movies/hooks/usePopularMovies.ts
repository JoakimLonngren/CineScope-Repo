import { useQuery } from "@tanstack/react-query";
import { tmdbClient, type TmdbMovieListResponse } from "../../../api/tmdbClient";
import { mapFromTmdb, type Movie } from "../types";

const fetchPopularMovies = async (): Promise<Movie[]> => {
    const response = await tmdbClient.get<TmdbMovieListResponse>("/movie/popular");
    return response.data.results.map(mapFromTmdb);
};

export const usePopularMovies = () => 
    useQuery({
        queryKey: ["popular-movies"],
        queryFn: fetchPopularMovies,
    });