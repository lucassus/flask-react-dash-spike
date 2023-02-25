import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export const Navigation = () => (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="/">CABLES</Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Silly Counter
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/expenses">
            Expenses
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/third">
            Dash app
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/fourth">
            Second Dash app
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);
