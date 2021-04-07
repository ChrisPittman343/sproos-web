import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import ProjectForm from "./ProjectForm";

const EditProjectDetails = (props) => {
  const header = props.project ? `Edit "${props.project.name}"` : "New Project";

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader children={header} />
        <ModalCloseButton />
        {/* Contains the modal's body and footer as part of the form */}
        <ProjectForm project={props.project} onClose={props.onClose} />
      </ModalContent>
    </Modal>
  );
};

EditProjectDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  project: PropTypes.object,
};

export default EditProjectDetails;
