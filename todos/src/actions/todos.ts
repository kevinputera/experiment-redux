import { ActionTypes } from "../entities/actions";

interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  text: string;
}

interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  id: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  text
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  id
});
