import React from "react";

const List = () => {
  const [numbers, setNumbers] = React.useState([0]);
  const [count, setCount] = React.useState(0)

  const addNumber = () => {
    const Number = numbers.at(-1);
    const newArr = [...numbers, Number + 1];
    setNumbers(newArr);
    console.log(newArr);
  };
  React.useEffect(() => {
    console.log("компонент COUNT відтворений");
   
  },[count]);

  React.useEffect(() => {
    console.log("компонент NUMBERS відтворений");
   
  },[numbers]);

  React.useEffect(() => {
    console.log("компонент ВІДТВОРИВСЯ");
   
  });

  React.useEffect(() => {
    console.log("компонент відтворений");
    return () => {
        console.log('компонент видалений');
    }
  }, []);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>start</button>
    </div>
  );
};

export default List;
