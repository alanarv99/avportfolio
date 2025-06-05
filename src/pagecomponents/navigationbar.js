import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";

import "./navigationbar.css";

export default function NavigationBar() {
  return (
    <Container fluid className="NavContainer">
      <Navbar expand="md" sticky="top" className="body-tertiary">
        <NavbarBrand>
          <NavLink className="Name" to="/">
            Alana R. Vazquez
          </NavLink>
        </NavbarBrand>
        <NavbarToggle
          aria-controls="basic-navbar-nav"
          className="NavbarToggle"
        />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="NavItem" to="/About">
              About
            </NavLink>
            <NavLink className="NavItem" to="/Portfolio">
              Portfolio
            </NavLink>
            <NavLink className="NavItem" to="/Contact">
              Contact
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </Container>
  );
}
