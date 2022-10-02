import React from "react";
import logo from "./logo.svg";
import customFetch from "./utils/fetchProducts";

function App() {
  const [product, setProduct] = React.useState([]);
  
  React.useEffect(() => {
    customFetch(2000, fetch('http://localhost:3004/products'))
        .then(response => response.json())
        .then((data) => setProduct(data))
        .catch(err => console.error(err));
  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Productos</p>
        {product && product.map((m, index) => (
          <p>{m.title}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
