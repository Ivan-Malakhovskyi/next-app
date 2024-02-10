"use client";

import { useState } from "react";
import Button from "./button";
import dynamic from "next/dynamic";

const CompanyFromModal = dynamic(() => import("./company-form-modal"), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFromModal
        onSubmit={(e) => console.log(e.target.value)}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
