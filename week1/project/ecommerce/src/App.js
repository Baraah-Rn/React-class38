import './App.css';
import React, { useState } from 'react';
import products from "./fake-data/all-products"
import allCategories from './fake-data/all-categories';
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"



function App() {
  const [category, setCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products)


  const selectedCategory = (selectedCate) => {
      setCategory(selectedCate)
      setFilteredProducts(
        products.filter(
          (data) => data.category === selectedCate.replace("FAKE: ", "")
        )
      );
  };

  return (
    <>
      <h1>Products</h1>
      <Navbar categories={allCategories}
        selected={category}
        selectedCategory={selectedCategory}
      />
      <ProductList products={filteredProducts} />

    </>

  );
}

export default App;
