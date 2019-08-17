import { ActionTypes } from "../entities/actions";
import { Visibility } from "../entities/visibility";

export interface VisibilityAction {
  type: ActionTypes.SET_VISIBILITY;
  filter: Visibility;
}

export const setVisibility = (filter: Visibility): VisibilityAction => ({
  type: ActionTypes.SET_VISIBILITY,
  filter
});
