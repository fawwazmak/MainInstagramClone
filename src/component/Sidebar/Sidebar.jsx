import React from "react";
import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/Constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    {
      icons: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icons: <SearchLogo />,
      text: "Search",
    },
    {
      icons: <NotificationsLogo />,
      text: "Notification",
    },
    {
      icons: <CreatePostLogo />,
      text: "Create",
    },
    {
      icons: <Avatar size={"sm"} name="Adams K" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>

        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {" "}
          {/* Changed <flex> to <Flex> */}
          {sidebarItems.map(
            (
              item,
              index // corrected 'mao' to 'map'
            ) => (
              <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
              >
                <Link
                  display={"flex"}
                  to={item.link || null}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  {item.icons}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Link>
              </Tooltip>
            )
          )}
        </Flex>
        <Tooltip
          hasArrow
          label={"LogOut"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
