import { useState } from "react";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { Products } from "../interfaces/Products";
import { api } from "../services/api";
import { HomeStyle } from "../styles/pages/homeStyle";
import { reduceArrayInFourElements } from "../utils/reduceArrayInFourElements";

function Home() {
  const [products, setProducts] = useState<Products[]>();
  const [productsElectronics, setProductsElectronics] = useState<Products[]>();

  const [productsJewelery, setProductsJewelery] = useState<Products[]>();

  function filteredElectronics(products: Products[]): Products[] | undefined {
    if (!products) return;

    const productFiltered = products.filter((product) => {
      if (product.category === "electronics") return product;

      return false;
    });

    return productFiltered;
  }

  function filteredJewelery(products: Products[]): Products[] | undefined {
    if (!products) return;

    const productFiltered = products.filter((product) => {
      if (product.category === "jewelery") return product;

      return false;
    });

    return productFiltered;
  }

  function setElectronicsData() {
    if (!products) return;
    const electronics = filteredElectronics(products);

    const reducedElectronics = electronics
      ? reduceArrayInFourElements(electronics)
      : electronics;

    setProductsElectronics(reducedElectronics);
  }

  function setJeweleryData() {
    if (!products) return;
    const jewelerys = filteredJewelery(products);

    const reducedJewelerys = jewelerys
      ? reduceArrayInFourElements(jewelerys)
      : jewelerys;

    setProductsJewelery(reducedJewelerys);
  }

  useEffect(() => {
    const allProducts = async () => {
      const { data } = await api.get("/products");

      setProducts(data);
    };

    allProducts();
  }, []);

  useEffect(() => {
    setElectronicsData();
    setJeweleryData();
  }, [products]);

  return (
    <div className="App">
      <Header />

      <HomeStyle>
        <div className="content-products">
          <section className="section-product">
            <h2>Electronics</h2>

            <div className="products">
              <Product products={productsElectronics} />
            </div>
          </section>

          <section className="section-product">
            <h2>Jewelery</h2>

            <div className="products">
              <Product products={productsJewelery} />
            </div>
          </section>
        </div>
      </HomeStyle>
      <Footer />
    </div>
  );
}

export default Home;
