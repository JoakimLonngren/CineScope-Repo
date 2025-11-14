import { tmdbClient, type TmdbTVListResponse, type TmdbTVShow } from "../../../api/tmdbClient";
import { mapFromTmdbTV, type TVShow } from "../types";

//Gets the details about a specific TV-show.
export async function getTVDetails(id: string): Promise<TVShow> {
    const response = await tmdbClient.get<TmdbTVShow>(`/tv/${id}`);
    return mapFromTmdbTV(response.data);
}

//Returns popular TV shows.
export async function getPopularTV(): Promise<TVShow[]> {
    const response = await tmdbClient.get<TmdbTVListResponse>("/tv/popular");
    return response.data.results.map(mapFromTmdbTV);
}

//Search for a TV show.
export async function searchTV(query: string): Promise<TVShow[]> {
    if(!query.trim()) return [];
    const response = await tmdbClient.get<TmdbTVListResponse>("/search/tv", {
        params: { query }
    });
    
    return response.data.results.map(mapFromTmdbTV);
}