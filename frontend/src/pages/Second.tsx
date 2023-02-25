import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Second: React.FunctionComponent = () => {
  const [message, setMessage] = useState("...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  }, []);

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

      <h1>message from the server: {message}</h1>
    </div>
  );
};
