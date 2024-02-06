"use client";

import { Formik } from "formik";
import Uploader from "./image-uploader";
import Input from "./input";

export type CompanyFieldsValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues = {
  name: "",
  status: "",
  country: "",
  category: "",
  date: "",
  description: "",
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldsValues) => void | Promise<void>;
}

const Form = ({ onSubmit }: CompanyFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>

        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <Uploader label="Logo" placeholder="Upload photo" />
            <Input label="Status" placeholder="Status" name="status" />
            <Input label="Country" placeholder="Country" name="country" />
          </div>{" "}
          <div className="flex flex-col flex-1 gap-5">
            <Input label="Name" placeholder="Name" name="name" />
            <Input label="Category" placeholder="Category" name="category" />
            <Input label="Joined date" type="date" name="date" />
            <Input
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
      </form>
    </Formik>
  );
};

export default Form;
