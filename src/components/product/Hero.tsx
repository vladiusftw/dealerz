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
  const [qty, setQty] = useState<number>(0);
  const getStars = (num: number) => {
    const content = [];
    for (var i = 0; i < num; i++) {
      content.push(<Image src={"/star.png"} w={"32px"} h={"32px"} key={i} />);
    }
    return content;
  };
  return (
    <Box>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack alignItems={"start"} w={"100%"} spacing={[6]}>
          <Text fontWeight={"700"} size={"md"}>
            {"Grocery > Fruits > Japan Oranges"}
          </Text>
          <Stack
            flexDir={{ base: "column", lg: "row" }}
            flex={1}
            w={"100%"}
            gap={{ base: 6, lg: 32 }}
          >
            <VStack w={"100%"} flex={{ base: "auto", md: 1 }}>
              <Box
                w={"100%"}
                h={"550px"}
                bgColor={"#E2E2EA"}
                borderRadius={"md"}
              />
              <HStack w={"100%"}>
                <Box
                  w={"100%"}
                  h={"170px"}
                  bgColor={"#E2E2EA"}
                  borderRadius={"md"}
                />
                <Box
                  w={"100%"}
                  h={"170px"}
                  bgColor={"#E2E2EA"}
                  borderRadius={"md"}
                />
                <Box
                  w={"100%"}
                  h={"170px"}
                  bgColor={"#E2E2EA"}
                  borderRadius={"md"}
                />
              </HStack>
            </VStack>
            <VStack
              w="100%"
              flex={{ base: "auto", md: 1 }}
              alignItems={"start"}
            >
              <VStack alignItems={"start"} spacing={[4]}>
                <Heading fontWeight={"700"} size={"5xl"}>
                  Urbano Jacket
                </Heading>
                <HStack>{getStars(5)}</HStack>
                <Heading fontWeight={"700"} size={"5xl"} color={"#F86338"}>
                  $99
                </Heading>
              </VStack>
              <VStack alignItems={"start"} pt={[4]} spacing={[4]}>
                <Text fontWeight={"700"} size={"md"}>
                  Details Product
                </Text>
                <Text whiteSpace={"pre-line"} size={"sm"} color={"#666666"}>
                  {
                    "Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.\n\nDevelop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company."
                  }
                </Text>
                <HStack justifyContent={"space-between"} w={"100%"}>
                  <Text fontWeight={"700"} size={"sm"}>
                    Quantity
                  </Text>
                  <HStack bgColor={"#E2E2EA"} borderRadius={"lg"} spacing={[4]}>
                    <Button
                      variant={"unstyled"}
                      size={"sm"}
                      onClick={() =>
                        setQty((prev) => (prev > 0 ? prev - 1 : prev))
                      }
                    >
                      -
                    </Button>
                    <Text size={"sm"}>{qty}</Text>
                    <Button
                      variant={"unstyled"}
                      size={"sm"}
                      onClick={() => setQty((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </HStack>
                  <Button
                    variant={"unstyled"}
                    size={"sm"}
                    color={"#F86338"}
                    fontWeight={"700"}
                  >
                    Add note
                  </Button>
                </HStack>
                <HStack justifyContent={"space-between"} w={"100%"}>
                  <Text fontWeight={"700"} size={"sm"}>
                    Sub Total
                  </Text>
                  <Text fontWeight={"700"} size={"sm"}>
                    $10
                  </Text>
                </HStack>
                <HStack spacing={[6]}>
                  <Button
                    variant={"ghost"}
                    border={"2px solid #F86338"}
                    rightIcon={
                      <Image src={"/orangeHeart.png"} w={"20px"} h={"20px"} />
                    }
                    color={"#F86338"}
                    py={[6]}
                    px={[6]}
                    size={"sm"}
                    fontWeight={"700"}
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                  >
                    Wishlist
                  </Button>
                  <Button
                    variant={"ghost"}
                    bgColor={"#F86338"}
                    border={"2px solid transparent"}
                    rightIcon={
                      <Image src={"/whiteCart.png"} w={"20px"} h={"20px"} />
                    }
                    color={"white"}
                    py={[6]}
                    px={[6]}
                    size={"sm"}
                    fontWeight={"700"}
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                  >
                    Add to Cart
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
