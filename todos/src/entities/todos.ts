import { List, Record } from "immutable";

export type Todo = Record<{
  id: number;
  text: string;
  isFinished: boolean;
}>;

export type Todos = List<Todo>;
