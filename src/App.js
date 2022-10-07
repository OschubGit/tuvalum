import React, { useContext } from "react";
import "./styles/main.css";
import ProductsList from "./containers/ProductsList";
import CartProducts from "./containers/CartProducts";
import Header from "./components/Header";
import { CartContext } from "./utils/context/cartContext";


function App() {
  const ctx = useContext(CartContext);
  return (
    <div className="layout">
      <header>
          <Header/>
      </header>
      <main>
        <ProductsList/>
      </main>
      <aside className={ctx.active === true ? "active" : null}>
        <CartProducts/>
      </aside>
    </div>
  );
}

export default App;
