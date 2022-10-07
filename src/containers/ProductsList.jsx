import React, { useContext } from "react";
import { BounceLoader } from "react-spinners";
import Card from "../components/Card";
import { getProducts } from "../utils/api/products.api";
import { CartContext } from "../utils/context/cartContext";
import Pagination from "../components/Pagination";
import Title from "../components/Title";

const ProductsList = () => {
  const ctx = useContext(CartContext);
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

  const handleAddToCart = (product) => {
    ctx.addToCart({ product });
  };

  return products.length === 0 ? (
    <BounceLoader />
  ) : (
    <>
      <div className="layout__title">
        <Title text={"Productos"} size={"md"}/>
      </div>
      <div className="layout__main">
        {products.map((m, index) => (
          <Card
            key={index}
            title={m.title}
            year={"Año " + m.year}
            price={m.price}
            src={m.image}
            onclick={() => handleAddToCart(m)}
            action="Añadir"
          />
        ))}
        <div></div>
          <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            currentPage={currentPage}
            color="primary"
            fullwidth
            variant="outlined"
          />
        <div></div>
      </div>
    </>
  );
};

export default ProductsList;
