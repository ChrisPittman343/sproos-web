import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "@chakra-ui/react";
import Node from "./Node";

const NodeList = (props) => {
  return (
    <List>
      <Node depth={0} />
      <Node depth={1} />
      <Node depth={1} />
      <Node depth={1} />
      <Node depth={2} />
      <Node depth={3} />
      <Node depth={3} />
    </List>
  );
};

NodeList.propTypes = {};

export default NodeList;
