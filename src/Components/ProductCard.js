import { useContext } from "react";
import "./ProductCard.css";
import Rating from "./Rating";
import CartContext from "./Context/Cart/CartContext";

// import formatCurrency from "format-currency";
const ProductCard = ({ product }) => {
  // const opts={format:"%s%v",Symbol:"$"}
  const { addToCart } = useContext(CartContext);
  return (
      <div className="productCard__wrapper">
          <div >
              <img className="productCard__img" src={product.image} alt="" />
              <h1>{product.name}</h1> 
              <div className="ProductCard__wrapper">
          {/* <h5>{formatCurrency(`${ product.price }`,opts)}</h5> */}
          <h5>{ product.price }</h5>
        </div>
        <div className="ProductCard__rating">
          <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </div>
        <button className="ProductCard__button"  onClick={() => addToCart(product)}>Add to Basket</button>
          </div>
      
    </div>
  )
}

export default ProductCard
