import Card from "./Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.dataReduser.sizes)
    .filter((el) => el.checked === true) //фильтруем все checked:true
    .map((el) => el.name); //делаем массив из содержимого name

  const colors = useSelector((state) => state.dataReduser.colors)
    .filter((el) => el.checked === true)
    .map((el) => el.name);

  const prices = useSelector((state) => state.dataReduser.prices).filter(
    (el) => el.checked === true
  );

  const items = useSelector((state) => {
    const { dataReduser } = state;
    return dataReduser.data;
  });
  useEffect(() => {
    fetch("https://63db6d43a3ac95cec5a16e6c.mockapi.io/api/v1/cloth")
      .then((response) => response.json())
      .then((json) => dispatch(setData(json)));
  }, []);

  const filteredItems = [];
  items.forEach((item) => {
    const found = item.sizes.some((r) => sizes.includes(r)); //смотрим содержит ли item элем. sizes
    if (found) {
      filteredItems.push(item);
    }
  });

  items.forEach((item) => {
    const found = item.colors.some((r) => colors.includes(r)); //смотрим содержит ли item элем. colors

    if (found) {
      filteredItems.push(item);
    }
  });

  items.forEach((item) => {
    let num = +item.price;
    for (let i = 0; i < prices.length; i++) {
      if (num >= prices[i].from && num <= prices[i].to) {
        filteredItems.push(item);
        break;
      }
    }
  });

  return (
    <>
      {filteredItems.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
};

export default Cards;
