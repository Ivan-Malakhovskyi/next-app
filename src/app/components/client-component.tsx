"use client";

import React from "react";

export interface ClientProps {
  children?: React.ReactNode;
}

const ClientComponent = ({ children }: ClientProps) => {
  console.log("ClientComponent");
  return (
    <div>
      <span>ClientComponent</span>
      {children}
    </div>
  );
};

export default ClientComponent;
