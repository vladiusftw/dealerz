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
import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

type Props = {};

const Shopping = (props: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F86338",
      },
    },
  });
  const [value, setValue] = useState<number[]>([0, 37]);

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
  const [category, setCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (category == "All Products")
      setItemsCategory([
        ...items
          .sort((a, b) => b.price - a.price)
          .filter((item) => item.price >= value[0] && item.price <= value[1]),
      ]);
    else
      setItemsCategory([
        ...items
          .sort((a, b) => b.price - a.price)
          .filter(
            (item) =>
              item.category == category &&
              item.price >= value[0] &&
              item.price <= value[1]
          ),
      ]);
  }, [category]);

  useEffect(() => {
    if (category == "All Products")
      setItemsCategory([
        ...items
          .sort((a, b) => b.price - a.price)
          .filter((item) => item.price >= value[0] && item.price <= value[1]),
      ]);
    else
      setItemsCategory([
        ...items
          .sort((a, b) => b.price - a.price)
          .filter(
            (item) =>
              item.category == category &&
              item.price >= value[0] &&
              item.price <= value[1]
          ),
      ]);
  }, [value]);

  const items = [
    {
      name: "Oversized Logo T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A2/091241W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A2/091241W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A2/091241W/3-zoom-desktop.webp",
      ],
      price: 303,
    },
    {
      name: "Relaxed Burn Out T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A1/971421W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A1/971421W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A1/971421W/4-zoom-desktop.webp",
      ],
      price: 175,
    },
    {
      name: "Nsw Fiber Boyfriend T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A4/528041W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A4/528041W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A4/528041W/4-zoom-desktop.webp",
      ],
      price: 120,
    },
    {
      name: "Adicolor Essential T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A4/806451W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A4/806451W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A4/806451W/3-zoom-desktop.webp",
      ],
      price: 95,
    },
    {
      name: "New Oversized Logo T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A2/579631W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A2/579631W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A2/579631W/4-zoom-desktop.webp",
      ],
      price: 126,
    },
    {
      name: "Oversized T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A5/028441W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A5/028441W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A5/028441W/3-zoom-desktop.webp",
      ],
      price: 118,
    },
    {
      name: "N31 Essential Boxy T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A9/130651W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A9/130651W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A9/130651W/3-zoom-desktop.webp",
      ],
      price: 149,
    },
    {
      name: "Oversized Logo T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A1/293531W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A1/293531W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A1/293531W/3-zoom-desktop.webp",
      ],
      price: 143,
    },
    {
      name: "Los Angeles Lakers Wash T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A6/809501W/v2/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A6/809501W/v2/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A6/809501W/v2/3-zoom-desktop.webp",
      ],
      price: 74,
    },
    {
      name: "Nsw Icon Clash T-Shirt",
      category: "T-Shirt",
      imgs: [
        "https://pa.namshicdn.com/product/A6/428041W/v1/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A6/428041W/v1/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A6/428041W/v1/1-zoom-desktop.webp",
      ],
      price: 96,
    },
    {
      name: "Belted Coats",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/A9/602141W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A9/602141W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A9/602141W/3-zoom-desktop.webp",
      ],
      price: 200,
    },
    {
      name: "Longline Knitted Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/A4/838631W/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A4/838631W/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/A4/838631W/3-zoom-desktop.webp",
      ],
      price: 376,
    },
    {
      name: "Pocket Detail Plush Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/9C/5YVZ8801DC/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/9C/5YVZ8801DC/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/9C/5YVZ8801DC/3-zoom-desktop.webp",
      ],
      price: 227,
    },
    {
      name: "Pocket Detail Trench Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/AJ/TSHW8801DC/v5/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/AJ/TSHW8801DC/v5/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/AJ/TSHW8801DC/v5/3-zoom-desktop.webp",
      ],
      price: 254,
    },
    {
      name: "Button Detail Longline Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/QM/AD2B8801DC/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/QM/AD2B8801DC/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/QM/AD2B8801DC/3-zoom-desktop.webp",
      ],
      price: 179,
    },
    {
      name: "Pocket Detail Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/HJ/H2XP8801DC/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/HJ/H2XP8801DC/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/HJ/H2XP8801DC/3-zoom-desktop.webp",
      ],
      price: 234,
    },
    {
      name: "Pocket Detail Longline Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/PB/3GEJ8801DC/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/PB/3GEJ8801DC/4-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/PB/3GEJ8801DC/5-zoom-desktop.webp",
      ],
      price: 200,
    },
    {
      name: "Pocket Detail Longline Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/Y8/DK738801DC/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/Y8/DK738801DC/4-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/Y8/DK738801DC/6-zoom-desktop.webp",
      ],
      price: 298,
    },
    {
      name: "Button Detail Plush Coat",
      category: "Coats & Jacket",
      imgs: [
        "https://pa.namshicdn.com/product/XQ/GUQX8801DC/1-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/XQ/GUQX8801DC/2-zoom-desktop.webp",
        "https://pa.namshicdn.com/product/XQ/GUQX8801DC/3-zoom-desktop.webp",
      ],
      price: 209,
    },
  ];

  useEffect(() => {
    items.sort((a, b) => b.price - a.price);
    setMaxValue(items[0].price);
    setValue((prev) => [prev[0], items[0].price]);
  }, []);

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

  const [itemsCategory, setItemsCategory] = useState([...items]);
  const [maxValue, setMaxValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(Math.ceil(itemsCategory.length / 6));

  useEffect(() => {
    setNumPages(Math.ceil(itemsCategory.length / 6));
  }, [itemsCategory]);

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
                  max={maxValue}
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
                      onClick={() => setCategory(item)}
                    >
                      <Text
                        fontWeight={"700"}
                        size={"sm"}
                        color={category == item ? "#F86338" : "#11142D"}
                      >
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
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                null,
                "repeat(3, 1fr)",
              ]}
              columnGap={[4]}
              rowGap={[4]}
              w={"100%"}
            >
              {itemsCategory
                .slice((currentPage - 1) * 6, currentPage * 6)
                .map((item, index) => {
                  return (
                    <GridItem key={index}>
                      <Link to={`/shop/${item.name}`}>
                        <VStack
                          bgColor={"white"}
                          borderRadius={"lg"}
                          pos={"relative"}
                          pb={[4, null, null, 6]}
                        >
                          <Image
                            src={item.imgs[0]}
                            w={"100%"}
                            maxH={"400px"}
                            borderTopRadius={"lg"}
                          />
                          <Box
                            pos={"absolute"}
                            top={"0.2em"}
                            right={"1em"}
                            bgColor={"#FFDDD3"}
                            px={[2]}
                            py={[1]}
                            borderRadius={"md"}
                            cursor={"pointer"}
                          >
                            <Image
                              src={"/orangeHeart.png"}
                              w={"14px"}
                              h={"14px"}
                            />
                          </Box>
                          <Text
                            fontWeight={"700"}
                            size={"md"}
                            px={[2]}
                            textAlign={"center"}
                          >
                            {item.name}
                          </Text>
                          <HStack>{getStars(5)}</HStack>
                          <Text size={"xs"} color={"#9A9AB0"}>
                            {item.category}
                          </Text>
                          <Text
                            fontWeight={"500"}
                            size={"sm"}
                            color={"#F3692E"}
                          >
                            ${item.price}
                          </Text>
                        </VStack>
                      </Link>
                    </GridItem>
                  );
                })}
            </Grid>
            <ThemeProvider theme={theme}>
              <Pagination
                count={numPages}
                color={"primary"}
                showFirstButton
                showLastButton
                onChange={(e, page) => setCurrentPage(page)}
              />
            </ThemeProvider>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Shopping;
