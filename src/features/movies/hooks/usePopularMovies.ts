import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/movieApi";

export const usePopularMovies = () => 
    useQuery({
        queryKey: ["popular-movies"],
        queryFn: getPopularMovies,
    });