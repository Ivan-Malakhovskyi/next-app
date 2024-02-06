"use client";

import { useState } from "react";
import Button from "./button";
import CompanyFromModal from "./company-form-modal";

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add</Button>
      <CompanyFromModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
