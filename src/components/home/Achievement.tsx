import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Achievement = (props: Props) => {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack spacing={[4, null, null, 8]}>
          <Heading size={"3xl"} fontWeight={"700"}>
            Our Achievement
          </Heading>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              null,
              "repeat(3, 1fr)",
              null,
              "repeat(6, 1fr)",
            ]}
            columnGap={[2, 12]}
            alignItems={"center"}
          >
            {logos.map((item, index) => {
              return (
                <GridItem key={index}>
                  <Image src={item} width={"192px"} height={"104px"} />
                </GridItem>
              );
            })}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Achievement;
