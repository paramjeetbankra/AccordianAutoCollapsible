import ListItem from "./components/ListItem/ListItem";
import "./styles.css";
import AccordionList from "./AccordionList";

export default function App() {
  return (
    <div className="App">
      <ListItem list={AccordionList} defaultItem={1} />
    </div>
  );
}
