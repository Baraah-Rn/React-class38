import { BrowserRouter , Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import ProductDetails from './Component/ProductDetails'
import Home from './Component/Home'
import Favorites from "./Component/Favorites"
import { FavoritesProvider } from './Context/FavoritesContext';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <FavoritesProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/favorites" element={<Favorites/>} />
    </Routes>
    </FavoritesProvider>
  </BrowserRouter>
  </div>
  );
}
export default App;