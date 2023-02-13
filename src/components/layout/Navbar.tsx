import {
  Box,
  Container,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Container maxW={"8xl"}>
        <HStack justifyContent={"space-between"} mt={[4]}>
          <Text color={"#F86338"} fontWeight={"700"} size={"3xl"}>
            Dealerz
          </Text>
          <HStack fontWeight={"500"} spacing={[2, 4, 8]}>
            <HStack>
              <Image src={"/phone.png"} width={"20px"} height={"20px"} />
              <Text size={"xs"}>Call Center</Text>
            </HStack>
            <HStack>
              <Image src={"/ship.png"} width={"20px"} height={"17px"} />
              <Text size={"xs"}>Shipping & Returns</Text>
            </HStack>
          </HStack>
        </HStack>
      </Container>
      <Box bgColor={"#F4F7F8"} py={[8]}>
        <Container maxW={"8xl"} pos={"relative"}>
          <VStack
            pos={"absolute"}
            bgColor={"#F86338"}
            px={[20, 28]}
            py={[4]}
            top={"4em"}
            borderRadius={"xl"}
            display={{ base: isOpen ? "flex" : "none", lg: "none" }}
          >
            <Text size={"sm"}>Shop</Text>
            <Text size={"sm"}>Promo</Text>
            <Text size={"sm"}>About</Text>
            <Text size={"sm"}>Blog</Text>
          </VStack>
          <HStack justifyContent={"space-between"}>
            <Box display={{ base: "block", lg: "none" }}>
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </Box>

            <HStack
              spacing={[6]}
              fontWeight={"500"}
              display={{ base: "none", lg: "flex" }}
              color={"#11142D"}
            >
              <Text size={"xs"}>Shop</Text>
              <Text size={"xs"}>Promo</Text>
              <Text size={"xs"}>About</Text>
              <Text size={"xs"}>Blog</Text>
            </HStack>
            <HStack
              bgColor={"white"}
              justifyContent={"space-between"}
              px={[6]}
              py={[2]}
            >
              <Input
                placeholder={"Search what you need"}
                size={"md"}
                p={0}
                w={"40vw"}
              />
              <Image src={"/search.png"} width={"20px"} height={"20px"} />
            </HStack>
            <HStack
              spacing={[2, 6, 8, 10, 12]}
              display={{ base: "none", md: "flex" }}
            >
              <Image src={"/heart.png"} width={"25px"} height={"25px"} />
              <Image src={"/cart.png"} width={"25px"} height={"25px"} />
              <Image src={"/profile.png"} width={"25px"} height={"25px"} />
              <Image src={"/bell.png"} width={"25px"} height={"25px"} />
            </HStack>
            <HStack
              spacing={[2, 6, 8, 10, 12]}
              display={{ base: "flex", md: "none" }}
            >
              <Stack
                flexDir={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src={"/heart.png"} width={"25px"} height={"25px"} />
                <Image src={"/cart.png"} width={"25px"} height={"25px"} />
              </Stack>
              <Stack
                flexDir={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src={"/profile.png"} width={"25px"} height={"25px"} />
                <Image src={"/bell.png"} width={"25px"} height={"25px"} />
              </Stack>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
