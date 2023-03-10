import {
  INPUT_TEXT,
  COMMENT_CREATE,
  SHOPING_CARD_ADD,
  SHOPING_CARD_DELETE,
  PURCHASES_DELETE,
  SET_DATA,
  CHENGE_MONEY,
  FILTER_COLOR,
  FILTER_SIZE,
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

export function changeMoney(data) {
  return {
    type: CHENGE_MONEY,
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
