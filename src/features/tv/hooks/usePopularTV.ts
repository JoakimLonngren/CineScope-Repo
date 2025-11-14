import { useQuery } from "@tanstack/react-query";
import { getPopularTV } from "../api/tvApi";

export const usePopularTV = () =>
    useQuery({
        queryKey: ["popular-tv"],
        queryFn: getPopularTV,
    }); 