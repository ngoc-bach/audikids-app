import React from "react";
import { pageLinks } from "../constants/data";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiShoppingBag } from 'react-icons/bi'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from "../context";
import { useUserContext } from "../user_context";


const StyledNavbar = () => {
  const { totalAmount } = useGlobalContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
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

            <NavLink to="/cart"><BiShoppingBag style={{ fontSize: "1.5rem" }} /></NavLink>
            <div className='amount-container' style={{ marginRight: "1rem" }}>
              <p className='total-amount'><Badge bg="primary">{totalAmount}</Badge></p>
            </div>
            {myUser ? <Button type="button" variant="primary" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button> : <Button type="button" variant="primary" onClick={loginWithRedirect}>Login</Button>}


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default StyledNavbar;
