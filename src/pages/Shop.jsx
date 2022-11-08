import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";


const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "keyboard") {
      const filteredProducts = products.filter(
        (item) => item.category === "keyboard"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "switch") {
      const filteredProducts = products.filter(
        (item) => item.category === "switch"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "keycaps") {
      const filteredProducts = products.filter(
        (item) => item.category === "keycaps"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "plate") {
      const filteredProducts = products.filter(
        (item) => item.category === "plate"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "deskmat") {
      const filteredProducts = products.filter(
        (item) => item.category === "deskmat"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="shop">
      <CommonSection title="Showcase" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="switch">Switch</option>
                  <option value="keycaps">Keycaps</option>
                  <option value="plate">Plate</option>
                  <option value="deskmat">Deskmat</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6"  className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By Category</option>
                  <option value="ascending">Ascending</option>
                  <option value="decending">Decending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Product Are Found</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
