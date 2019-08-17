import React, { useState, useCallback } from "react";

interface TodosInsertProps {
  handleAddTodo: (text: string) => void;
}

const TodosInsert: React.FC<TodosInsertProps> = ({ handleAddTodo }) => {
  const [text, setText] = useState("");

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleAddTodo(text);
      setText("");
    },
    [handleAddTodo, text, setText]
  );

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodosInsert;
