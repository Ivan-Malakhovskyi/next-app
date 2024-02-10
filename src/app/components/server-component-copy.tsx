import React from "react";

export interface ServerPropsCopy {
  children?: React.ReactNode;
}

const ServerComponentCopy = ({ children }: ServerPropsCopy) => {
  console.log("ServerComponentCopy");

  return (
    <div>
      <span>ServerComponentCopy</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
