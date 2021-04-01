import React from "react";
import { Flex } from "@chakra-ui/react";
import Node from "./Node";

const NodeList = (props) => {
  return (
    <Flex flexDir="column">
      <Node depth={0} />
      <Node depth={0} />
      <Node depth={0} />
    </Flex>
  );
};

NodeList.propTypes = {};

export default NodeList;
