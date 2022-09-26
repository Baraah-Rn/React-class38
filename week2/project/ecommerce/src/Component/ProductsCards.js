import React from 'react'

const ProductsCards = ({ product }) => {
  return (
    <div>
       <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    </div>
  )
}

export default ProductsCards