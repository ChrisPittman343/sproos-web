import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import SidebarButtons from "./SidebarButtons";
import NodeList from "./NodeList";
import ProjectDetails from "./ProjectDetails";

const ProjectSidebar = (props) => {
  return (
    <Box
      minWidth={288}
      maxWidth={288}
      w={288}
      h="100%"
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
