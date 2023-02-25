import React from "react";
import { pageLinks, socialLinks } from "../constants/data";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const StyledNavbar = () => {
  return (
    <Container>
      <Navbar className="nav-bar" fixed="top" expand="md">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ margin: "0 auto" }}>
              {pageLinks.map((link) => {
                const { id, href, text } = link;
                return (
                  <NavLink
                    to={href}
                    key={id}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {text}
                  </NavLink>
                );
              })}
            </Nav>

            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <Nav.Link
                  data-testid={id}
                  key={id}
                  href={href}
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </Nav.Link>
              );
            })}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default StyledNavbar;
