import React from "react";

import { DashApp } from "../DashApp";

export const FourthPage: React.FunctionComponent = () => (
  <div>
    <h3>Dash app embedded in an iframe</h3>
    <DashApp src="/dash/second-page" />
  </div>
);
