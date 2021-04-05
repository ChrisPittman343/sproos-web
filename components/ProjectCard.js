import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import CardOptions from "./CardOptions";

const ProjectCard = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <LinkBox>
      <Box
        bg="transparent"
        rounded="md"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="green.400"
        bg={hovered ? "gray.700" : "transparent"}
        p={2}
        h="100%"
        w={250}
        transition="all"
        transitionDuration="0.15s"
        onMouseEnter={(e) => setHovered(true)}
        onMouseLeave={(e) => setHovered(false)}
      >
        <LinkOverlay href={"/projects/" + props.id}>
          <Flex justifyContent="space-between">
            <Heading
              fontSize="xl"
              fontWeight="semibold"
              isTruncated
              pb={3}
              pr={2}
            >
              {props.id}
            </Heading>
            <CardOptions />
          </Flex>
          Description line 1
          <br /> Description line 2
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string,
};

export default ProjectCard;
