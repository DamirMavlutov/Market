export { INPUT_TEXT, COMMENT_CREATE } from "./types";
export function inputText(text) {
  return {
    type: "INPUT_TEXT",
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: "COMMENT_CREATE",
    data: { text, id },
  };
}
