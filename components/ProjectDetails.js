import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Text } from "@chakra-ui/react";

const ProjectDetails = (props) => {
  return (
    <Box bg="gray.800" p={3}>
      <Heading pb={2}>Proj Name</Heading>
      <Text>Created 3/30/21</Text>
    </Box>
  );
};

ProjectDetails.propTypes = {};

export default ProjectDetails;
