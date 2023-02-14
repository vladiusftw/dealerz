import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
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
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

type Props = {};

const Reviews = (props: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      title: "Good Seller!",
      desc: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
      name: "Anna Saraspova",
      signature: "Your Beloved Buyer",
    },
    {
      title: "Good Seller!",
      desc: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
      name: "Anna Saraspova",
      signature: "Your Beloved Buyer",
    },
    {
      title: "Good Seller!",
      desc: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
      name: "Anna Saraspova",
      signature: "Your Beloved Buyer",
    },
    {
      title: "Good Seller!",
      desc: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
      name: "Anna Saraspova",
      signature: "Your Beloved Buyer",
    },
  ];
  return (
    <Box bgColor={"#F4F7F8"}>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack
          alignItems={{ base: "center", md: "end" }}
          mb={[4, null, null, 8]}
        >
          <HStack>
            <ArrowBackIcon
              w={"25px"}
              h={"20px"}
              onClick={() => swiper?.slidePrev()}
              cursor={"pointer"}
            />
            {reviews.map((item, index) => {
              return (
                <Button
                  variant={"unstyled"}
                  bgColor={currentIndex == index ? "#F86338" : "#E0E0E0"}
                  borderRadius={"3xl"}
                  size={"xs"}
                  onClick={() => swiper?.slideTo(index)}
                />
              );
            })}
            <ArrowForwardIcon
              w={"25px"}
              h={"20px"}
              onClick={() => swiper?.slideNext()}
              cursor={"pointer"}
            />
          </HStack>
        </VStack>
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}
          onSlideChange={(swiper: SwiperCore) =>
            setCurrentIndex(swiper.activeIndex)
          }
        >
          {reviews.map((item, index) => {
            return (
              <SwiperSlide>
                <Box bgColor={"white"} p={[8, 16]}>
                  <Stack
                    flex={1}
                    flexDir={{ base: "column", md: "row" }}
                    gap={[8, null, null, 16]}
                  >
                    <Box
                      flex={["auto", null, 1, 0.6]}
                      w={"100%"}
                      bgColor={"#E2E2EA"}
                      height={["320px", "350px"]}
                      borderRadius={"xl"}
                    />
                    <VStack
                      alignItems={"start"}
                      flex={1}
                      spacing={[4, null, null, 8]}
                    >
                      <Heading
                        size={"3xl"}
                        color={"#F86338"}
                        fontWeight={"700"}
                      >
                        {item.title}
                      </Heading>
                      <Text size={"sm"} maxW={"xl"}>
                        {item.desc}
                      </Text>
                      <VStack alignItems={"start"}>
                        <Text fontWeight={"700"} size={"md"}>
                          {item.name}
                        </Text>
                        <Text size={"sm"} fontWeight={"500"}>
                          {item.signature}
                        </Text>
                      </VStack>
                    </VStack>
                  </Stack>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Reviews;
