import PodcastCard from "./PodcastCard";
import styles from "./PodcastGrid.module.css";

/**
 * @component
 * @param {object} props - Component props
 * @param {{id: number, name: string}[]} propr.genre - Array of genre definitions used to resolve genre IDs in each podcast
 * 
 * @returns {JSX.Element} A grid of <PodcastCard> components or a message if no results are found
 */

export default function PodcastGrid({ genres }) {
    const { podcasts } = useContext(PodcastContext);
    if (!podcasts.length) {
        return (
            <p className={styles.noResults}>
                No podcasts match your search or filters.
            </p>
        );
    }
    return (
        <>
            <div className={styles.grid}>
                {podcasts.map((podcast) => (
                    <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
                ))}
            </div>
        </>
    );
}