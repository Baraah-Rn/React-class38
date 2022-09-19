import React from 'react';



const Navbar = ({ categories, selected, selectedCategory }) => {

  return (
    <div className='navbar'>
      <ul className='navbar-ul'>
        {categories.map((category) =>
          <li key={category} 
          onClick={() => selectedCategory(category)}
          className={selected === category ? 'selected-category' : null}>{category}</li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
