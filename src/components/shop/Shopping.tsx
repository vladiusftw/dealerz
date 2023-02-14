import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Slider } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Pagination from "@mui/material/Pagination";

type Props = {};

const Shopping = (props: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F86338",
      },
    },
  });
  const [value, setValue] = useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const categories = [
    "All Products",
    "Coats & Jacket",
    "Dressed",
    "Playsuit",
    "Short",
    "Skirt",
    "T-Shirt",
  ];
  const items = [
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      category: "watchmenow",
      price: 99,
    },
  ];
  const featured = [
    {
      name: "Tropical Playsuit",
      price: 100,
    },
    {
      name: "Tropical Playsuit",
      price: 100,
    },
    {
      name: "Tropical Playsuit",
      price: 100,
    },
    {
      name: "Tropical Playsuit",
      price: 100,
    },
    {
      name: "Tropical Playsuit",
      price: 100,
    },
    {
      name: "Tropical Playsuit",
      price: 100,
    },
  ];

  const getStars = (num: number) => {
    const content = [];
    for (var i = 0; i < num; i++) {
      content.push(<Image src={"/star.png"} w={"16px"} h={"16px"} />);
    }
    return content;
  };

  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <Stack
          gap={{ base: 4, md: 16 }}
          alignItems={"start"}
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack
            alignItems={"start"}
            flex={["auto", null, 0.4, 0.3]}
            w={"100%"}
          >
            <HStack
              border={"1px solid #11142D"}
              borderRadius={"md"}
              px={[4]}
              py={[1]}
              w={"100%"}
              mb={[0, null, 8, null, 12]}
              mt={[2]}
              alignItems={"center"}
            >
              <Input
                borderColor={"transparent"}
                placeholder={"Search products"}
                p={0}
                size={"md"}
              />
              <Image src={"/search.png"} w={"20px"} h={"20px"} />
            </HStack>
            <VStack w={"100%"}>
              <HStack justifyContent={"space-between"} w={"100%"}>
                <Text fontWeight={"700"} color={"#11142D"} size={"md"}>
                  Price
                </Text>
                <Button variant={"unstyled"} p={0} size={"xs"}>
                  <Image src={"/filter.png"} w={"18px"} h={"18px"} />
                </Button>
              </HStack>
              <ThemeProvider theme={theme}>
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  color={"primary"}
                  size={"small"}
                />
              </ThemeProvider>
              <HStack justifyContent={"space-between"} w={"100%"}>
                <Text color={"#11142D"} size={"sm"}>
                  Range
                </Text>
                <Text color={"#11142D"} size={"sm"}>
                  ${value[0]}-${value[1]}
                </Text>
              </HStack>
            </VStack>

            <VStack
              alignItems={"start"}
              pt={[0, null, 8, null, 12]}
              pb={[0, null, 8, null, 12]}
              spacing={[4]}
              w={"100%"}
            >
              <HStack w={"100%"}>
                <Text fontWeight={"700"} size={"md"}>
                  Product Categories
                </Text>
                <Box display={{ base: "block", md: "none" }} mt={[12]}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      bgColor={"#F86338"}
                      color={"white"}
                      border={"2px solid white"}
                      rightIcon={<ChevronDownIcon />}
                      _hover={{}}
                      _active={{}}
                      _focus={{}}
                    >
                      {"test"}
                    </MenuButton>
                    <MenuList>
                      {categories.map((item, index) => {
                        return (
                          <MenuItem
                            key={index}
                            //   color={category == item ? "#F86338" : "white"}
                            //   onClick={() => setCategory(item)}
                          >
                            {item}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </Box>
              </HStack>
              <Box display={{ base: "none", md: "block" }} w={"100%"}>
                {categories.map((item, index) => {
                  return (
                    <HStack
                      cursor={"pointer"}
                      w={"100%"}
                      justifyContent={"space-between"}
                      key={index}
                    >
                      <Text fontWeight={"700"} size={"sm"}>
                        {item}
                      </Text>
                      <Image src={"/rightArrow.png"} w={"7px"} h={"12px"} />
                    </HStack>
                  );
                })}
              </Box>
            </VStack>
            <Box display={{ base: "none", md: "block" }}>
              <Text pb={[2, null, null, 4]} fontWeight={"700"} size={"md"}>
                Featured Product
              </Text>
              <VStack w={"100%"} alignItems={"start"} spacing={[2, null, 4, 6]}>
                {featured.map((item, index) => {
                  return (
                    <HStack w={"100%"} spacing={[4]}>
                      <Box
                        w={"80px"}
                        h={"80px"}
                        bgColor={"#E2E2EA"}
                        borderRadius={"md"}
                      />
                      <VStack alignItems={"start"}>
                        <Text fontWeight={"700"} size={"sm"}>
                          {item.name}
                        </Text>
                        <Text fontWeight={"500"} size={"xs"} color={"#F86338"}>
                          ${item.price}
                        </Text>
                      </VStack>
                    </HStack>
                  );
                })}
              </VStack>
            </Box>
          </VStack>
          <VStack flex={1} w={"100%"} spacing={[8]}>
            <Grid
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", null]}
              columnGap={[4]}
              rowGap={[4]}
              w={"100%"}
            >
              {items.map((item, index) => {
                return (
                  <GridItem>
                    <VStack
                      bgColor={"white"}
                      borderRadius={"lg"}
                      pos={"relative"}
                      py={[4, null, null, 6]}
                    >
                      <Box
                        pos={"absolute"}
                        top={"1em"}
                        right={"1em"}
                        bgColor={"#FFDDD3"}
                        px={[2]}
                        py={[1]}
                        borderRadius={"md"}
                        cursor={"pointer"}
                      >
                        <Image src={"/orangeHeart.png"} w={"14px"} h={"14px"} />
                      </Box>
                      <Box w={"100%"} h={"250px"} />
                      <Text fontWeight={"700"} size={"md"}>
                        {item.name}
                      </Text>
                      <HStack>{getStars(item.stars)}</HStack>
                      <Text size={"xs"}>{item.category}</Text>
                      <Text fontWeight={"500"} size={"sm"} color={"#F3692E"}>
                        ${item.price}
                      </Text>
                    </VStack>
                  </GridItem>
                );
              })}
            </Grid>
            <ThemeProvider theme={theme}>
              <Pagination
                count={4}
                color={"primary"}
                showFirstButton
                showLastButton
              />
            </ThemeProvider>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Shopping;
