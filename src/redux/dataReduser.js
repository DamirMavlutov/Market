import {
  SET_DATA,
  FILTER_PRICE,
  FILTER_COLOR,
  FILTER_SIZE,
  FILTER_ALL_SIZES,
  FILTER_ALL_COLORS,
  FILTER_ALL_PRICES,
} from "./types";

const initialState = {
  data: [],

  sizes: [
    { id: 1, name: "l", checked: false },
    { id: 2, name: "m", checked: false },
    { id: 3, name: "s", checked: false },
    { id: 4, name: "xl", checked: false },
    { id: 5, name: "xxl", checked: false },
    { id: 6, name: "xxxl", checked: false },
  ],
  colors: [
    { id: 1, name: "black", checked: false },
    { id: 2, name: "white", checked: false },
    { id: 3, name: "red", checked: false },
    { id: 4, name: "blue", checked: false },
    { id: 5, name: "green", checked: false },
    { id: 6, name: "yellow", checked: false },
  ],
  prices: [
    { id: 1, from: "0", to: "100", checked: false },
    { id: 2, from: "101", to: "200", checked: false },
    { id: 3, from: "201", to: "300", checked: false },
    { id: 4, from: "301", to: "400", checked: false },
    { id: 5, from: "401", to: "500", checked: false },
    { id: 6, from: "501", to: "600", checked: false },
  ],
};

export const dataReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    case FILTER_PRICE:
      return {
        ...state,
        prices: state.prices.map((el) => {
          if (el.id === action.payload) {
            return { ...el, checked: !el.checked };
          }
          return el;
        }),
      };

    case FILTER_COLOR:
      return {
        ...state,
        colors: state.colors.map((el) => {
          if (el.id === action.payload) {
            return { ...el, checked: !el.checked };
          }
          return el;
        }),
      };

    case FILTER_SIZE:
      return {
        ...state,
        sizes: state.sizes.map((el) => {
          if (el.id === action.payload) {
            return { ...el, checked: !el.checked };
          }
          return el;
        }),
      };

    case FILTER_ALL_SIZES:
      return {
        ...state,
        sizes: state.sizes.map((el) => {
          return { ...el, checked: action.payload };
        }),
      };

    case FILTER_ALL_COLORS:
      return {
        ...state,
        colors: state.colors.map((el) => {
          return { ...el, checked: action.payload };
        }),
      };

    case FILTER_ALL_PRICES:
      return {
        ...state,
        prices: state.prices.map((el) => {
          return { ...el, checked: action.payload };
        }),
      };

    default:
      return state;
  }
};
