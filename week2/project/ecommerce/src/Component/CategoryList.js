import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

function CategoryList({ allCategories, setCategory, loading, error }) {
  const [activeButton, setActiveButton] = useState(null);

  const toggle = (select, item) => {
    if (activeButton === select) {
      setCategory("allCategories");
      setActiveButton(null);
    } else {
      setCategory(item);
      setActiveButton(select);
    }
  };

  const activeToggle = (selected) => {
    if (activeButton === selected) {
      return "category-item-selected";
    } else {
      return "category-item";
    }
  };

  if (loading){ return <Loading />;}
  if (error) {return <Error text="Error with loading the categories." />;}

  return (
    <div className="Category-container">
      {allCategories.map((items, selectCat) => {
        return (
          <button
            key={selectCat}
            className={activeToggle(selectCat)}
            onClick={() => {
              toggle(selectCat, items);
            }}
          >
            {items}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;