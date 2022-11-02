import React, { useState, useEffect } from "react";
import "../styles/home.css";
import "../styles/clock.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products.js";

import Helmet from "../components/Helmet/Helmet";
import Clock from "../components/UI/Clock";

import heroImg from "../assets/images/hero-img4.png";
import counterImg from "../assets/images/counter-timer-img2.png";

import { Container, Row, Col } from "reactstrap";

import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [deskmatProducts, setDeskmatProducts] = useState([]);
  const [plateProducts, setPlateProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "keyboard"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "switch"
    );
    const filteredDeskmatProducts = products.filter(
      (item) => item.category === "deskmat"
    );
    const filteredPlateProducts = products.filter(
      (item) => item.category === "plate"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "keycaps"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setDeskmatProducts(filteredDeskmatProducts);
    setPlateProducts(filteredPlateProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product {year}</p>
                <h2>Choose Your Own Dream Mechanical Keyboard</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime vel obcaecati rerum architecto ab dolore id dolores
                  quis totam sint consectetur, pariatur molestiae fuga odit
                  ullam facilis! Molestias, aliquam debitis?
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6" className="">
              <div className="hero__img img-fluid text-center">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-4">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-4">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count ">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content  ">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Products</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop/">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end img-fluid">
              <img className="pb-md-5" src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals mb-5">
        <Container>
          <Row>
          <Col lg="12" className="text-center pb-md-4  mb-md-5">
              <h2 className="section_title">New Arrival</h2>
            </Col>
            <ProductList data={deskmatProducts} />
            <ProductList data={plateProducts} />
          </Row>
        </Container>
      </section>

      <section className="product__popular">
        <Container>
          <Row>
          <Col lg="12" className="text-center pb-md-4  mb-md-5">
              <h2 className="section_title">Product Popular</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
