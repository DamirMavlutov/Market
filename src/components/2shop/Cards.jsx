import Card from "./Card";
import { useState, useEffect } from "react";

const Cards = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://63db6d43a3ac95cec5a16e6c.mockapi.io/api/v1/cloth")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
};

export default Cards;
