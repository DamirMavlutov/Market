import Card from "./Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => {
    const { dataReduser } = state;
    return dataReduser.data;
  });
  useEffect(() => {
    fetch("https://63db6d43a3ac95cec5a16e6c.mockapi.io/api/v1/cloth")
      .then((response) => response.json())
      .then((json) => dispatch(setData(json)));
  }, []);

  //const filteredItems = items.filter(p => p.color....)

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
