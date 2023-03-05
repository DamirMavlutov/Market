import { SHOPING_CARD_ADD } from "./types";
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

    default:
      return state;
  }
};
