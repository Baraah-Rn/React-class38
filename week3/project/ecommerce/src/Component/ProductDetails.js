import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../Hook/useFetch"
import Loading from "./Loading";
import Error from "./Error";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const url_item = `https://fakestoreapi.com/products/${id}`;

    const { loading, error } = useFetchData(url_item, setProduct);

    if (loading) return <Loading />;
    if (error) return <Error text="Error with loading the product." />;

    return (
        <div className="App">
            <h1>{product.title}</h1>
            <div className="product-details">
                <img className="product-image" src={product.image} alt={product.title} />
                <p className="product-description">{product.description}</p>
                <p className="price">$ {product.price}</p>
            </div>
        </div>
    );
};

export default ProductDetails;