import React from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  
  const addToCart = ({product}) => {
    const itemDuplicated = cart.findIndex((f) => f.title === product.title)

    if (itemDuplicated !== -1) {
      /* cart[itemDuplicated].total += totalPrice */
      console.log("ya has añadido este producto")
    } else {
      setCart([
        ...cart,
        {
            title: product.title,
            price: product.price,
        },
      ])
    }
};

console.log(cart);
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
