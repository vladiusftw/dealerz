import { ChevronDownIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  title: string;
};

const Collection = (props: Props) => {
  const [category, setCategory] = useState("All Products");
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
      category: "Dress",
      name: "Tropical Suit",
    },
    {
      category: "Dress",
      name: "Tropical Suit",
    },
    {
      category: "Dress",
      name: "Tropical Suit",
    },
    {
      category: "Dress",
      name: "Tropical Suit",
    },
    {
      category: "Dress",
      name: "Tropical Suit",
    },
    {
      category: "Dress",
      name: "Tropical Suit",
    },
  ];
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container
        maxW={"8xl"}
        py={[24]}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <HStack>
          <Heading fontWeight={"700"} size={"2xl"}>
            {props.title}
          </Heading>
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
                {category}
              </MenuButton>
              <MenuList>
                {categories.map((item, index) => {
                  return (
                    <MenuItem
                      key={index}
                      color={category == item ? "#F86338" : "white"}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
        </HStack>

        <Grid
          display={{ base: "none", md: "flex" }}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(5, 1fr)",
            "repeat(7, 1fr)",
          ]}
          gap={[12]}
          alignItems={"center"}
          mt={[8]}
        >
          {categories.map((item, index) => {
            return (
              <GridItem
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                key={index}
              >
                <Button
                  variant={"unstyled"}
                  color={category == item ? "#F86338" : "black"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </Button>
              </GridItem>
            );
          })}
        </Grid>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            null,
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={2}
          w={"100%"}
          maxW={"7xl"}
          mt={[8]}
        >
          {items.map((item, index) => {
            return (
              <GridItem bgColor={"white"} py={[12]} px={[6]}>
                <VStack alignItems={"start"} spacing={[4]}>
                  <Box h={"300px"} />
                  <Text color={"#9A9AB0"} fontWeight={"700"} size={"xs"}>
                    Category {item.category}
                  </Text>
                  <Text fontWeight={"700"} size={"xl"}>
                    {item.name}
                  </Text>
                  <Button
                    variant={"unstyled"}
                    bgColor={"#F86338"}
                    borderRadius={"3xl"}
                    size={"sm"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <ArrowForwardIcon color={"white"} w={17} h={17} />
                  </Button>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
        <Button
          variant={"ghost"}
          bgColor={"#F86338"}
          fontWeight={"700"}
          size={"sm"}
          color={"white"}
          border={"2px solid white"}
          py={[6]}
          px={[6]}
          mt={[12]}
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
      </Container>
    </Box>
  );
};

export default Collection;
