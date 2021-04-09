import React from "react";
import Navbar from "../../components/Navbar.js";
import { Box, Flex } from "@chakra-ui/react";
import MyProjects from "../../components/MyProjects.js";
import Footer from "../../components/Footer.js";
import { useProjects } from "../../hooks/useProjects.js";

const ProjectsPage = (props) => {
  const { projects, error } = useProjects();
  console.log(error);
  return (
    <Box minH="100vh" bg="gray.800">
      <Navbar />
      <Flex
        flexDir="column"
        alignItems="center"
        w="65%"
        p={10}
        minWidth="container.md"
        m="auto"
      >
        {error ? <></> : <MyProjects projects={projects} />}
      </Flex>
      <Footer />
    </Box>
  );
};

export default ProjectsPage;
