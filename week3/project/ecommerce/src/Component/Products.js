import ProductsItem from "./ProductsItem";
import { useState } from "react";
import useFetchData from "../Hook/useFetch";
import Loading from "./Loading";
import Error from "./Error";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const url_items = `https://fakestoreapi.com/products`;
  const url_category = `https://fakestoreapi.com/products/category/${category}`;

  const url = category === "allCategories" ? url_items : url_category;

  const { loading, error } = useFetchData(url, setProducts);
  if (loading) return <Loading />;
  if (error) return <Error text="Error with loading the products." />;

  return (
    <div>
      <ul className="products">
        {products.map((item) => {
          return <ProductsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};
export default Products;