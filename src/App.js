import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/css";
import { useState } from "react";

import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

const title = css`
  font-weight: normal;
  color: rgb(153, 199, 148);
  letter-spacing: 1px;
  font-size: 26px;
  margin-top: 60px;
  margin-bottom: 30px;
`;

export default function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    id: uuidv4(),
    name: "",
    description: ""
  });

  const handleAddStep = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      { id: item.id, name: item.name, description: item.description }
    ]);
    setItem({
      id: uuidv4(),
      name: "",
      description: ""
    });
  };

  return (
    <div className="App">
      <h2 className={title}>Todo list edit</h2>
      <ItemForm
        variant="regular"
        item={item}
        onChange={setItem}
        onSubmit={handleAddStep}
      />
      <ItemList items={items} onChange={setItems} />
    </div>
  );
}
