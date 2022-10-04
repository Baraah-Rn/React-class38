
import React from 'react';
import './App.css';
import ProductDetails from './Component/ProductDetails'
import Home from './Component/Home'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;