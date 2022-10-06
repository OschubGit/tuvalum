import React, { useContext } from "react";
import { CartContext } from "../utils/context/cartContext";
import Button from "./Button";

const CartProducts = () => {
  const test = useContext(CartContext);
  const [cartProducts, setCartProducts] = React.useState();

  React.useEffect(() => {
    setCartProducts(test.cart);
}, [test.cart]);

  const deleteCart = () => {
    test.deleteCart();
  };


  const deleteItem = (id) => {
    test.deleteItemFromCard(id)
  };

  return (
    <div className="layout__aside">
        <div>
            <span className="title-xs">Productos añadidos</span>
            {cartProducts &&
                cartProducts.map((c, index) => (
                <div key={index}>
                    <p>
                    {c.title} - {c.price}€
                    </p>
                    <Button
                    type="button"
                    disabled={false}
                    className="cButton cButton-primary cButton-xs"
                    onClick={() => deleteItem(c.id)}
                    >
                    Borrar item
                    </Button>
                </div>
            ))}
            <span className="title-xs">{test.total}€</span>
        </div>
      <Button
        type="button"
        disabled={false}
        className="cButton cButton-secondary cButton-xs cButton-fullwidth"
        onClick={deleteCart}
      >
        Borrar todo
      </Button>
    </div>
  );
};

export default CartProducts;
