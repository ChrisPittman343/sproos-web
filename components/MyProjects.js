import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import EditProjectDetails from "./EditProjectDetails";

const MyProjects = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let projectBody;

  // Projects are currently being fetched.
  // If errors are present, will render those instead.
  if (props.projects === null) {
    projectBody = (
      <Center>
        <Spinner size="xl" />
      </Center>
    );

    // The user has no projects.
  } else if (props.projects.length === 0) {
    projectBody = (
      <Box>
        It's looking a little empty in here... <br />
        Why don't you try creating a new project?
      </Box>
    );

    // Projects are present.
  } else {
    projectBody = (
      <Flex direction="row" flexWrap="wrap" gridColumnGap={10} gridRowGap={5}>
        {props.projects.map((project, ix) => (
          <ProjectCard project={project} key={ix} />
        ))}
      </Flex>
    );
  }

  return (
    <Box w="100%">
      <Box pb={5}>
        <Heading fontSize="3xl" display="inline-block">
          My Projects
        </Heading>
        <Button ml={7} mb={2} size="sm" onClick={onOpen}>
          New
        </Button>
      </Box>
      {projectBody}
      <EditProjectDetails isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

MyProjects.propTypes = {
  projects: PropTypes.array,
};

export default MyProjects;
