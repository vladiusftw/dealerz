import React from "react";
import Hero from "../components/product/Hero";
import TopItems from "../components/reusable/TopItems";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <>
      <Hero />
      <TopItems />
    </>
  );
};

export default ProductDetail;
