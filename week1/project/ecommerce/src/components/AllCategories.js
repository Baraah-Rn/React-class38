import React from 'react';
import categories from "../fake-data/all-categories";



const AllCategories = ({filteredCategory }) => {




  return (
    <>
      {categories.map((category) =>
        <button onClick={filteredCategory} className='category-collections'><h3>{category}</h3></button>
      )
      }
    </>
  )
}

export default AllCategories

