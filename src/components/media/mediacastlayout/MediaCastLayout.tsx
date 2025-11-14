import styles from "./MediaCastLayout.module.scss";
import type { CastMember } from "../../../features/movies/types";
import { CAST_POSTER_URL } from "../../../constants/images";

interface MediaCastLayoutProps {
    cast?: CastMember[];
    isLoading: boolean;
    isError: boolean;
}

export const MediaCastLayout = ({
    cast,
    isLoading,
    isError,
}: MediaCastLayoutProps) => {

    const sortedCast = 
        cast && cast.length > 0
            ? [...cast].sort((a, b) => {
                const hasImageA = a.profilePath ? 1 : 0;
                const hasImageB = b.profilePath ? 1 : 0;
                return hasImageB - hasImageA;
            }) : [];

    return(
        <div className={styles.container}>
            <h2 className={styles.castTitle}>Cast</h2>

            {!isLoading && !isError && cast && cast.length > 0 && (
                <ul className={styles.castGrid}>
                    {sortedCast.slice(0, 10).map((member) => (
                        <li key={member.id} className={styles.castCard}>
                            {member.profilePath ? (
                                <img
                                    src={`${CAST_POSTER_URL}${member.profilePath}`}
                                    alt={member.name}
                                    className={styles.castImage}
                                />
                            ) : (
                                <div className={styles.noImage}>No Image</div>
                            )}
                            <div>
                                <p className={styles.actorName}>{member.name}</p>
                                <p className={styles.characterName}>{member.character}</p>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}

            {!isLoading && !isError && (!cast || cast.length === 0) && (
                <p className={styles.message}>No cast information available.</p>
            )}
        </div>
    )
}