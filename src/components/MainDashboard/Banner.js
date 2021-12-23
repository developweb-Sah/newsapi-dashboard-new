import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Banner1 from "./img/jj-ying-DYHx6h3lMdY-unsplash 1.png";
import "../../App.css";

function Banner() {
  return (
    <>
      <Container>
        <img src={Banner1} alt="banner" className="banner_main" />
        <Card style={{ width: "18rem" }}>
          <Card.Body className="bg-dark text-light banner_main_box ">
            <Card.Title>
              Demonstration of Quantum Supremacy using Sycamore processor
            </Card.Title>
            <Card.Text>
              We think technology can be even more useful when computing is more
              useful and anywhere you need it.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Banner;
