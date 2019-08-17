import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTodo, toggleTodo, TodoAction } from "../actions/todos";

import { Todos as TodosEntity, Todo } from "../entities/todos";
import { State } from "../entities/state";
import { Visibility } from "../entities/visibility";

import TodosList from "../components/TodosList";
import TodosInsert from "../components/TodosInsert";

interface TodosProps {
  todos: TodosEntity;
  dispatch: Dispatch<TodoAction>;
}

const Todos: React.FC<TodosProps> = ({ todos, dispatch }) => {
  const handleAddTodo = useCallback(
    (text: string) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  const handleToggleTodo = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return (
    <div>
      <TodosInsert handleAddTodo={handleAddTodo} />
      <TodosList todos={todos} handleToggleTodo={handleToggleTodo} />
    </div>
  );
};

const mapStateToProps = (state: State): Pick<TodosProps, "todos"> => {
  switch (state.visibility) {
    case Visibility.ACTIVE:
      return {
        todos: state.todos.filterNot((todo: Todo) => todo.get("isFinished"))
      };
    case Visibility.COMPLETED:
      return {
        todos: state.todos.filter((todo: Todo) => todo.get("isFinished"))
      };
    case Visibility.ALL:
    default:
      return { todos: state.todos };
  }
};

export default connect(mapStateToProps)(Todos);
