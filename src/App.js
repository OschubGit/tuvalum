import React from "react";
import "./styles/main.css";
import logo from "./logo.svg"
import Logo from "./components/Logo";
import ProductsList from "./containers/ProductsList";
import CartProducts from "./components/CartProducts";


function App() {

  return (
    <div className="layout">
      <header>
        <div className="layout__header">
          <Logo
            width="150px"
            logo={logo}
            alt="logo"
          />
        </div>
      </header>
      <main>
        <ProductsList/>
      </main>
      <aside>
        <CartProducts/>
      </aside>

      {/* <footer></footer> */}
    </div>
  );
}

export default App;
