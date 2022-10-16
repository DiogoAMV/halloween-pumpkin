import styles from "./styles.module.scss";

interface StalkProps {
  className?: string;
}

export default function Stalk(props: StalkProps) {
  return (
    <div className={styles.stalk}>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
    </div>
  );
}
