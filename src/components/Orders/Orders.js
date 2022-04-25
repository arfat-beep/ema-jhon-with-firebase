import React from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Cart from "../Cart/Cart";
import Review from "../ReviewItem/Review";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  let restCart = [];
  const handleRemoveProduct = (product) => {
    restCart = cart.filter((cartProduct) => cartProduct !== product);
    setCart(restCart);

    removeFromDb(product._id);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <Review
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></Review>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipment">
            <button>Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
