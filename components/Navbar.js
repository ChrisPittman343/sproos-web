import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Title from "./Title";
import { useRouter } from "next/router";
import GoogleAvatar from "./GoogleAvatar";

const Navbar = (props) => {
  const router = useRouter();

  return (
    <Flex
      direction="row"
      p={2}
      bg="gray.900"
      alignItems="center"
      justifyContent="space-between"
    >
      <Title />
      <Flex gridColumnGap={5} alignItems="center" pr={5}>
        <Button
          onClick={(e) => {
            router.push("/projects");
          }}
          variant="ghost"
        >
          Projects
        </Button>
        <GoogleAvatar />
      </Flex>
    </Flex>
  );
};

Navbar.propTypes = {};

export default Navbar;
