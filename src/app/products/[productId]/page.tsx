import React from "react";

export interface ProductDetailsProps {
  params: { id: string };
}

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const ProductDetails = ({ params }) => {
  return (
    <div>
      <h1>ProductDetails {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
