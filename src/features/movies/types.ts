import type { TmdbMovie, TmdbCastMember } from "../../api/tmdbClient";

export interface Movie {
    id: number;
    title: string;
    originalTitle: string;
    overview: string;
    posterPath: string | null;
    backdropPath: string | null;
    releaseDate: string | null;
    voteAverage: number;
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profilePath: string | null;
}

//This will map Tmdb type for movie to the projects internal movie-type.
//This benefits the rest of the application not to be dependent on 
//the exact look or structure of Tmdb. For example if something changes 
//at TMDB we just need to make a adjustment here since my application
//are using our Movie-type.
export const mapFromTmdb = (m: TmdbMovie): Movie => ({
    id: m.id,
    title: m.title,
    originalTitle: m.original_title,
    overview: m.overview,
    posterPath: m.poster_path,
    backdropPath: m.backdrop_path,
    releaseDate: m.release_date,
    voteAverage: m.vote_average,
});

export const mapCastFromTmdb = (c: TmdbCastMember): CastMember => ({
    id: c.id,
    name: c.name,
    character: c.character,
    profilePath: c.profile_path,
});