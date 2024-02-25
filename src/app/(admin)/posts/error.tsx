"use client";

import Button from "../../components/button";
import { FC } from "react";
export interface ErrComponentProps {
  error: Error;
  reset: () => void;
}

const ErrComponent: FC<ErrComponentProps> = ({ error, reset }) => {
  return (
    <div>
      Something went wrong, try reload page {error.message}
      <Button onClick={() => reset()}>Try reload page</Button>
    </div>
  );
};

export default ErrComponent;
