import './App.css';
import React, { useState } from 'react';
import products from "./fake-data/all-products"
import allCategories from './fake-data/all-categories';
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"



function App() {
  const [category, setCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products)


const selectedCategory = ()=>{
  console.log("000")
}
  return (
    <>
      <h1>Products</h1>
      <Navbar category ={allCategories}
      selected = {category}
     selectedCategory={selectedCategory}
      />
      <ProductList  products ={filteredProducts}/>

    </>

  );
}

export default App;
