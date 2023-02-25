import React from "react";

export const ThirdPage: React.FunctionComponent = () => {
  return (
    <div>
      <h3>Dash app embedded in an iframe</h3>
      <iframe src="/dash" width="100%" />
    </div>
  );
};
