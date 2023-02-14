import React, { useEffect } from "react";
import Achievement from "../components/home/Achievement";
import Articles from "../components/home/Articles";
import Story from "../components/home/Story";
import Collection from "../components/reusable/Collection";
import Hero from "../components/reusable/Hero";
import Newsletter from "../components/reusable/Newsletter";
import Reviews from "../components/reusable/Reviews";
import TopItems from "../components/reusable/TopItems";

type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero
        title={"Your Premium\nSound, Unplugged!"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
        button
      />
      <Collection title={"Our Premium Collection"} />
      <TopItems />
      <Story />
      <Achievement />
      <Reviews />
      <Articles />
      <Newsletter paddingTop={[]} />
    </>
  );
};

export default Home;
