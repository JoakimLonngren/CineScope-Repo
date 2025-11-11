import { useQuery } from "@tanstack/react-query";
import { tmdbClient, type TmdbMovie } from "../../../api/tmdbClient";
import { mapFromTmdb, type Movie } from "../types";

const fetchMovieDetails = async (id: string): Promise<Movie> => {
    const response = await tmdbClient.get<TmdbMovie>(`/movie/${id}`);
    return mapFromTmdb(response.data);
};

export const useMovieDetails = (id?: string) => 
    useQuery({
        queryKey: ["movie-details", id],
        queryFn: () => fetchMovieDetails(id!),
        enabled: !!id,
    });