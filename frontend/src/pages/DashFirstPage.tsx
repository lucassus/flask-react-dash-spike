import React from "react";

import { DashApp } from "../components/DashApp";

export const DashFirstPage: React.FunctionComponent = () => (
  <div>
    <h3>Dash app embedded in an iframe</h3>
    <DashApp src="/dash/first-page" />
  </div>
);
