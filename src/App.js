import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((e) => e + 1);

  const decrement = () => {
    if (count > 0) setCount((e) => e - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default MyComponent;
