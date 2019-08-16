import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/counter";
import { Reducer } from "redux";

export const counter: Reducer<number, { type: string }> = (
  state = 0,
  action
) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};
