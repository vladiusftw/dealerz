import React from "react";
import Hero from "../components/reusable/Hero";
import Newsletter from "../components/reusable/Newsletter";
import Shopping from "../components/shop/Shopping";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <Hero
        title={"Home Shopping,\nYour Choice!"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
        button={false}
      />
      <Shopping />
      <Newsletter />
    </>
  );
};

export default Shop;
