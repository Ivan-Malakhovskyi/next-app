"use client";

import { useState, FC } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import Heading from "./Heading";
import Image from "next/image";
import Button from "./button";
import { auth } from "../firebase";
import { saveToLocalStorage } from "./SigninPage";

const initialValuesFields = {
  name: "",
  email: "",
  password: "",
};

const validationSignupSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, "Name should not contain numbers")
    .required(),
  email: yup
    .string()
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/, "Inavalid email")
    .required(),
  password: yup
    .string()
    .min(8, "Too short password")
    .max(48, "Too long password")
    .matches(/[a-zA-Z]/, "Must contain at least one letter")
    .required(),
});

const SignupPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSignup = async (values, { resetForm }) => {
    const { email, password } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;
      saveToLocalStorage(firebaseUser);

      console.log(firebaseUser);
      const currentUser = auth.currentUser;

      if (currentUser) {
        router.push("/posts");
      }
    } catch (error) {
      console.log(error.message);
    }

    resetForm();
  };

  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="py-[20px] flex">
      {" "}
      <div className="h-full min-w-[270px] bg-white dark:bg-neutral-700 w-full rounded-[30px] flex justify-center  lg:w-6/12 ml-[15px]">
        <Formik
          initialValues={initialValuesFields}
          onSubmit={handleSignup}
          validationSchema={validationSignupSchema}
        >
          <Form className="h-full p-10">
            <Heading
              tag="h2"
              text="SignUp"
              className="mb-[20px] text-[40px] font-medium text-[rgb(18, 20, 23)] leading-tight"
            />
            <p className="mb-[40px] text-base font-normal leading-snug">
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>

            <div className="flex flex-col align-center gap-[18px]">
              {" "}
              <label htmlFor="name">
                <div>Name</div>
                <Field
                  type="text"
                  name="name"
                  placeholder="name"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-[6px] text-red-600"
                />
              </label>
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
              <label htmlFor="password">
                <div> Password</div>
                <div className="relative">
                  {" "}
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500 "
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-[6px] text-red-600"
                  />
                  <div
                    className="absolute top-[15px] right-[10px] -tw-translate-y-1/2 cursor-pointer"
                    onClick={handleToggleClick}
                  >
                    {showPassword ? (
                      <Image
                        src="/icons/eye-on.svg"
                        width={20}
                        height={20}
                        alt="eye-on-icon"
                      />
                    ) : (
                      <Image
                        src="/icons/eye-off.svg"
                        width={20}
                        height={20}
                        alt="eye-off-icon"
                      />
                    )}
                  </div>
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-black-500 mt-[40px] w-full p-[10px] rounded hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
            >
              Signup
            </button>

            <p className="mt-[20px]  text-sm font-semibold">
              Have an account ?{" "}
              <Button
                onClick={() => router.push("/signin")}
                className="border-2 rounded border-yellow-300 p-[10px] hover:bg-gray-300"
              >
                {" "}
                Signin
              </Button>
            </p>
          </Form>
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

export default SignupPage;
