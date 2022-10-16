import PumpkinOne from "./components/PumpkinOne/PumpkinOne";
import PumpkinTwo from "./components/PumpkinTwo/PumpkinTwo";
import styles from "./styles.module.scss";

export default function App() {
  return (
    <div className={styles.content}>
      <PumpkinOne />
      <PumpkinTwo />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
