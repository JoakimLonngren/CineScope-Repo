import { useQuery } from "@tanstack/react-query";
import { searchTV } from "../api/tvApi";

export const useSearchTV = (query: string) =>
    useQuery({
        queryKey: ["search-tv", query],
        queryFn: () => searchTV(query),
        enabled: !!query.trim(),
    });