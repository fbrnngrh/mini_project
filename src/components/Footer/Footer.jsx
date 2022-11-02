import React from "react";
import "./footer.css";
import logo from "../../assets/images/brand-logo-full.png";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="4" className=" mb-4" md="6">
            <div className="logo ">
              <img className=" w-50" src={logo} alt="logo" />
            </div>
            <p className="footer__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              quibusdam dolore autem magnam fuga ullam, ipsam ad. Autem nihil a,
              alias voluptate voluptates laborum, expedita dolor culpa non,
              voluptatum beatae.
            </p>
          </Col>
          <Col lg="2" md="3" className=" mb-4">
            <div className="footer__quick-link ps-lg-3">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Keyboard</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Switch</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Keycaps</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Plate</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="3" className=" mb-lg-4">
          <div className="footer__quick-link">
              <h4 className="quick__link-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3"   >
          <div className="footer__quick-link">
              <h4 className="quick__link-title">Contacts</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>
                    1234 Street Name, City Name, United States
                  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i className="ri-phone-line"></i></span>
                  <p>
                    +1 234 567 890
                  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i className="ri-instagram-line pe-2"></i></span>
                <span><i className="ri-twitter-line"></i></span>
                <span><i className="ri-facebook-box-line ps-2"></i></span>
                  <p>
                    Social Media
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-center pt-lg-5">
              © {year} All Rights Reserved. Develop by{" Febrian Bayu Nugroho "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
