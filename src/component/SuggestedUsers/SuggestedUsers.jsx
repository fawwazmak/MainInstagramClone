import { Flex, VStack, Text, Box } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"full"}
      >
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
          color={"gray.500"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Dotun"
        followers={1473}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Fawaz"
        followers={1733}
        avatar="https://bit.ly/Fawaz-Makinde"
      />
      <SuggestedUser
        name="Adams"
        followers={1113}
        avatar="https://bit.ly/adams-vee"
      />
      <Box fontSize={12} color={"gray.500"} mt={5}>
        {" "}
        © 2024 Built by Adams, Fawas, Dotun & Nike
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
