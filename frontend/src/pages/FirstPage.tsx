import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const FirstPage: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Silly react counter</h3>

      <Button onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </Button>
    </div>
  );
};
