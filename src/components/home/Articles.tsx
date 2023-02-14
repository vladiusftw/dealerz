import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Articles = (props: Props) => {
  const articles = [
    {
      title: "Best Summer Outfit Style",
      date: "14 Feb",
      place: "Livina Style",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Best Summer Outfit Style",
      date: "14 Feb",
      place: "Livina Style",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Best Summer Outfit Style",
      date: "14 Feb",
      place: "Livina Style",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Best Summer Outfit Style",
      date: "14 Feb",
      place: "Livina Style",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack alignItems={"start"} spacing={[6, null, null, 8]}>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Heading whiteSpace={"pre-line"} size={"3xl"} lineHeight={"1.2"}>
              {"Get Better Insights\nfrom Our Articles"}
            </Heading>
            <Button variant={"unstyled"} size={"md"} color={"#F86338"}>
              See more
            </Button>
          </HStack>
          <Grid
            w={"100%"}
            templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
            columnGap={[3]}
            rowGap={[4, null, 8]}
          >
            {articles.map((item, index) => {
              return (
                <GridItem>
                  <VStack alignItems={"start"} spacing={[4]}>
                    <Box w={"100%"} h={"400px"} bgColor={"#E2E2EA"} />
                    <Heading fontWeight={"700"} size={"xl"}>
                      {item.title}
                    </Heading>
                    <HStack>
                      <Text color={"#515151"} size={"sm"} fontWeight={"700"}>
                        {item.date}
                      </Text>
                      <Image src={"/dot.png"} w={"4px"} h={"4px"} />
                      <Text color={"#515151"} size={"sm"} fontWeight={"700"}>
                        {item.place}
                      </Text>
                    </HStack>
                    <Text color={"#9A9AB0"} size={"sm"}>
                      {item.desc}
                    </Text>
                    <Button
                      variant={"unstyled"}
                      color={"#F86338"}
                      fontWeight={"700"}
                      size={"sm"}
                    >
                      Explore More
                    </Button>
                  </VStack>
                </GridItem>
              );
            })}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Articles;
