import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Whishlist from "../Pages/Whishlist";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cartReducer);
  const wishlist = useSelector((state) => state.wishlistReducer);
  return (
    <>
      <Navbar bg="info" className="position-sticky" data-bs-theme="info">
        <Container>
          <Navbar.Brand href="#">
            <i class="fa-solid fa-box"></i>EKart
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="text-dark"
                to={"/"}
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-dark"
                to={"/cart"}
                style={{ textDecoration: "none" }}
              >
                Cart <Badge bg="secondary">{cart.length}</Badge>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-dark"
                to={"/whishlist"}
                style={{ textDecoration: "none" }}
              >
                Whishlist <Badge bg="secondary">{wishlist.length}</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
