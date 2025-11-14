import { 
    tmdbClient, 
    type TmdbMovie, 
    type TmdbMovieListResponse,
    type TmdbCreditsResponse, 
}   from "../../../api/tmdbClient";
import { 
    mapFromTmdb,
    mapCastFromTmdb, 
    type Movie,
    type CastMember,
}   from "../types";

//returns a movie based on id.
export async function getMovieDetails(id: string): Promise<Movie> {
    const response = await tmdbClient.get<TmdbMovie>(`/movie/${id}`);
    return mapFromTmdb(response.data);
};

//returns current popular movies.
export async function getPopularMovies(): Promise<Movie[]>{
    const response = await tmdbClient.get<TmdbMovieListResponse>("/movie/popular");
    return response.data.results.map(mapFromTmdb);
};

//Search for a movie based 
export async function searchMovies(query: string): Promise<Movie[]>{
    if(!query.trim()) return [];
    const response = await tmdbClient.get<TmdbMovieListResponse>("/search/movie", {
        params: { query }
    });
    return response.data.results.map(mapFromTmdb);
};

export async function getMovieCast(id: string): Promise<CastMember[]> {
    const response = await tmdbClient.get<TmdbCreditsResponse>(
        `/movie/${id}/credits`
    );
    return response.data.cast.map(mapCastFromTmdb);
} 