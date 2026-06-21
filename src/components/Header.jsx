import styles from "./Header.module.css";

/**
 * Header component that displays the application title and branding.
 * Rendered at the top of the viewport with a flexbox layout.
 * 
 * @component
 * @returns {JSX.Element} The rendered header section.
 */

export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>🎙️ Podcast App</h1>
    </header>
  );
}
