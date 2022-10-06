import React, { useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState()
  const initialValue = 0;

  React.useEffect(() => {
    const newAmmount = cart && cart.map((m) => parseFloat(m.price));
    const result = newAmmount.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    setTotal(result)
  },[cart])

  const addToCart = ({product}) => {
    const itemDuplicated = cart.findIndex((f) => f.id === product.id);
    if (itemDuplicated !== -1) {
      /* cart[itemDuplicated].total += totalPrice */
      console.log("duplicado")
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
        },
      ]);
    }
  };

  const deleteItemFromCard = (id) => {
    const deleteItem = cart && cart.filter((f) => f.id !== id)
    setCart(deleteItem)
  }

  const deleteCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ addToCart, cart, total, deleteItemFromCard, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
