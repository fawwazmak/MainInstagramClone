import React from "react";
import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <>
      <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost username="Dotun" avatar="/img1.png" img="/img1.png" />
        <FeedPost username="Adams" avatar="/img2.png" img="/img2.png" />
        <FeedPost username="Denike" avatar="/img3.png" img="/img3.png" />
        <FeedPost username="Fawwaz" avatar="/img4.png" img="/img4.png" />
      </Container>
    </>
  );
};

export default FeedPosts;
