"use client";

import { useEffect, useState } from "react";
import Button from "./button";

type ErrorButtonProps = {};

const ErrorButton = (props: ErrorButtonProps) => {
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
