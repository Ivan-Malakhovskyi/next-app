"use client";

import React, { useState } from "react";

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" className="" onClick={() => setShow(true)}>
        Add
      </button>
    </>
  );
};

export default AddCompanyButton;
