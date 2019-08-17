import { Todos } from "./todos";
import { Visibility } from "./visibility";

export interface State {
  todos: Todos;
  visibility: Visibility;
}
