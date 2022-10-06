import React, { useContext } from "react";
import { BounceLoader } from "react-spinners";
import Card from "../components/Card";
import { getProducts } from "../utils/api/products.api";
import { CartContext } from "../utils/context/cartContext";
import Button from "../components/Button";

const ProductsList = () => {
  const test = useContext(CartContext);
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
    test.addToCart();
  };

  const handleAddToCart = (product) => {
    test.addToCart({ product });
    console.log(product);
  };

  return products.length === 0 ? (
    <BounceLoader />
  ) : (
    <>
      <span className="title-md">Productos</span>
      <div className="layout__main">
        {products.map((m, index) => (
          <Card
            key={index}
            title={m.title}
            year={"Año " + m.year}
            src={m.image}
            onclick={() => handleAddToCart(m)}
            action="Añadir"
          />
        ))}
      <Button
        type="button"
        disabled={false}
        className="cButton cButton-secondary cButton-xs cButton-fullwidth"
        onClick={handlePrevPage}
      >
        Anterior
      </Button>
      <span>{currentPage}</span>
      <Button
        type="button"
        disabled={false}
        className="cButton cButton-secondary cButton-xs cButton-fullwidth"
        onClick={handleNextPage}
      >
        Siguiente
      </Button>
      </div>
    </>
  );
};

export default ProductsList;
