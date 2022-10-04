import React, { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import ProductsItem from "./ProductsItem";
import Header from "./Header";


export default function FavoriteProducts() {
  const { favoriteProducts } = useContext(FavoritesContext);

  return (
    <>
      <Header title ="Favorites"/>
      <div className="favorite-products">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((item) => (
            <ProductsItem item={item} key={item.id} />
          ))
        ) : (
          <h2>You haven't chosen any favorites yet!</h2>
        )}
      </div>
    </>
  );
}