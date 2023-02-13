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
import Hero from "../components/home/Hero";
import Collection from "../components/reusable/Collection";
import TopItems from "../components/reusable/TopItems";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Collection title={"Our Premium Collection"} />
      <TopItems />
    </>
  );
};

export default Home;
