import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button1 from "../common/Button1";

function Navigation() {
  return (
    <div className="navigation">
      <Navbar expand="lg" className="">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Link className="nav-link" to="/service">
                Notre concept
              </Link>
              <Link className="nav-link" to="/listing">
                Nos événements
              </Link>
              <Button1 btnname="Inscription" link="/Inscription" />
              <Button1 btnname="Connexion" link="/Contact" />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

export default Navigation;
