import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate()
  return (

    <ul className='products'>
      {products.map((product) => {
        const { id, image, title } = product;
        return (
          <>
            <li className="product-list">
              <div key={id} className='product-collection'>
                <img className='product-img' src={image} alt={title} />
                <button onClick={() => {
                  navigate("/ProductsCard", { state: productId })
                }} ><h5>{title}</h5></button>
              </div>
            </li>
          </>
        )
      }

      )}
    </ul>
  )
}

export default ProductList



