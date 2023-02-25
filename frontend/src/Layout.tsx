import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FunctionComponent = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Silly Counter</Link>
      </li>
      <li>
        <Link to="/second">Second</Link>
      </li>
      <li>
        <Link to="/third">Dash app</Link>
      </li>
    </ul>

    <Outlet />
  </div>
);
