import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const { page, setPage, totalPages, allPodcastsCount } = useContext(PodcastContext);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span className={styles.info}>
        Page {page} of {totalPages} ({allPodcastsCount} podcasts)
      </span>
      <button
        className={styles.button}
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
