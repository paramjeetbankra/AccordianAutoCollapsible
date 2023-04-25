import { useState, useEffect } from "react";
import styles from "./PorgressBar.module.css";

const ProgressBar = ({ setNextActive }) => {
  let [fill, setFill] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      fill++;
      if (fill >= 50) {
        setNextActive();
      }
      setFill(fill);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [fill, setNextActive]);

  return (
    <div className={styles.bar}>
      <div className={styles.backBar} />
      <div
        className={styles.completeBar}
        style={{ width: `${(fill / 50) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
