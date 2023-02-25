import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const SillyCounterPage: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Silly react counter</h3>

      <Button onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </Button>

      <Button
        onClick={() => setCount(0)}
        variant="outline-danger"
        disabled={count === 0}
      >
        Clear
      </Button>
    </div>
  );
};
