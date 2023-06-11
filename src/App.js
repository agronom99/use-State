import React from "react";
import "./App.css";

function App() {
  // let numbers =[1,3,6];
  const [numbers, setNumbers] = React.useState([0]);

  const addNumber = () => {
    const Number = numbers.at(-1);
    const newArr = [...numbers, Number+1]
    setNumbers(newArr);
    console.log(newArr);
  };
  return (
    <div className="App">
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>start</button>
    </div>
  );
}

export default App;
