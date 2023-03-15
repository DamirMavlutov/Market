import Card from "./Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.dataReduser.sizes).filter(
    (el) => el.checked === true
  );
  const colors = useSelector((state) => state.dataReduser.colors).filter(
    (el) => el.checked === true
  );
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

  // есть все карточки items
  // нужно убрать неподходящие карточки, отфильтровать исходя из sizes, colors, prices

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
