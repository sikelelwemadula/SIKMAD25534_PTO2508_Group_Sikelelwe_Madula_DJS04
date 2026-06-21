import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
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
