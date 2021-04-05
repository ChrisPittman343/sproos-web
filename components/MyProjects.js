import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const MyProjects = (props) => {
  return (
    <Box w="100%">
      <Box pb={5}>
        <Heading fontSize="3xl" display="inline-block">
          My Projects
        </Heading>
        <Button ml={7} mb={2} size="sm">
          New
        </Button>
      </Box>
      <HStack spacing={10}>
        <ProjectCard id="Project" />
        <ProjectCard id="Project" />
        <ProjectCard id="Project w/ long name" />
      </HStack>
    </Box>
  );
};

MyProjects.propTypes = {};

export default MyProjects;
