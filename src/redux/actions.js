import {
  INPUT_TEXT,
  COMMENT_CREATE,
  SHOPING_CARD_ADD,
  SHOPING_CARD_DELETE,
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

export function shopingCardDelete(item) {
  return {
    type: SHOPING_CARD_DELETE,
    data: item,
  };
}
