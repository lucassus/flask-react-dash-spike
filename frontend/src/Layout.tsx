import React from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "./components/Navigation";

// TODO: Add Container
export const Layout: React.FunctionComponent = () => (
  <div>
    <Navigation />
    <Outlet />
  </div>
);
