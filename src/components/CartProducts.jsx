import React, { useContext } from "react";
import { CartContext } from "../utils/context/cartContext";
import Alerts from "./Alerts";
import Button from "./Button";

const CartProducts = () => {
  const ctx = useContext(CartContext);
  const [cartProducts, setCartProducts] = React.useState([]);

  React.useEffect(() => {
    setCartProducts(ctx.cart);
}, [ctx.cart]);

  const deleteCart = () => {
    ctx.deleteCart();
  };


  const deleteItem = (id) => {
    ctx.deleteItemFromCard(id)
  };

  return (
    <div className="layout__aside">
        <div>
            <span className="title-xs">Productos añadidos</span>
            {cartProducts.length > 0 ?
                cartProducts.map((c, index) => (
                <div key={index}>
                    <p>
                    {c.title} - {c.price}€
                    </p>
                    <Button
                    type="button"
                    disabled={false}
                    className="cButton cButton-secondary cButton-outlined cButton-xs"
                    onClick={() => deleteItem(c.id)}
                    >
                    Borrar item
                    </Button>
                </div>
            )) : (
              <div className="layout__aside-noProducts">
                <Alerts message="Todavía no hay productos" className="cAlert cAlert-primary cAlert-outlined cAlert-fullwidth"/>
              </div> 
            )}
        </div>
        <div className="layout__aside-checkoutButtons">
            <Button
                type="button"
                disabled={ctx.total === 0}
                className="cButton cButton-primary cButton-xs cButton-fullwidth"
            >
              {ctx.total ? "Comprar por "+ ctx.total : "Comprar"}
            </Button>
            <Button
                type="button"
                disabled={ctx.total === 0}
                className="cButton cButton-secondary cButton-outlined cButton-xs cButton-fullwidth"
                onClick={deleteCart}
            >
                Borrar todo
            </Button>
        </div>
    </div>
  );
};

export default CartProducts;
