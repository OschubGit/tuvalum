import React from "react";
import { BounceLoader } from "react-spinners";
import logo from "./logo.svg";
import {getProducts} from "./utils/api/products.api"

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.data);
    };
    fetchData();
  }, []);

  console.log(process.env)
  console.log(products)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Productos</p>
        {products.length === 0 ? (
          <BounceLoader/>
        ) : products.map((m, index) => (
          <p key={index}>{m.title}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
