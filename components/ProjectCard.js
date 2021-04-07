import React, { useState } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import CardOptions from "./CardOptions";

const ProjectCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const { id, name, description } = props.project;
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
        h={105}
        w={300}
        transition="all"
        transitionDuration="0.15s"
        onMouseEnter={(e) => setHovered(true)}
        onMouseLeave={(e) => setHovered(false)}
      >
        <NextLink href={"/projects/" + id} passHref>
          <LinkOverlay>
            <Flex justifyContent="space-between">
              <Heading
                fontSize="xl"
                fontWeight="semibold"
                isTruncated
                pb={3}
                pr={2}
              >
                {name}
              </Heading>
              <CardOptions project={props.project} />
            </Flex>
            <Text noOfLines={2}>{description}</Text>
          </LinkOverlay>
        </NextLink>
      </Box>
    </LinkBox>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
