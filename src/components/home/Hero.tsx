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

type Props = {};

const Hero = (props: Props) => {
  return (
    <Box
      pos={"relative"}
      background={"url('/homeHeroBg.png') no-repeat"}
      backgroundSize={"cover"}
      backgroundPosition={"30%"}
      py={[12]}
    >
      <Container
        maxW={"8xl"}
        display={"flex"}
        flexDir={"column"}
        alignItems={{ base: "start", md: "end" }}
        py={[36]}
      >
        <VStack alignItems={"start"} spacing={[8, null, 12]}>
          <Heading whiteSpace={"pre-line"} size={"4xl"} fontWeight={"700"}>
            {"Your Premium\nSound, Unplugged!"}
          </Heading>
          <Text whiteSpace={"pre-line"} color={"#515151"}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
          </Text>
          <Button
            variant={"ghost"}
            bgColor={"#F86338"}
            fontWeight={"700"}
            size={"sm"}
            color={"white"}
            border={"2px solid white"}
            py={[6]}
            px={[6]}
            _active={{}}
            _focus={{}}
            _hover={{
              bgColor: "white",
              border: "2px solid #F86338",
              color: "black",
            }}
          >
            Find out More
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
