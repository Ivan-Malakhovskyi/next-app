"use client";

import React from "react";
import Heading from "./Heading";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const initialValuesFields = {
  email: "",
};

const validationSignupSchema = yup.object({
  email: yup
    .string()
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/)
    .required(),
});

const ForgotPasswordPage: React.FC = () => {
  const handleResetEmail = (values, { resetForm }) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email);

    resetForm();
  };

  return (
    <section className="p-[20px] flex  ">
      {" "}
      <div className="h-full bg-white dark:bg-neutral-700 w-full rounded-[30px] flex justify-center  lg:w-6/12 ml-[15px]">
        <Formik
          initialValues={initialValuesFields}
          onSubmit={handleResetEmail}
          validationSchema={validationSignupSchema}
        >
          {({ values }) => (
            <Form className="h-full p-10">
              <Heading
                tag="h2"
                text="Restore password"
                className="mb-[20px] text-[40px] font-medium text-[rgb(18, 20, 23)] leading-tight"
              />

              <div className="flex flex-col align-center gap-[18px]">
                {" "}
                <label htmlFor="email">
                  <div>Email</div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                  />

                  <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-[6px] text-red-600"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!values.email}
                className="bg-yellow-500 text-black-500 mt-[40px] w-full p-[10px] rounded hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
        }}
      ></div>
    </section>
  );
};

export default ForgotPasswordPage;
