import { combineReducers } from "redux";
import { State } from "../entities/state";
import { Action } from "../entities/actions";

import { todos } from "./todos";
import { visibility } from "./visibility";

export const reducer = combineReducers<State, Action>({
  todos,
  visibility
});
