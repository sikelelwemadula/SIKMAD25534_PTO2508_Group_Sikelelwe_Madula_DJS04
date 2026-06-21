import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./SearchBar.module.css";

/**
 * SearchBar component providing a text input field for filtering podcasts.
 * Interacts directly with {@link PodcastContext} to sync and update global search terms.
 *
 * @component
 * @returns {JSX.Element} A stylized search input field.
 */
export default function SearchBar() {
  /**
   * Destructured values from the shared PodcastContext state.
   * @type {object}
   * @property {string} search - The current query string used for matching titles or descriptions.
   * @property {function(string): void} setSearch - Callback function to update the global search filter.
   */
  const { search, setSearch } = useContext(PodcastContext);

  return (
    <input
      className={styles.search}
      type="search"
      placeholder="Search podcasts"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
