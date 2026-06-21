import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import PodcastCard from "./PodcastCard";
import styles from "./PodcastGrid.module.css";

/**
 * PodcastGrid component that displays a collection of podcast cards.
 * Consumes the list of filtered podcasts from {@link PodcastContext} and renders them in a responsive layout.
 * Displays a fallback message if no podcasts are available.
 *
 * @component
 * @param {object} props - The component props.
 * @param {object[]} props.genres - Array of genre objects for matching genre IDs to metadata.
 * @param {number} props.genres[].id - The unique identifier for the genre.
 * @param {string} props.genres[].name - The human-readable name of the genre.
 * @returns {JSX.Element} A grid layout populated with {@link PodcastCard} elements, or a fallback empty text string.
 */
export default function PodcastGrid({ genres }) {
    /**
     * Destructured values from the shared PodcastContext state.
     * @type {object}
     * @property {object[]} podcasts - Array of podcast data objects to display.
     */
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
