import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
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
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container
        maxW={"8xl"}
        py={[20]}
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
          mt={[12]}
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
      </Container>
    </Box>
  );
};

export default Collection;
