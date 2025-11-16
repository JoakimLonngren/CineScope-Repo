import styles from "./TVCard.module.scss";
import { Link } from "react-router-dom";
import type { TVShow } from "../../types";
import { POSTER_BASE_URL } from "../../../../constants/images";

interface TVCardProps {
    tvshow: TVShow;
}

export const TVCard = ({ tvshow }: TVCardProps) => {

    return (
        <article className={styles.card}>
            <Link to={`/tv/${tvshow.id}`} className={styles.imageWrapper}>
                {tvshow.posterPath ? (
                    <img
                        src={`${POSTER_BASE_URL}${tvshow.posterPath}`}
                        alt={tvshow.name}
                        className={styles.image}
                        loading="lazy"
                    />
                ) : (
                    <div className={styles.noImage}>No Image</div>
                )}
            </Link>
            
            <div className={styles.content}>
                <header className={styles.header}>
                    <h2 className={styles.title}> {tvshow.name} </h2>
                    <span className={styles.releaseDate}>
                        {tvshow.firstAirDate?.slice(0, 4) ?? "Year unknown"}
                    </span>
                </header>

                <p className={styles.rating}>⭐ {tvshow.voteAverage.toFixed(1)} / 10</p>

                <p className={styles.overview}>
                    {tvshow.overview || "No description available."}
                </p>
                
            </div>
        </article>
    );
};