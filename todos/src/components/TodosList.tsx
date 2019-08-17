import React from "react";
import { Todos, Todo } from "../entities/todos";
import TodoComponent from "./Todo";

interface TodosListProps {
  todos: Todos;
  handleToggleTodo: (id: number) => void;
}

const TodosList: React.FC<TodosListProps> = ({ todos, handleToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo: Todo) => {
        return (
          <TodoComponent
            key={todo.get("id")}
            text={todo.get("text")}
            isFinished={todo.get("isFinished")}
            onClick={() => handleToggleTodo(todo.get("id"))}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
