import { combineReducers } from "redux";
import { inputReduser } from "./inputReduser";
import { commentReduser } from "./commentReduser";

export const rootREduser = combineReducers({ inputReduser, commentReduser });
