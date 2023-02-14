import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
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
            <Stack
              w={"100%"}
              flex={0.8}
              alignItems={"start"}
              gap={[8]}
              flexDir={["column", null, "row", "column"]}
            >
              <VStack
                alignItems={"start"}
                w={"100%"}
                bgColor={"white"}
                px={[8, null, null, 6, 12]}
                py={[14, null, null, 12]}
                borderRadius={"lg"}
                spacing={[4, null, null, 6]}
              >
                <Text fontWeight={"700"} size={"lg"}>
                  Have a Coupon?
                </Text>
                <Input
                  border={"2px solid #F86338"}
                  placeholder={"Input your email here"}
                  size={"sm"}
                  borderRadius={"lg"}
                />
                <Button
                  variant={"ghost"}
                  bgColor={"#F86338"}
                  color={"white"}
                  fontWeight={"700"}
                  size={"sm"}
                  px={[8]}
                  py={[6]}
                  border={"2px solid transparent"}
                  _hover={{
                    bgColor: "transparent",
                    border: "2px solid #F86338",
                    color: "#11142D",
                  }}
                >
                  Apply
                </Button>
              </VStack>
              <VStack
                alignItems={"start"}
                w={"100%"}
                spacing={[4, null, null, 6]}
              >
                <Text fontWeight={"700"} size={"md"}>
                  Cart Totals
                </Text>
                <HStack w={"100%"}>
                  <Text flex={0.25} fontWeight={"700"} size={"sm"}>
                    Subtotal
                  </Text>
                  <Text flex={0.75} size={"sm"}>
                    $150
                  </Text>
                </HStack>
                <HStack w={"100%"}>
                  <Text flex={0.25} fontWeight={"700"} size={"sm"}>
                    Shipping
                  </Text>
                  <Text flex={0.75} size={"sm"}>
                    Free Shipping
                  </Text>
                </HStack>
                <HStack w={"100%"}>
                  <Box flex={0.25} />
                  <HStack
                    w={"100%"}
                    flex={0.75}
                    justifyContent={"space-between"}
                  >
                    <Text size={"sm"}>Shipping to Sidney</Text>
                    <Button
                      variant={"unstyled"}
                      fontWeight={"700"}
                      color={"#F86338"}
                      size={"sm"}
                    >
                      Change
                    </Button>
                  </HStack>
                </HStack>
                <HStack w={"100%"}>
                  <Text flex={0.25} fontWeight={"700"} size={"sm"}>
                    Total
                  </Text>
                  <Text flex={0.75} fontWeight={"700"} size={"sm"}>
                    $350
                  </Text>
                </HStack>
                <Button
                  variant={"ghost"}
                  bgColor={"#F86338"}
                  color={"white"}
                  fontWeight={"700"}
                  size={"sm"}
                  px={[8]}
                  py={[6]}
                  w={"100%"}
                  border={"2px solid transparent"}
                  _hover={{
                    bgColor: "transparent",
                    border: "2px solid #F86338",
                    color: "#11142D",
                  }}
                >
                  Checkout
                </Button>
              </VStack>
            </Stack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
