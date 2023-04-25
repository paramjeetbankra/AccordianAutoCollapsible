import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./AccordianHeader.module.css";

const AccordianHeader = ({ title, active, onClick, setNextActive }) => {
  let str = ">";

  return (
    <div
      className={active ? `${styles.header} ${styles.active}` : styles.header}
      onClick={onClick}
    >
      {active && <ProgressBar setNextActive={setNextActive} />}
      <p className={styles.text}>{title}</p>
      <span className={styles.icon}> {str}</span>
    </div>
  );
};

export default AccordianHeader;
