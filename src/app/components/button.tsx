"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="py-[10px] px-[20px] rounded-[4px] text-[#fafafa] text-[16px] text-center bg-[#111827] "
    />
  );
};

export default Button;
