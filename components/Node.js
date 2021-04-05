import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import NodeOptions from "./NodeOptions";

const Node = (props) => {
  const [name, setName] = useState("Node");
  const [editable, setEditable] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const isReadonly = () => {
    return !editable;
  };

  const onChange = (e) => {
    if (editable) setName(e.target.value);
    else return;
  };

  const onDoubleClick = (e) => {
    setEditable(true);
    e.target.focus();
    e.target.setSelectionRange(0, e.target.value.length);
  };

  const onContextMenu = (e) => {
    e.stopPropagation();
    window.event.returnValue = false;
  };

  return (
    <Box onContextMenu={onContextMenu}>
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        cursor="pointer"
        bg={isReadonly() ? "gray.800" : "gray.700"}
        _hover={{ bg: "gray.700" }}
      >
        <Box w={props.depth * 30 + "px"} h={0.25} bg="gray.600" opacity={0.5} />
        <IconButton
          _focus={{ outline: "none" }}
          icon={isOpen ? <ChevronUpIcon mt={1} /> : <ChevronDownIcon mt={1} />}
          rounded={false}
          variant="ghost"
          size="sm"
          pb={1}
          onClick={onToggle}
        />
        <Input
          ml={1}
          cursor="pointer"
          aria-label="Node Name"
          variant="unstyled"
          placeholder="Node Name"
          isReadOnly={isReadonly()}
          value={name}
          rounded={false}
          isTruncated
          spellCheck={false}
          outline="0 solid gray"
          outlineColor="gray.500"
          _focus={{
            bg: isReadonly() ? "" : "gray.900",
            outlineWidth: isReadonly() ? "0" : "1px",
          }}
          onChange={onChange}
          onDoubleClick={onDoubleClick}
          onBlur={() => setEditable(false)}
        />
        <NodeOptions />
      </Flex>
      <Collapse in={isOpen}>
        {props.depth <= 10 ? <Node depth={props.depth + 1} /> : <> </>}
      </Collapse>
    </Box>
  );
};

Node.propTypes = {
  depth: PropTypes.number,
};

export default Node;
