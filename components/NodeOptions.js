import React from "react";
import PropTypes from "prop-types";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { GoKebabVertical } from "react-icons/go";

const NodeOptions = (props) => {
  return (
    <Menu offset={[0, -5]}>
      <MenuButton
        as={IconButton}
        rounded={false}
        icon={
          <Icon as={GoKebabVertical} opacity={0.5} _selected={{ outline: 0 }} />
        }
        variant="ghost"
        size="sm"
      />
      <MenuList>
        <MenuItem>Add Child</MenuItem>
        <MenuItem>Change Icon</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

NodeOptions.propTypes = {};

export default NodeOptions;
