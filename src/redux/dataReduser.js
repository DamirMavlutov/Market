import { SET_DATA, FILTER_COLOR, CHENGE_MONEY, FILTER_SIZE } from "./types";

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

    case FILTER_COLOR:
      return { ...state, colors: [...state.colors, action.payload] };

    case FILTER_SIZE:
      return { ...state, sizes: [...state.sizes, action.payload] };

    default:
      return state;
  }
};
