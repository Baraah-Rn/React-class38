import React from 'react';

const ProductList = ({ products }) => {

  return (
    
      <ul className='products'>
        {products.map((product) => {
          const { id, image, title } = product;
          return (
            <>
              <li className="product-list">
                <div key={id} className='product-collection'>
                  <img className='product-img' src={image} alt={title} />
                  <h5>{title}</h5>
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