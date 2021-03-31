import React from "react";
import PropTypes from "prop-types";
import { Flex, IconButton } from "@chakra-ui/react";
import {
  ChevronDownIcon,
  DeleteIcon,
  PlusSquareIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import SidebarButton from "./SidebarButton";

const SidebarButtons = (props) => {
  return (
    <Flex
      justifyContent="flex-end"
      borderY="2px"
      borderStyle="solid"
      borderColor="gray.900"
    >
      <SidebarButton
        icon={<PlusSquareIcon w={6} h={6} />}
        desc="Add node"
        onClick={(e) => console.log(e)}
      />
      <SidebarButton
        icon={<ChevronDownIcon w={7} h={7} />}
        desc="Expand all nodes"
        onClick={(e) => console.log(e)}
      />
      <SidebarButton
        icon={<DeleteIcon w={5} h={5} />}
        desc="Delete node"
        onClick={(e) => console.log(e)}
      />
    </Flex>
  );
};

SidebarButtons.propTypes = {};

export default SidebarButtons;
