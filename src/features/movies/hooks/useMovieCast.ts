import { useQuery } from "@tanstack/react-query";
import { getMovieCast } from "../api/movieApi";

export const useMovieCast = (id?: string) => 
    useQuery({
        queryKey: ["movie-cast", id],
        queryFn: () => getMovieCast(id!),
        enabled: !!id,
    });