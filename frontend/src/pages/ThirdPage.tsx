import React from "react";

export const ThirdPage: React.FunctionComponent = () => (
  <div>
    <h3>Dash app embedded in an iframe</h3>
    <iframe
      src="/dash"
      style={{
        position: "fixed",
        border: "none",
        width: "100%",
        height: "100%",
      }}
    />
  </div>
);
