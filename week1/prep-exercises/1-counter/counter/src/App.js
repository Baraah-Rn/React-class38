import React, { useState } from "react";
import "./App.css"
import Counter from "./components/Counter.js";
import Button from "./components/Button.js";


function App() {
  const [count, setCount] = useState(0);

  function AddOne() {
    setCount(count => count + 1)
  }
  function MinesOne() {
    if (count <= 0){
      alert("You can't go 1 down")
      
    }else{
    setCount(count => count - 1)
    }
  }
  function AddTwo (){
    setCount(count => count + 2)
  }
  function MinesTwo(){
    if( count <= 1 || count === 0){
      alert("You can't go 2 down")
    }else{
    setCount(count => count - 2)
    }
  }
  return (
    <>
      <Button AddOne={AddOne}
       MinesOne={MinesOne}
       AddTwo={AddTwo}
       MinesTwo ={MinesTwo} />
      <Counter count={count} />
      
    </>
  );
}

export default App;
