import React from 'react';
 import products from "../fake-data/all-products"

const AllProducts = () => {

  return (
    <>
<ul className='products'>
      {products.map((product) =>
       <li className ="product-list">
         <div key={product.id} className='product-collection'>
          <img className='product-img' src={product.image} alt="product" />
          <h5>{product.title}</h5>
        </div>
        </li>
      )}
      </ul>
    </>
  )
}

export default AllProducts