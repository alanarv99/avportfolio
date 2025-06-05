import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar className="navbar" {...args}>
        <NavbarBrand href="./homepage.js">Alana R. Vazquez</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="./aboutme.js">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./porfolio.js">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./contact.js">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
