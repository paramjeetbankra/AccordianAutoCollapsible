import styles from "./AccordianContent.module.css";

const AccordianContent = ({ content, active }) => {
  return (
    <div
      className={
        active ? `${styles.content} ${styles.visible}` : styles.content
      }
    >
      <p className={styles.text}>{content}</p>
    </div>
  );
};

export default AccordianContent;
