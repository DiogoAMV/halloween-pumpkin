import styles from "./styles.module.scss";
import Pumpkin from "./components/Pumpkin";

export default function App() {
  return (
    <div className={styles.content}>
      <Pumpkin />
    </div>
  );
}
