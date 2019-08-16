import { combineReducers } from "redux";
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "./actions";

function selectedSubreddit(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function posts(
  state = { isFetching: false, didInvalidate: false, items: [] },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true, didInvalidate: false };
    case INVALIDATE_SUBREDDIT:
      return { ...state, didInvalidate: true };
    case RECEIVE_POSTS:
      return {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedSubreddit,
  postsBySubreddit
});

export default rootReducer;
