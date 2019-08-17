import React from "react";

interface TodoProps {
  text: string;
  isFinished: boolean;
  onClick: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, isFinished, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: isFinished ? "line-through" : "" }}
    >
      {text}
    </li>
  );
};

export default Todo;
