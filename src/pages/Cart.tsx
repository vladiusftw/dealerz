import React, { useEffect } from "react";
import CartHero from "../components/cart/Hero";
import Hero from "../components/reusable/Hero";
import Newsletter from "../components/reusable/Newsletter";
import TopItems from "../components/reusable/TopItems";

type Props = {};

const Cart = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero
        title={"Our Gallery,\nYour Dreams!"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
        button={false}
      />
      <CartHero />
      <TopItems />
      <Newsletter paddingTop={[24, null, null, 32]} />
    </>
  );
};

export default Cart;
