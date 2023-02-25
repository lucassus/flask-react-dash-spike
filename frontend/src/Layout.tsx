import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Layout: React.FunctionComponent = () => (
  <div>
    <Nav>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Silly Counter
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/second">
          Second
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/third">
          Dash app
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Outlet />
  </div>
);
