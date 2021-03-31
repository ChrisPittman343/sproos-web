import React from "react";
import PropTypes from "prop-types";
import { Button, Flex } from "@chakra-ui/react";
import Title from "./Title";
import { useRouter } from "next/router";

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
      <Flex gridColumnGap={2}>
        <Button
          onClick={(e) => {
            router.push("/projects");
          }}
          variant="ghost"
        >
          Projects
        </Button>
        <Button
          onClick={(e) => {
            router.push("/");
          }}
          variant="ghost"
        >
          Account
        </Button>
      </Flex>
    </Flex>
  );
};

Navbar.propTypes = {};

export default Navbar;
