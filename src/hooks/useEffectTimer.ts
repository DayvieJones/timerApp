import { useEffect, useState } from "react";

const [count, setCount] = useState(0);

useEffect(() => {
  console.log(count);

  return () => {
    console.log(count, "RETURNED EFFECT");
  };
}, []);
