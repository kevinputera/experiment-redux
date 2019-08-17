import { VisibilityAction } from "../actions/visibility";
import { ActionTypes } from "../entities/actions";
import { Visibility } from "../entities/visibility";

export const visibility = (
  state = Visibility.ALL,
  action: VisibilityAction
): Visibility => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY:
      return action.filter;
    default:
      return state;
  }
};
