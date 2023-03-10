import { SET_DATA } from "./types";
import { CHENGE_MONEY } from "./types";

const initialState = {
  data: [],

  sizes: [],
  colors: [],
  prices: [],
};

export const dataReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    case CHENGE_MONEY:
      return { ...state, prices: [...state.prices, action.payload] };

    default:
      return state;
  }
};
