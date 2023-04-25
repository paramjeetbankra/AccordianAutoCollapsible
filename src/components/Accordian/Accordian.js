import AccordianContent from "../AccordianContent/AccordianContent";
import AccordianHeader from "../AccordianHeader/AccordianHeader";
import styles from "./Accordian.module.css";

const Accordian = ({
  title,
  content,
  active,
  setActive,
  idx,
  setNextActive
}) => {
  let onClick = () => {
    setActive(idx + 1);
  };

  return (
    <div className={styles.accordian}>
      <AccordianHeader
        title={title}
        active={active}
        onClick={onClick}
        setNextActive={setNextActive}
      />
      <AccordianContent content={content} active={active} />
    </div>
  );
};

export default Accordian;
