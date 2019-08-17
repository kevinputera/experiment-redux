import { List, Record } from "immutable";
import { TodoAction } from "../actions/todos";
import { ActionTypes } from "../entities/actions";
import { Todo } from "../entities/todos";

// Helper function to generate serial id.
import { next } from "../utils/counter";

const todoFactory = Record({
  id: 0,
  text: "",
  isFinished: false
});

export const todos = (state = List<Todo>(), action: TodoAction): List<Todo> => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const newTodo: Todo = todoFactory({
        id: next(),
        text: action.text
      });
      return state.push(newTodo);
    case ActionTypes.TOGGLE_TODO:
      return state.map((todo: Todo) => {
        if (todo.get("id") === action.id) {
          const isFinished = todo.get("isFinished");
          return todo.set("isFinished", !isFinished);
        }
        return todo;
      });
    default:
      return state;
  }
};
