import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Unknown error occurred</i>
      </p>
    </div>
  );
}
