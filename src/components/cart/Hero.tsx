import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const items = [
    {
      name: "Tropical Playsuit",
      size: "M",
      qty: 5,
      price: 99,
    },
    {
      name: "Tropical Playsuit",
      size: "M",
      qty: 5,
      price: 99,
    },
    {
      name: "Tropical Playsuit",
      size: "M",
      qty: 5,
      price: 99,
    },
    {
      name: "Tropical Playsuit",
      size: "M",
      qty: 5,
      price: 99,
    },
  ];
  const [qtyStates, setQtyStates] = useState([0, 0, 0, 0]);
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack alignItems={"start"} spacing={[12]}>
          <HStack spacing={[8]}>
            <Text fontWeight={"700"} size={"sm"}>
              1. Shopping Cart
            </Text>
            <Text fontWeight={"700"} size={"sm"} color={"#9A9AB0"}>
              2. Checkout
            </Text>
            <Text fontWeight={"700"} size={"sm"} color={"#9A9AB0"}>
              3. Order Succesed
            </Text>
          </HStack>
          <Heading fontWeight={"700"} size={"3xl"}>
            My Cart
          </Heading>
          <Stack w={"100%"} flexDir={{ base: "column", lg: "row" }} gap={[24]}>
            <VStack
              w={"100%"}
              flex={1}
              alignItems={"start"}
              spacing={[4, null, 8, 12]}
            >
              {items.map((item, index) => {
                return (
                  <HStack w={"100%"} spacing={[8]}>
                    <Box
                      w={"250px"}
                      h={"200px"}
                      bgColor={"#E2E2EA"}
                      borderRadius={"lg"}
                    />
                    <VStack alignItems={"start"} w={"100%"}>
                      <Text fontWeight={"700"} size={"md"}>
                        {item.name}
                      </Text>
                      <HStack
                        justifyContent={"space-between"}
                        w={"100%"}
                        maxW={"xs"}
                      >
                        <Text fontWeight={"700"} size={"sm"} pr={[10]}>
                          Size
                        </Text>
                        <HStack justifyContent={"space-between"} w={"100%"}>
                          <Text fontWeight={"700"} size={"sm"}>
                            :
                          </Text>
                          <Text fontWeight={"700"} size={"sm"}>
                            {item.size}
                          </Text>
                        </HStack>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        w={"100%"}
                        maxW={"xs"}
                      >
                        <Text fontWeight={"700"} size={"sm"}>
                          Quantity
                        </Text>
                        <HStack justifyContent={"space-between"} w={"100%"}>
                          <Text fontWeight={"700"} size={"sm"}>
                            :
                          </Text>
                          <HStack
                            justifyContent={"end"}
                            w={"100%"}
                            spacing={[6]}
                            pr={[1]}
                          >
                            <Text
                              fontWeight={"700"}
                              size={"sm"}
                              cursor={"pointer"}
                              userSelect={"none"}
                              onClick={() => {
                                setQtyStates((prev) =>
                                  prev[index] > 0
                                    ? Object.assign([...qtyStates], {
                                        [index]: prev[index] - 1,
                                      })
                                    : prev
                                );
                              }}
                            >
                              -
                            </Text>
                            <Text
                              fontWeight={"700"}
                              size={"sm"}
                              userSelect={"none"}
                            >
                              {qtyStates[index]}
                            </Text>
                            <Text
                              fontWeight={"700"}
                              size={"sm"}
                              cursor={"pointer"}
                              userSelect={"none"}
                              onClick={() => {
                                setQtyStates((prev) =>
                                  Object.assign([...qtyStates], {
                                    [index]: prev[index] + 1,
                                  })
                                );
                              }}
                            >
                              +
                            </Text>
                          </HStack>
                        </HStack>
                      </HStack>
                      <HStack
                        justifyContent={"space-between"}
                        w={"100%"}
                        maxW={"md"}
                        pr={[5]}
                      >
                        <Text fontWeight={"700"} size={"4xl"} color={"#F86338"}>
                          ${item.price}
                        </Text>
                        <HStack>
                          <Button
                            variant={"ghost"}
                            border={"2px solid #F86338"}
                            p={0}
                            size={"md"}
                          >
                            <Image src={"/trash.png"} w={"24px"} h={"24px"} />
                          </Button>
                          <Button
                            variant={"ghost"}
                            border={"2px solid #F86338"}
                            rightIcon={
                              <Image
                                src={"/orangeHeart.png"}
                                w={"24px"}
                                h={"24px"}
                              />
                            }
                            size={"md"}
                            color={"#F86338"}
                          >
                            Wishlist
                          </Button>
                        </HStack>
                      </HStack>
                    </VStack>
                  </HStack>
                );
              })}
            </VStack>
            <VStack w={"100%"} flex={0.8} alignItems={"start"}>
              <Text>hi</Text>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
