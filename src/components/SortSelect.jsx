import { useContext } from "react";
import { PodcastContext, SORT_OPTIONS } from "../context/PodcastContext";
import styles from "./SortSelect.module.css";

export default function SortSelect() {
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
