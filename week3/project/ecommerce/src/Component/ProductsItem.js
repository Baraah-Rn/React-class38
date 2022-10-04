import { Link } from "react-router-dom";

function ProductsItem({ item }) {
  return (
    <li className="products-item">
      <div className="item">
        <Link to={`/product/${item.id}`} className="product-link">
          <img src={item.image} alt={item.title} className="product-image" />
          <span className="product-title">{item.title}</span>
        </Link>
      </div>
    </li>
  );
}

export default ProductsItem;