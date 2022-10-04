import React from 'react'
import { Link } from "react-router-dom";



const Header = ({title}) => {
  return (
    <header className="header">
    <h1>{title}</h1>
    <div className="header-links">
        <Link className="favorite-link" to="/favorites">
          Favorites
        </Link>
        <Link className="home-link" to="/">
          Products 
        </Link>
      </div>
  </header>
  )
}

export default Header