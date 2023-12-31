import React from "react";
import "./App.css";
import List from "./List";

function App() {
  const [visibleList, setVisibleList] = React.useState();

  const toggleVisibleList = () => {
    setVisibleList(visible => !visible );
  };
  return (
    <div className="App">
      {visibleList && <List />}
      <button onClick={toggleVisibleList}>Показати / скрити список</button>
    </div>
  );
}

export default App;
