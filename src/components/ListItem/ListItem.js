import { useEffect, useState } from "react";
import Accordian from "../Accordian/Accordian";
import styles from "./ListItem.module.css";

const ListItem = ({ list, defaultItem = 1 }) => {
  const [activeList, setActiveList] = useState(defaultItem);

  let setActive = (id) => {
    setActiveList(id);
  };
  let setNextActive = () => {
    let next = (activeList % list.length) + 1;
    setActiveList(next);
  };

  return (
    <div className={styles.accordiancontainer}>
      {list.map((item, index) => {
        return (
          <Accordian
            title={item.title}
            content={item.content}
            active={index + 1 === activeList}
            idx={index}
            setActive={setActive}
            key={`Accordian_${index}`}
            setNextActive={setNextActive}
          />
        );
      })}
    </div>
  );
};

export default ListItem;
