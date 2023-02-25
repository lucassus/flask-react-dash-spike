import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FunctionComponent = () => (
  <div>
    <ul>
      <li>
        <Link to="/">First</Link>
      </li>
      <li>
        <Link to="/second">Second</Link>
      </li>
      <li>
        <Link to="/third">Third</Link>
      </li>
    </ul>

    <Outlet />
  </div>
);
