import React, { useContext } from "react";
import "./styles/main.css";
import ProductsList from "./containers/ProductsList";
import CartProducts from "./components/CartProducts";
import Header from "./components/Header";
import { CartContext } from "./utils/context/cartContext";


function App() {
  const ctx = useContext(CartContext);
console.log(ctx.active)
  return (
    <div className="layout">
      <header>
          <Header/>
      </header>
      <main>
        <ProductsList/>
      </main>
      <aside className={ctx.active === true && "active"}>
        <CartProducts/>
      </aside>
    </div>
  );
}

export default App;
