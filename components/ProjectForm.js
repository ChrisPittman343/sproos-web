import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@chakra-ui/react";
import { editProjectDetails } from "../services/databaseWrites";

const ProjectForm = (props) => {
  const { project, onClose } = props;

  const { handleSubmit, register, formState } = useForm();

  const onSubmit = async (values) => {
    // Update realtime database
    const id = project ? project.id : null;
    await editProjectDetails(id, values);
    onClose();
  };

  const validateName = (value) => {
    // If duplicate name, return "A project by that name already exists!"
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <FormControl isRequired pb={10} isInvalid={formState.errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            defaultValue={project ? project.name : ""}
            {...register("name", { validate: validateName })}
          />
          <FormErrorMessage>
            {formState.errors.name ? formState.errors.name.message : ""}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            maxLength={256}
            defaultValue={project ? project.description : ""}
            {...register("description")}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          children={project ? "Save" : "Create"}
          mr={5}
          pb={0.5}
        />
        <Button
          onClick={onClose}
          children="Cancel"
          colorScheme="red"
          pb={0.5}
          variant="ghost"
        />
      </ModalFooter>
    </form>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func,
};

export default ProjectForm;
