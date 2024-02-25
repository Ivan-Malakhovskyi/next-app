import { ReactNode } from "react";

export interface childrenType {
  children: ReactNode;
}

export interface adressInterface {
  street: string;
  city: string;
  zipcode: string;
  phone: string;
}

export interface contactType {
  id: string;
  name: string;
  email: string;
  address: adressInterface;
}

//TYPES FOR HEADING

export interface headingInteraface {
  tag?: keyof React.ReactHTML;
  text?: string;
  className?: string;
}

//TYPES FOR FORM

export type companyFieldsValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

export interface signinPageProps {
  email: string;
  password: string;
}

export interface signupPageProps {
  name: string;
  email: string;
  password: string;
}

export interface postType {
  title: string;
  body: string;
}
