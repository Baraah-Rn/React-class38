import React from 'react';



const Navbar = ({ categories }) => {

  return (
    <div className='navbar'>
      <h1>Products</h1>
      <ul className='navbar-ul'>
        {categories.map((category) =>
          <li key={category}>{category}</li>
        )}
      </ul>
    </div>
  )
}

export default Navbar