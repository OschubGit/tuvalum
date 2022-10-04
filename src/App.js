import React, { useContext } from "react";
import { BounceLoader } from "react-spinners";
import logo from "./logo.svg";
import { getProducts } from "./utils/api/products.api";
import { CartContext } from "./utils/context/cartContext";

function App() {
  const test = useContext(CartContext);
  const [products, setProducts] = React.useState([]);
  const paginationDefault = 1;
  const [currentPage, setCurrentPage] = React.useState(paginationDefault);
  const [cartProducts, setCartProducts] = React.useState()

  React.useEffect(() => {
    const fetchData = async () => {
      const productsPages = await getProducts(currentPage);
      setProducts(productsPages.data);
    };
    fetchData();
  }, [currentPage]);

  React.useEffect(() => {
    setCartProducts(test.cart)
  }, [test.cart])

  const handlePrevPage = () => {
    setCurrentPage(currentPage - paginationDefault);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + paginationDefault);
    test.addToCart();
  };

  const handleAddToCart = (product) => {
    test.addToCart({product})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>Carrito</p>
      {cartProducts && cartProducts.map((c, index) => (
        <p key={index}>{c.title}{" "}{c.price}</p>
      ))}
      <p>Productos</p>
      {products.length === 0 ? (
        <BounceLoader />
      ) : (
        <>
          {products.map((m, index) => (
            <div key={index}>
              <p>{m.title}</p>
              <button type="button" onClick={() => handleAddToCart(m)}>
                Add to cart
              </button>
            </div>
          ))}
          <button type="button" onClick={() => handlePrevPage()}>
            Menos
          </button>
          <span>{currentPage}</span>
          <button type="button" onClick={() => handleNextPage()}>
            Mas
          </button>
        </>
      )}
    </div>
  );
}

export default App;
