import React from "react";
import Todos from "./containers/Todos";
import Visibility from "./containers/Visibility";

const App: React.FC = () => {
  return (
    <div>
      <Todos />
      <Visibility />
    </div>
  );
};

export default App;
