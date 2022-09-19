import './App.css';
import React from 'react';
import AllCategories from "./components/AllCategories"
import AllProducts from './components/AllProducts';



function App() {
  const filteredCategory = ()=>{
    console.log("=========")
  }
  return (
    <>
      <h1>Products</h1>
      <AllCategories
        filteredCategory ={filteredCategory}/>
      <AllProducts/>
    </>

  );
}

export default App;
