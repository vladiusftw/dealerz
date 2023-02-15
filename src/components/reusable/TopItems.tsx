import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../swiperPagination.css";

type Props = {};

const TopItems = (props: Props) => {
  const items = [
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
    {
      name: "Tracksuit Hyped",
      color: "Apple Cherry",
      before: 454,
      after: 384,
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(1);

  const [g0l500] = useMediaQuery("(min-width: 0px) and (max-width: 500px)");
  const [g500l700] = useMediaQuery("(min-width: 500px) and (max-width: 700px)");
  const [g700l900] = useMediaQuery("(min-width: 700px) and (max-width: 900px)");
  const [g900l1100] = useMediaQuery(
    "(min-width: 900px) and (max-width: 1100px)"
  );
  const [g1100l1300] = useMediaQuery(
    "(min-width: 1100px) and (max-width: 1300px)"
  );
  const [g1300l1500] = useMediaQuery(
    "(min-width: 1300px) and (max-width: 1500px)"
  );
  const [g1500l1700] = useMediaQuery(
    "(min-width: 1500px) and (max-width: 1700px)"
  );
  const [g1700] = useMediaQuery("(min-width: 1700px)");

  useEffect(() => {
    if (g0l500) setSlidesPerView(1);
  }, [g0l500]);

  useEffect(() => {
    if (g500l700) setSlidesPerView(1.4);
  }, [g500l700]);

  useEffect(() => {
    if (g700l900) setSlidesPerView(1.8);
  }, [g700l900]);

  useEffect(() => {
    if (g900l1100) setSlidesPerView(2.2);
  }, [g900l1100]);

  useEffect(() => {
    if (g1100l1300) setSlidesPerView(2.6);
  }, [g1100l1300]);

  useEffect(() => {
    if (g1300l1500) setSlidesPerView(3);
  }, [g1300l1500]);

  useEffect(() => {
    if (g1500l1700) setSlidesPerView(3.4);
  }, [g1500l1700]);

  useEffect(() => {
    if (g1700) setSlidesPerView(3.8);
  }, [g1700]);

  return (
    <Box>
      <Container maxW={"8xl"} py={[12, null, null, 24]}>
        <VStack spacing={[4, null, null, 8]} mb={[8, null, null, 12]}>
          <Heading size={"3xl"} fontWeight={"700"}>
            Top Items
          </Heading>
          <Text whiteSpace={"pre-line"} textAlign={"center"} size={"sm"}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }
          </Text>
        </VStack>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".my-custom-pagination-div",
            renderBullet: (index, className) => {
              return '<Box class="' + className + '">' + "</Box>";
            },
          }}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide>
                <Box pos={"relative"}>
                  <Text
                    pos={"absolute"}
                    bgColor={"#F6F7FB"}
                    borderRadius={"md"}
                    color={"#F86338"}
                    top={"0.4em"}
                    left={"0.4em"}
                    py={["2px"]}
                    px={["6px"]}
                    fontWeight={"500"}
                  >
                    SALE
                  </Text>
                  <VStack
                    w={"100%"}
                    bgColor={"#E2E2EA"}
                    py={[6]}
                    borderRadius={"lg"}
                  >
                    <Box w={"100%"} h={"350px"} />
                    <Text fontWeight={"700"} size={"md"}>
                      {item.name}
                    </Text>
                    <Text size={"xs"} color={"#9A9AB0"}>
                      {item.color}
                    </Text>
                    <HStack>
                      <Text size={"xs"} color={"#F86338"}>
                        ${item.after}
                      </Text>
                      <Text size={"xs"} color={"#9A9AB0"}>
                        ${item.before}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <VStack alignItems={"center"}>
          <Box mt={[12]}>
            <Box className="my-custom-pagination-div" />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default TopItems;
