"use client";

import { useState, FC } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Button from "./button";
import { signIn } from "next-auth/react";
import { signinPageProps } from "../../types";

const initialValuesFields = {
  email: "",
  password: "",
};

const validationSigninSchema = yup.object({
  email: yup
    .string()
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/, "Inavlid email")
    .required(),
  password: yup
    .string()
    .min(8, "Too short password")
    .max(48, "Too long password")
    .matches(/[a-zA-Z]/, "Must contain at least one letter")
    .required(),
});

const SigninPage: FC<signinPageProps> = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = (values, { resetForm }) => {
    const { email, password } = values;

    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/posts",
    });

    resetForm();
  };

  return (
    <section className="p-[20px] flex  ">
      {" "}
      <div className="h-full bg-white dark:bg-neutral-700 w-full rounded-[30px] flex justify-center  lg:w-6/12 ">
        <Formik
          initialValues={initialValuesFields}
          onSubmit={handleSignin}
          validationSchema={validationSigninSchema}
        >
          {({ values: { email, password } }) => (
            <Form className="h-full p-10">
              <Heading
                tag="h2"
                text="SignIn"
                className="mb-[20px] text-[40px] font-medium text-[rgb(18, 20, 23)] leading-tight"
              />
              <p className="mb-[40px] text-base font-normal leading-snug">
                Welcome back! Please enter your credentials to access your
                account and continue your search for an teacher.
              </p>
              <div className="flex flex-col align-center gap-[18px]">
                <label htmlFor="email">
                  <div>Email</div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                    requried
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
                disabled={!email || !password}
                className="bg-yellow-500 text-black-500 mt-[40px] w-full p-[10px] rounded hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
              >
                Signin
              </button>

              <p className="mt-[20px]  text-sm font-semibold">
                Don't have an account ?{" "}
                <Button
                  onClick={() => router.push("/signup")}
                  className="border-2 rounded border-yellow-300 p-[10px] hover:bg-gray-300"
                >
                  {" "}
                  Signup
                </Button>
              </p>

              <div>
                <Link
                  href="/forgot-password"
                  className="mt-[20px] text-blue-500 font-semibold "
                >
                  Forgot password?
                </Link>
              </div>
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

export default SigninPage;
