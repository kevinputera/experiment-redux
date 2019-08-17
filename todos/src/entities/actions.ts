import { TodoAction } from "../actions/todos";
import { VisibilityAction } from "../actions/visibility";

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  SET_VISIBILITY = "SET_VISIBILITY"
}

export type Action = TodoAction & VisibilityAction;
