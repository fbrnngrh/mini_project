import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import imgThankYou from "../assets/images/Illustration - composition.png";
import '../styles/thankyou.css';
const ThankYou = () => {
  return (
    <Helmet title="Thank You">
      <section className="thankyou__section">
        <Container>
          <Row>
            <Col lg="12" md='12' className="align-items-center justify-content-center">
              <div className="thankyou__image ">
                <img  src={imgThankYou} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ThankYou;
