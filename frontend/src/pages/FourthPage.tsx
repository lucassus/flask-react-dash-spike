import React from "react";

export const FourthPage: React.FunctionComponent = () => (
  <div>
    <h3>Dash app embedded in an iframe</h3>
    <iframe
      src="/dash-2"
      style={{
        position: "fixed",
        border: "none",
        width: "100%",
        height: "100%",
      }}
    />
  </div>
);
