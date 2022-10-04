import React, { useContext } from 'react'
import { FavoritesContext  } from "../Context/FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";


function FavIcon({ item }) {
   
 const { favoriteProducts, addFavorite, removeFavorite }= useContext(FavoritesContext);

 const isProductFavorite = (id) => {
    const favProduct = favoriteProducts.some((product) => product.id === id);
    return favProduct;
  };


    return (
        <div className="heart-icon">
      {isProductFavorite(item.id) ? (
        <img
          src={heartSolid}
          alt="favorite-icon"
          onClick={() => {
            removeFavorite(item.id);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="favorite-icon"
          onClick={() => {
            addFavorite(item);
          }}
        />
      )}
      </div>
    );
  }
  
  export default FavIcon;