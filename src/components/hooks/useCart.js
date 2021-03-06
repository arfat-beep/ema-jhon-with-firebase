import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";
const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);
    console.log(keys);
    fetch("https://arfat23546454-xyz.herokuapp.com/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const addedPorduct = products.find((product) => product._id === id);
          if (addedPorduct) {
            const quantity = storedCart[id];
            addedPorduct.quantity = quantity;
            savedCart.push(addedPorduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};

export default useCart;
