import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white.png";
import Button3 from "./Button3";

function NavigationThree() {
  return (
    <>
      <div className="paddingGlobal">
        <div className="containerLarge">
          <div className="navigationThree">
            <Navbar expand="lg" className="">
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="nav-link" to="/service">
                    Notre concept
                  </Link>
                  <Link className="nav-link" to="/listing">
                    Nos événemments
                  </Link>
                  <Button3
                    btnname="Connexion / Inscription"
                    to="/contact"
                  />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationThree;
