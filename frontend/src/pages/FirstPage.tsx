import React, { useState } from "react";

export const FirstPage: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>First</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </button>
    </div>
  );
};
