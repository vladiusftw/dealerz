import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
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
      <Newsletter />
    </>
  );
};

export default Home;
