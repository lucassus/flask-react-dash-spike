import React from "react";

import { DashApp } from "../DashApp";

export const ThirdPage: React.FunctionComponent = () => (
  <div>
    <h3>Dash app embedded in an iframe</h3>
    <DashApp src="/dash/first-page" />
  </div>
);
