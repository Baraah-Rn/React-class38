import React from 'react';
import useFetch from '../Hooks/useFetch';
import ProductList from './ProductList';
import Navbar from './Navbar';

const Home = () => {
    
    const {data : products, isLoading,error} = useFetch(`https://fakestoreapi.com/products`)
    const {data : categories} = useFetch(`https://fakestoreapi.com/products/categories`);


  return (


    <div>
      {error && <div>{error}</div>}
      {isLoading && <div> Loading...</div>}
      {categories && <Navbar categories={categories}/>}
      {products && <ProductList products={products}/>}
    </div>
  )
}

export default Home