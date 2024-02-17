"use client";

import Button from "../../components/button";

export interface ErrComponentProps {
  error: Error;
  reset: () => void;
}

const ErrComponent = ({ error, reset }: ErrComponentProps) => {
  return (
    <div>
      Something went wrong, try reload page {error.message}
      <Button onClick={() => reset()}>Try reload page</Button>
    </div>
  );
};

export default ErrComponent;
