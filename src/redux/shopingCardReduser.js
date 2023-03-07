import {
  SHOPING_CARD_ADD,
  SHOPING_CARD_DELETE,
  PURCHASES_DELETE,
} from "./types";
const initialState = {
  items: [],
};
export const shopingCardReduser = (state = initialState, action) => {
  console.log("shopingCardReduser >>>>", action);

  switch (action.type) {
    case SHOPING_CARD_ADD:
      return {
        ...state,
        items: [...state.items, action.data],
      };

    case SHOPING_CARD_DELETE:
      return {
        ...state,
        items: state.items.filter((p) => p.id !== action.data.id),
      };
    //удаление,фильтруем и сравниваем айди

    case PURCHASES_DELETE:
      const item = action.data;
      // отобрать все элементы из массива, за исключением одного item
      // старый массив state.items
      const cloned = [...state.items];
      const index = cloned.indexOf(item);
      if (index !== -1) {
        cloned.splice(index, 1);
      }

      console.log("+++++", cloned);

      return {
        ...state,
        items: cloned,
      };

    default:
      return state;
  }
};
