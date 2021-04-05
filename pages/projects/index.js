import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar.js";
import { Box, Flex } from "@chakra-ui/react";
import MyProjects from "../../components/MyProjects.js";
import { getRecentProjects } from "../../services/databaseReads.js";
import nookies from "nookies";
import Footer from "../../components/Footer.js";
import { getUserDataFromIdToken } from "../../services/functions.js";

const ProjectsPage = ({ userData = null, projects = [] }) => {
  return (
    <Box minH="100vh" bg="gray.800">
      <Navbar />
      <Flex
        flexDir="column"
        alignItems="center"
        w="60%"
        p={10}
        minWidth="container.md"
        m="auto"
      >
        <MyProjects />
      </Flex>
      <Footer />
    </Box>
  );
};

ProjectsPage.propTypes = {};

export async function getServerSideProps(ctx) {
  let projects = [];
  let userData = null;
  let idt = "";

  const cookies = nookies.get(ctx);
  if (cookies && cookies["IDT"]) {
    idt = cookies["IDT"];
  }

  if (idt.length) {
    userData = await getUserDataFromIdToken(idt);
  }
  console.log(userData);
  getRecentProjects()
    .then((val) => {
      console.log(val);
      projects = val;
    })
    .catch((e) => console.log(e));
  return { props: { projects } };
}

export default ProjectsPage;
