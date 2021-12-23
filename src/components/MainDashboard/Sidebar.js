import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo1 from "./img/image 2.png";
import Logo2 from "./img/CoE logo 1.png";
function Sidebar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo1} alt="logo" />
            <img src={Logo2} alt="logo2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          ></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
