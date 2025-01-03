import React, { useState, useEffect } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button1 from "../common/Button1";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navigation">
      <Navbar expand="lg" className={`fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container"> 
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
                    <img className='img-fluid' src={logo} alt="logo" />
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
                <Button1 btnname="Inscription" link="/Inscription" />
                <Button1 btnname="Connexion" link="/Contact" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
