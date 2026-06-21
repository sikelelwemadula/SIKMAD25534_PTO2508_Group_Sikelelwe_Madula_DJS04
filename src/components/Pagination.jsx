import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pagination.module.css";

/**
 * Pagination component for navigating through lists of podcasts.
 * Consumes pagination state from {@link PodcastContext} to render dynamic page numbers,
 * as well as 'Previous' and 'Next' controls.
 *
 * @component
 * @returns {JSX.Element} A navigation bar with interactive page buttons.
 */
export default function Pagination() {
  /**
   * Destructured values from the shared PodcastContext state.
   * @type {object}
   * @property {number} page - The current active page number (1-indexed).
   * @property {function(number): void} setPage - Callback function to update the current page.
   * @property {number} totalPages - The maximum number of available pages.
   */
  const { page, setPage, totalPages } = useContext(PodcastContext);

  /**
   * An array containing numbers from 1 up to `totalPages`.
   * Used to map out individual, clickable page number buttons.
   * @type {number[]}
   */
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationWrapper}>
      
      <button
        className={styles.pageButton}
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`${styles.pageButton} ${page === num ? styles.active : ""}`}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}

     
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
