import { useState, useEffect } from "react";
import Item from "./Item";

const List = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div>
      <div className="container px-4 mx-auto my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
