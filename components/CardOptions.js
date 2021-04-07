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
import EditProjectDetails from "./EditProjectDetails";
import { deleteProject } from "../services/databaseWrites";

const CardOptions = (props) => {
  const disc = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openEdit = (e) => {
    e.preventDefault();
    onOpen();
  };

  const onDelete = async (e) => {
    e.preventDefault();
    deleteProject(props.project).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Menu isOpen={disc.isOpen} onClose={disc.onClose} isLazy>
        <MenuButton
          as={IconButton}
          icon={<Icon as={GoKebabVertical} _selected={{ outline: 0 }} />}
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            disc.isOpen ? disc.onClose() : disc.onOpen();
          }}
        />
        <Portal>
          <MenuList>
            <MenuItem onClick={openEdit}>Edit</MenuItem>
            <MenuItem onClick={onDelete}>Delete</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
      <EditProjectDetails
        project={props.project}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

CardOptions.propTypes = {
  project: PropTypes.object,
};

export default CardOptions;
