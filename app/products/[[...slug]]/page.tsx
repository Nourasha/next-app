import React from "react";
type Props = {
  params: { slug: string[] };
};
const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;
