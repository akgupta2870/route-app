import { useState } from "react";

export function Component1({ result1 }) {
  const [num1, setNum1] = useState(1);
  const method = () => {
    const newValue = num1 + 1;
    setNum1(newValue);
    result1(newValue);
  };
  return (
    <>
      <p>
        <button onClick={method}>counter number1</button>
      </p>
    </>
  );
}
