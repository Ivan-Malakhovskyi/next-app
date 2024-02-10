import React from "react";

export interface ServerProps {
  children?: React.ReactNode;
}

const ServerComponent = ({ children }: ServerProps) => {
  console.log("ServerComponent");
  return (
    <div>
      <span>ServerComponent</span>
      {children}
    </div>
  );
};

export default ServerComponent;
