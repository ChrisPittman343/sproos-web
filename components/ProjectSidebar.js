import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import SidebarButtons from "./SidebarButtons";
import NodeList from "./NodeList";
import ProjectDetails from "./ProjectDetails";

const ProjectSidebar = (props) => {
  return (
    <Box
      minW={256}
      h="100%"
      bg="gray.700"
      borderRight={2}
      borderRightStyle="solid"
      borderRightColor="gray.900"
    >
      <ProjectDetails />
      <SidebarButtons />
      <NodeList />
    </Box>
  );
};

ProjectSidebar.propTypes = {};

export default ProjectSidebar;
