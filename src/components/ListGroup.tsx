import { useState } from "react";

function ListGroup() {
  const items = ["где", "вьюгу", "на", "латынь", "переводил", "Овидий"];

  const [selectedIndex, setSelectedInex] = useState(-1)

  return ( 
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedInex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
