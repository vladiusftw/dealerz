import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Description = (props: Props) => {
  const reviews = [
    {
      name: "Alex Iwobi",
      stars: 5,
      date: "2 March 2021 at 06.30 pm",
      review:
        "Thank you for the article that was made, it really provides\ninsight and knowledge that I didn't know before.",
    },
    {
      name: "Alex Iwobi",
      stars: 5,
      date: "2 March 2021 at 06.30 pm",
      review:
        "Thank you for the article that was made, it really provides\ninsight and knowledge that I didn't know before.",
    },
  ];
  const getStars = (num: number) => {
    const content = [];
    for (var i = 0; i < num; i++) {
      content.push(<Image src={"/star.png"} w={"24px"} h={"24px"} key={i} />);
    }
    return content;
  };
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack alignItems={"start"} w={"100%"} flex={1}>
          <Text fontWeight={"700"} size={"xl"}>
            Description
          </Text>
          <Stack
            alignItems={"start"}
            w={"100%"}
            flex={1}
            flexDir={{ base: "column", lg: "row" }}
            gap={[12]}
          >
            <VStack flex={{ base: 1, lg: 0.5 }} alignItems={"start"} w={"100%"}>
              <Text whiteSpace={"pre-line"} color={"#9A9AB0"} size={"sm"}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo."
                }
              </Text>
              <Text fontWeight={"700"} size={"xl"} py={[4, 6, 8, 12]}>
                {"Reviews (2)"}
              </Text>
              {reviews.map((item, index) => {
                return (
                  <Stack
                    alignItems={"start"}
                    gap={[4, null, null, 8]}
                    w={"100%"}
                    flexDir={{ base: "column", sm: "row" }}
                  >
                    <Box
                      w={"50px"}
                      h={"50px"}
                      bgColor={"#E2E2EA"}
                      borderRadius={"3xl"}
                    />
                    <VStack alignItems={"start"} spacing={[4]}>
                      <HStack w={"100%"}>
                        <Text fontWeight={"700"} size={"md"}>
                          {item.name}
                        </Text>
                        <HStack>{getStars(item.stars)}</HStack>
                      </HStack>
                      <Text size={"sm"} color={"#9A9AB0"}>
                        {item.date}
                      </Text>
                      <Grid
                        templateColumns={[
                          "repeat(2, 1fr)",
                          null,
                          "repeat(4, 1fr)",
                        ]}
                        columnGap={[2]}
                        rowGap={[2]}
                      >
                        <GridItem>
                          <Box
                            w={"88px"}
                            h={"88px"}
                            bgColor={"#E2E2EA"}
                            borderRadius={"lg"}
                          />
                        </GridItem>

                        <GridItem>
                          <Box
                            w={"88px"}
                            h={"88px"}
                            bgColor={"#E2E2EA"}
                            borderRadius={"lg"}
                          />
                        </GridItem>
                        <GridItem>
                          <Box
                            w={"88px"}
                            h={"88px"}
                            bgColor={"#E2E2EA"}
                            borderRadius={"lg"}
                          />
                        </GridItem>
                        <GridItem>
                          <Box
                            w={"88px"}
                            h={"88px"}
                            bgColor={"#E2E2EA"}
                            borderRadius={"lg"}
                          />
                        </GridItem>
                      </Grid>
                      <Text whiteSpace={"pre-line"} size={"xs"}>
                        {item.review}
                      </Text>
                    </VStack>
                  </Stack>
                );
              })}
            </VStack>
            <Box
              flex={{ base: "auto", lg: 0.5 }}
              w={"100%"}
              h={{ base: "45vw", lg: "1120px" }}
              bgColor={"#E2E2EA"}
              borderRadius={"lg"}
            />
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Description;
