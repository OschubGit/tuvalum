import React from "react";
import { BounceLoader } from "react-spinners";
import logo from "./logo.svg";
import { getProducts } from "./utils/api/products.api";

function App() {
  const [products, setProducts] = React.useState([]);
  const paginationDefault = 1;
  const [currentPage, setCurrentPage] = React.useState(paginationDefault);

  React.useEffect(() => {
    const fetchData = async () => {
      const productsPages = await getProducts(currentPage);
      setProducts(productsPages.data);
    };
    fetchData();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - paginationDefault);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + paginationDefault);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Productos</p>
        {products.length === 0 ? (
          <BounceLoader />
        ) : (
          <>
            {products.map((m, index) => (
              <p key={index}>{m.title}</p>
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
      </header>
    </div>
  );
}

export default App;
