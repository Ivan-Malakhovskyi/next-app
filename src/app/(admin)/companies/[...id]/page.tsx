import React from "react";

export interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  return <div>Page {String(params.id)}</div>;
};

export default Page;
