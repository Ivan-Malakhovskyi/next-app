import React from "react";

const ProductDetails = ({ params }) => {
  return (
    <div>
      <h1>ProductDetails {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
