import { useState } from "react";

export const Test01 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>count: {count}</h2>
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};
