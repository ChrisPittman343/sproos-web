import React from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import ProjectSidebar from "../../components/ProjectSidebar";
import NodeEditor from "../../components/NodeEditor";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box>
      <Navbar />
      <Flex direction="row" h="100%">
        <ProjectSidebar />
        <NodeEditor />
      </Flex>
    </Box>
  );
};

export default Project;
