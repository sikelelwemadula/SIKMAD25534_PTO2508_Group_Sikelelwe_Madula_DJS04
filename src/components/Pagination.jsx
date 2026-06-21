import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const { page, setPage, totalPages } = useContext(PodcastContext);

  // Generate page numbers array
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    /* 1. Connected to .paginationWrapper */
    <div className={styles.paginationWrapper}>
      
      {/* PREVIOUS BUTTON */}
      <button
        className={styles.pageButton}
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      {/* DYNAMIC PAGE NUMBERS */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          /* 2. Uses template literals to dynamically apply .active if matches */
          className={`${styles.pageButton} ${page === num ? styles.active : ""}`}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}

      {/* NEXT BUTTON */}
      <button
        className={styles.pageButton}
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}
