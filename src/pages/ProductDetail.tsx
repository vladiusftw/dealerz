import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Description from "../components/product/Description";
import Hero from "../components/product/Hero";
import TopItems from "../components/reusable/TopItems";

type Props = {};

const ProductDetail = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Description />
      <TopItems />
      <Box py={[12, null, null, 24]} bgColor={"#F4F7F8"} />
    </>
  );
};

export default ProductDetail;
