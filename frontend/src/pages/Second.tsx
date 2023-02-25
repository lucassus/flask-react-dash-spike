import React from "react";
import {Link} from "react-router-dom";

export const Second: React.FunctionComponent = () => {
  return (
    <div>
        <ul>
      <li><Link to="/">First</Link></li>
      <li><Link to="/second">Second</Link></li>
    </ul>

      <h1>Second</h1>
    </div>
  )
}
