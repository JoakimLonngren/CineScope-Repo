import type { TmdbTVShow } from "../../api/tmdbClient";

//Interface for my own TVShow schematic.
export interface TVShow {
    id: number;
    name: string;
    originalName: string;
    overview: string;
    posterPath: string | null;
    backdropPath: string | null;
    firstAirDate: string | null;
    voteAverage: number;
}

//Maps from TmdbTVShow to TVShow.
export const mapFromTmdbTV = (t: TmdbTVShow): TVShow => ({
    id: t.id,
    name: t.name,
    originalName: t.original_name,
    overview: t.overview,
    posterPath: t.poster_path,
    backdropPath: t.backdrop_path,
    firstAirDate: t.first_air_date,
    voteAverage: t.vote_average,
});