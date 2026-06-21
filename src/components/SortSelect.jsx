import { useContext } from "react";
import { PodcastContext, SORT_OPTIONS } from "../context/PodcastContext";
import styles from "./SortSelect.module.css";

/**
 * SortSelect component that renders a dropdown menu for ordering lists of podcasts.
 * Synchronises selected values with {@link PodcastContext} and builds options dynamically
 * from {@link SORT_OPTIONS}.
 *
 * @component
 * @returns {JSX.Element} A controlled HTML select dropdown element.
 */
export default function SortSelect() {
  /**
   * Destructured values from the shared PodcastContext state.
   * @type {object}
   * @property {string} sortKey - The active key identifier used to sort the current podcast dataset.
   * @property {function(string): void} setSortKey - Callback function to update the global active sorting key.
   */
  const { sortKey, setSortKey } = useContext(PodcastContext);

  return (
    <select
      className={styles.select}
      value={sortKey}
      onChange={(e) => setSortKey(e.target.value)}
    >
      {SORT_OPTIONS.map((option) => (
        <option key={option.key} value={option.key}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
