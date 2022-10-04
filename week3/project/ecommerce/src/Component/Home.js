import { useState } from "react";
import CategoryList from "./CategoryList"
import Products from "./Products"
import useFetchData from "../Hook/useFetch";

const Home = () => {
  const [category, setCategory] = useState("allCategories");
  const [categories, setCategories] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";

  const { loading, error } = useFetchData(url, setCategories);

  return (
    <div className="App">
      <header className="header">
        <h1>Products</h1>
      </header>

      <CategoryList
        allCategories={categories}
        setCategory={setCategory}
        loading={loading}
        error={error}
      />
      <Products category={category} />
    </div>
  );
};

export default Home;