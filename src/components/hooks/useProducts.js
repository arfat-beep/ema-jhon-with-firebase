import { useEffect, useState } from "react";
import useCart from "./useCart";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  useEffect(() => {
    fetch("https://arfat23546454-xyz.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useProducts;
