import { useEffect, useState } from "react";
import useCart from "./useCart";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useProducts;
