import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/movieApi";

export const useSearchMovies = (query: string) => 
    useQuery({
        queryKey: ["search-movies", query],
        queryFn: () => searchMovies(query),
        enabled: !!query.trim(),
    });