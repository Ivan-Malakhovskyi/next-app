"use client";

import { FC, useEffect, useState } from "react";
import Button from "./button";

const ErrorButton: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error("Error");
    }
  }, [count]);

  return (
    <Button onClick={() => setCount(count + 1)}>Handle click Error</Button>
  );
};

export default ErrorButton;
