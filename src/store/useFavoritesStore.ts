import { create } from "zustand";
import type { Movie } from "../features/movies/types";

interface FavoritesState {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
    isFavorite: (id: number) => boolean;
}

const STORAGE_KEY = "avaLonn-cinescope-favorites";

const loadInitialState = (): Movie[] => {
    if (typeof window === "undefined") return [];
    try {
        const raw = window.localStorage.getItem("STORAGE_KEY");
        return raw ? (JSON.parse(raw) as Movie[]) : [];
    } catch {
        return [];
    }
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favorites: loadInitialState(),

    toggleFavorite: (movie) => {
        const { favorites } = get();
        const exists = favorites.some((f) => f.id === movie.id);

        const updated = exists
            ? favorites.filter((f) => f.id !== movie.id)
            : [...favorites, movie];

        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {
            return;
        }
        set({favorites: updated });
    },
    isFavorite: (id) => get().favorites.some((f) => f.id === id),
}));