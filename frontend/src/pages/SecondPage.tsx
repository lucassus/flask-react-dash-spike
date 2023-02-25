import React, { useEffect, useState } from "react";

export const SecondPage: React.FunctionComponent = () => {
  const [message, setMessage] = useState("...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  }, []);

  return (
    <div>
      <h3>Message from the server: {message}</h3>
    </div>
  );
};
