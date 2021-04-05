import React from "react";
import PropTypes from "prop-types";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { GoKebabVertical } from "react-icons/go";

const CardOptions = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        as={IconButton}
        icon={<Icon as={GoKebabVertical} _selected={{ outline: 0 }} />}
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          isOpen ? onClose() : onOpen();
        }}
      />
      <Portal>
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Make Template</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

CardOptions.propTypes = {};

export default CardOptions;
