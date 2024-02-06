"use client";

import Image from "next/image";
import React from "react";

export interface ImageUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Uploader = ({ label, placeholder, id, ...rest }: ImageUploaderProps) => {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base color-[#111827] ">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white  border  border-[#d1d5db] border-dashed rounded-full cursor-pointer"
      >
        <Image
          className="mb-1"
          width={40}
          height={40}
          src="/icons/cloud-arrow-down.svg"
          alt="icons-upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}

        <input
          {...rest}
          type="file"
          accept="image/*"
          id={id}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default Uploader;
