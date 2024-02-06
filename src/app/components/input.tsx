"use client";

import { Field } from "formik";

export interface InputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  name?: string;
  type?: string;
}

const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-[#111827]">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-[12px] h-11 text-[14px] rounded border border-solid border-[#d1d5db] shadow"
      />
    </div>
  );
};

export default Input;
