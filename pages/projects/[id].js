import React from "react";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import ProjectSidebar from "../../components/ProjectSidebar";
import NodeEditor from "../../components/NodeEditor";
import { useProject } from "../../hooks/useProject";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const { details, nodes, error } = useProject(id);

  console.log("nodes:", nodes);
  return (
    <Box minH="100vh" bg="gray.800">
      <Navbar />
      <Flex direction="row" h="100%">
        <ProjectSidebar />
        <NodeEditor />
      </Flex>
    </Box>
  );
};

export default Project;
