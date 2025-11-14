import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";

const apiKey = import.meta.env.VITE_TMDB_API_KEY as string | undefined;

if(!apiKey) {
    console.warn("VITE_TMDB_API_KEY is missing. Make sure it is added or read correctly from the .env-file.")
}

export const tmdbClient = axios.create({
    baseURL: API_BASE_URL,
    params: {
        api_key: apiKey,
        language: "en-US",
    },
});

//Related to movies
export interface TmdbMovie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string | null;
    vote_average: number;
}

export interface TmdbMovieListResponse {
    page: number;
    results: TmdbMovie[];
    total_pages: number;
    total_results: number;
}

//Related to TV-shows
export interface TmdbTVShow {
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    first_air_date: string | null;
    vote_average: number;
}

export interface TmdbTVListResponse {
    page: number;
    results: TmdbTVShow[];
    total_pages: number;
    total_results: number;
}