import { SHOPING_CARD_ADD, SHOPING_CARD_DELETE } from "./types";
const initialState = {
  items: [],
};
export const shopingCardReduser = (state = initialState, action) => {
  console.log("shopingCardReduser >>", action);

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

    default:
      return state;
  }
};
