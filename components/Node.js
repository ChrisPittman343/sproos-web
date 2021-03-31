import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  IconButton,
  Input,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const Node = (props) => {
  const [name, setName] = useState("Node");
  const [focused, setFocused] = useState(false);

  console.log(props.depth);

  const onChange = (e) => {
    if (focused) setName(e.target.value);
    else return;
  };

  const onDoubleClick = (e) => {
    setFocused(true);
    e.target.focus();
  };

  return (
    <ListItem bg="gray.800" cursor="pointer" _hover={{ bg: "gray.700" }} px={1}>
      <Flex alignItems="center">
        <Box w={2 + 3 * props.depth} h={0.25} bg="gray.600" />
        <IconButton
          _focus={{ outline: "none" }}
          icon={<TriangleDownIcon />}
          variant="unstyled"
          size="sm"
          pb={1}
        />
        <ListIcon color="green.400" pb={0} />
        <Input
          cursor="pointer"
          aria-label="Node Name"
          variant="unstyled"
          placeholder="Node Name"
          isReadOnly={!focused}
          value={name}
          rounded={false}
          isTruncated
          spellCheck={false}
          _focus={{ bg: focused ? "gray.900" : "" }}
          onChange={onChange}
          onDoubleClick={onDoubleClick}
          onBlur={() => setFocused(false)}
        />
      </Flex>
    </ListItem>
  );
};

Node.propTypes = {
  depth: PropTypes.number,
};

export default Node;
