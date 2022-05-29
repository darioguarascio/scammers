import { useState, useEffect } from "react";
import Item from "./Item";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        tag: "Scams",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        author: "Anon",
        date: "29 May 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis no...`,
        image: "",
        link: "",
      },
      {
        id: 2,
        tag: "Phising",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        author: "Anon",
        date: "29 May 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis no...`,
        image: "",
        link: "",
      },
      {
        id: 3,
        tag: "Identity Theft",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        author: "Anon",
        date: "29 May 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis no...`,
        image: "",
        link: "",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="container px-4 mx-auto my-3">
        <div className="grid grid-cols-3 gap-11">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
