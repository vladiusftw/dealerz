import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Story = (props: Props) => {
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <Stack
          flex={1}
          gap={[8, null, null, null, 12]}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box
            flex={{ base: "auto", lg: 1 }}
            height={["400px", "500px", "600px", null, "720px"]}
            bgColor={"#E2E2EA"}
            w={"100%"}
            borderRadius={"xl"}
          />
          <VStack
            flex={1}
            alignItems={"start"}
            spacing={[8]}
            pt={[0, null, null, 16]}
          >
            <Heading whiteSpace={"pre-line"} fontWeight={"700"} size={"3xl"}>
              {"Story about\nOur Brand"}
            </Heading>
            <Text color={"#515151"} size={"sm"}>
              {
                "Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company"
              }
            </Text>
            <Button variant={"unstyled"} fontWeight={"700"} color={"#F86338"}>
              Read full story
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Story;
