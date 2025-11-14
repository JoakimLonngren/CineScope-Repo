import { useQuery } from "@tanstack/react-query";
import { getTVDetails } from "../api/tvApi";
import type { TVShow } from "../types";

export const useTVDetails = (id?: string) => {
    return useQuery<TVShow>({
        queryKey: ["tv-details", id],
        queryFn: () => getTVDetails(id!),
        enabled: !!id,
    });
};