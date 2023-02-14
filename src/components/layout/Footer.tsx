import {
  Box,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <Stack
          flex={1}
          flexDir={{ base: "column", md: "row" }}
          gap={[4, null, 8, 12, 16]}
        >
          <Box
            flex={["auto", null, 1, 0.5]}
            h={["300px", null, null, null, "360px"]}
            bgColor={"#E2E2EA"}
            w={["70%", "50%", "100%"]}
          />
          <VStack flex={1} alignItems={"start"}>
            <Stack
              justifyContent={"space-between"}
              w={"100%"}
              flexDir={{ base: "column", md: "row" }}
              mb={[4]}
            >
              <Text color={"#F86338"} fontWeight={"700"} size={"3xl"}>
                Dealerz.
              </Text>
              <HStack spacing={[2, null, null, 4]}>
                <Image
                  src={"/yt.png"}
                  w={"40px"}
                  h={"40px"}
                  cursor={"pointer"}
                />
                <Image
                  src={"/fb.png"}
                  w={"40px"}
                  h={"40px"}
                  cursor={"pointer"}
                />
                <Image
                  src={"/twitter.png"}
                  w={"40px"}
                  h={"40px"}
                  cursor={"pointer"}
                />
                <Image
                  src={"/ig.png"}
                  w={"40px"}
                  h={"40px"}
                  cursor={"pointer"}
                />
              </HStack>
            </Stack>
            <Text color={"#11142D"} fontWeight={"700"} size={"sm"}>
              Privacy Policy
            </Text>
            <Text color={"#11142D"} fontWeight={"700"} size={"sm"}>
              Terms and Condition
            </Text>
            <VStack justifyContent={"end"} flex={1}>
              <Text color={"#11142D"} fontWeight={"700"} size={"sm"}>
                @2020 TanahAir Studio. All rights reserved.
              </Text>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
