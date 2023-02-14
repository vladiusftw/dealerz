import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <Box bgColor={"#F4F7F8"} pb={[24, null, null, 32]}>
      <Container maxW={"8xl"} py={[12, null, null, 24]} bgColor={"white"}>
        <VStack spacing={[4, null, null, 8]}>
          <Heading fontWeight={"700"} size={"3xl"}>
            Join Our News Letters
          </Heading>
          <Text
            whiteSpace={"pre-line"}
            size={"sm"}
            textAlign={"center"}
            color={"#9A9AB0"}
          >
            {
              "Leverage agile frameworks to provide a robust synopsis for high level overviews.\nIterative approaches to corporate strategy foster"
            }
          </Text>
          <HStack
            bgColor={"#F4F7F8"}
            w={["95%", "80%", "75%", "70%"]}
            p={[2]}
            borderRadius={"xl"}
          >
            <Input
              borderColor={"transparent"}
              placeholder={"Insert your mail here"}
              size={"md"}
            />
            <Button
              bgColor={"#F86338"}
              alignItems={"center"}
              justifyContent={"center"}
              p={0}
              size={"lg"}
              border={"2px solid transparent"}
              _hover={{}}
              _focus={{}}
              _active={{}}
            >
              <Image src={"/arrowRight.png"} w={"20px"} h={"20px"} />
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Newsletter;
