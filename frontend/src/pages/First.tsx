import React, { useState } from "react";
import { Link } from "react-router-dom";

export const First: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  // TODO: Simplify these routes, must be embedded in the router provider...
  return (
    <div>
      <ul>
        <li>
          <Link to="/">First</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
      </ul>

      <h1>First</h1>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
};
