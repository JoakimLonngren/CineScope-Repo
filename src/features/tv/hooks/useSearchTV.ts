import { useQuery } from "@tanstack/react-query";
import { searchTVShows } from "../api/tvApi";

export const useSearchTVShows = (query: string) =>
    useQuery({
        queryKey: ["search-tvshows", query],
        queryFn: () => searchTVShows(query),
        enabled: !!query.trim(),
    });