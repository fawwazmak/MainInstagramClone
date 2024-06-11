import React, { useEffect, useState } from "react";
import {
  Container,
  Flex,
  VStack,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading &&
          [0, 1, 2, 3].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap="2">
                <SkeletonCircle size="10" />
                <VStack gap="2" alignItems={"flex-start"}>
                  <Skeleton height="10px" w={"200px"} />
                  <Skeleton height="10px" w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"500px"}>content wrapped</Box>
              </Skeleton>
            </VStack>
          ))}
        {!isLoading && (
          <>
            <FeedPost username="Dotun" avatar="/img1.png" img="/img1.png" />
            <FeedPost username="Adams" avatar="/img2.png" img="/img2.png" />
            <FeedPost username="Denike" avatar="/img3.png" img="/img3.png" />
            <FeedPost username="Fawwaz" avatar="/img4.png" img="/img4.png" />
          </>
        )}
      </Container>
    </>
  );
};

export default FeedPosts;
