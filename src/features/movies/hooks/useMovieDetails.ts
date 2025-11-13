import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../api/movieApi";

export const useMovieDetails = (id?: string) => 
    useQuery({
        queryKey: ["movie-details", id],
        queryFn: () => getMovieDetails(id!),
        enabled: !!id,
    });