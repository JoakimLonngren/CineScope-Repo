import styles from "./MediaDetailLayout.module.scss";
import GlobalButton from "../../common/button/GlobalButton";
import { BACKDROP_BASE_URL, POSTER_BASE_URL } from "../../../constants/images"; 

interface MediaDetailLayoutProps {
    title: string;
    releaseYear?: string | null;
    rating?: number | null;
    overview: string;
    backdropPath?: string | null;
    posterPath?: string | null;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
}

export const MediaDetailLayout = ({
    title,
    releaseYear,
    rating,
    overview,
    backdropPath,
    posterPath,
    isFavorite,
    onToggleFavorite,
}: MediaDetailLayoutProps) => {
    return(
        <article className={styles.container}>
      {backdropPath && (
        <div className={styles.backdropWrapper}>
          <img
            src={`${BACKDROP_BASE_URL}${backdropPath}`}
            alt={title}
            className={styles.backdrop}
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.details}>
          {posterPath && (
            <img
              src={`${POSTER_BASE_URL}${posterPath}`}
              alt={title}
              className={styles.poster}
            />
          )}
        </div>

        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>

          {releaseYear && (
            <p className={styles.releaseDate}>{releaseYear}</p>
          )}

          {typeof rating === "number" && (
            <p className={styles.rating}>⭐ {rating.toFixed(1)} / 10</p>
          )}

          <p className={styles.overview}>{overview}</p>

          {onToggleFavorite && (
            <GlobalButton
              type="button"
              className={styles.favoriteButton}
              onClick={onToggleFavorite}
              label={isFavorite ? "Remove favorite" : "Add favorite"}
            />
          )}
        </div>
      </div>
    </article>
    )
}