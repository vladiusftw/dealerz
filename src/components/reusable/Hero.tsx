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

type Props = {
  title: string;
  desc: string;
  button: boolean;
};

const Hero = (props: Props) => {
  return (
    <Box
      pos={"relative"}
      background={"url('/homeHeroBg.png') no-repeat"}
      backgroundSize={"cover"}
      py={[12, null, null, 24]}
    >
      <Container
        maxW={"8xl"}
        display={"flex"}
        flexDir={"column"}
        alignItems={{ base: "start", md: "end" }}
        py={[12, null, null, 24]}
      >
        <VStack alignItems={"start"} spacing={[8, null, 12]}>
          <Heading whiteSpace={"pre-line"} size={"4xl"} fontWeight={"700"}>
            {props.title}
          </Heading>
          <Text whiteSpace={"pre-line"} color={"#515151"} size={"sm"}>
            {props.desc}
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
            display={props.button ? "flex" : "none"}
          >
            Find out More
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
