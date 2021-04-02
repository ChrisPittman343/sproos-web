import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Box, Center } from "@chakra-ui/react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const NodeEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [
        { text: "A line of text in a paragraph." },
        { text: "rich", bold: true },
      ],
    },
  ]);

  return (
    <Center bg="gray.700" p={5} w="100%" h="100%">
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable />
      </Slate>
    </Center>
  );
};

NodeEditor.propTypes = {};

export default NodeEditor;
