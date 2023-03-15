import {
  INPUT_TEXT,
  COMMENT_CREATE,
  SHOPING_CARD_ADD,
  SHOPING_CARD_DELETE,
  PURCHASES_DELETE,
  SET_DATA,
  FILTER_PRICE,
  FILTER_COLOR,
  FILTER_SIZE,
  FILTER_ALL_SIZES,
  FILTER_ALL_COLORS,
  FILTER_ALL_PRICES,
} from "./types";

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function shopingCardAdd(item) {
  return {
    type: SHOPING_CARD_ADD,
    data: item,
  };
}

export function shopingCardDelete(item, onlyOne = false) {
  return {
    type: SHOPING_CARD_DELETE,
    data: item,
    onlyOne,
  };
}

export function purchasesDelete(item) {
  return {
    type: PURCHASES_DELETE,
    data: item,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function filterPrice(data) {
  return {
    type: FILTER_PRICE,
    payload: data,
  };
}

export function filterColor(data) {
  return {
    type: FILTER_COLOR,
    payload: data,
  };
}

export function filterSize(data) {
  return {
    type: FILTER_SIZE,
    payload: data,
  };
}

export function filterAllSizes(data) {
  return {
    type: FILTER_ALL_SIZES,
    payload: data,
  };
}

export function filterAllColors(data) {
  return {
    type: FILTER_ALL_COLORS,
    payload: data,
  };
}

export function filterAllPrices(data) {
  return {
    type: FILTER_ALL_PRICES,
    payload: data,
  };
}
