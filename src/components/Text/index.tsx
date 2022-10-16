import styles from "./styles.module.scss";

export default function Text() {
  return (
    <>
      <h1 className={styles.title}>
        by:
        <a href="https://github.com/DiogoAMV" target="_blank">
          Diogo Marques
        </a>
      </h1>
    </>
  );
}
