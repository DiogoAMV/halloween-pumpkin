import PumpkinOne from "./PumpkinOne/PumpkinOne";
import PumpkinMain from "./PumpkinMain/PumpkinMain";
import PumpkinTwo from "./PumpkinTwo/PumpkinTwo";
import styles from "./styles.module.scss";
import Stalk from "../Stalk/Stalk";
import Text from "../Text";

export default function Pumpkin() {
  return (
    <div className={styles.content}>
      <div className={styles.stalk}>
        <Stalk />
      </div>
      <div className={styles.pumpkin}>
        <PumpkinOne />
        <PumpkinTwo />
        <PumpkinMain />
      </div>
      <Text />
      <div className={styles.background}></div>
    </div>
  );
}
