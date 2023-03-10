import { combineReducers } from "redux";
import { inputReduser } from "./inputReduser";
import { commentReduser } from "./commentReduser";
import { shopingCardReduser } from "./shopingCardReduser";
import { dataReduser } from "./dataReduser";

export const rootREduser = combineReducers({
  inputReduser,
  commentReduser,
  shopingCardReduser,
  dataReduser,
});
