import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white.png";
import logoblue from "../../assets/images/logo2.png";
import Button3 from "./Button3";

function NavigationThree() {
  return (
    <div className="paddingGlobal">
      <div className="containerLarge">
        <div className="navigationThree">
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
                  <Link to="/">
                  <div className="imageWrapper">
                    <img className="img-fluid" src={logoblue} alt="mywo-logo" />
                  </div>
                  </Link>
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
                  <Button3 btnname="Connexion / Inscription" to="/contact" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavigationThree;
