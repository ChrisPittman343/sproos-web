import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { Box } from "@chakra-ui/react";

const NodeEditor = (props) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  return (
    <Box onClick={focusEditor} w={400}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
    </Box>
  );
};

/*
import { Box } from "@chakra-ui/react";
import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


return (
    <Box maxW="70%" pt={5} pl={5}>
      <Box>Node info</Box>
      <Box>
        <SunEditor
          width="1000px"
          setOptions={{
            buttonList: [
              ["font", "fontSize", "formatBlock"],
              ["fontColor", "hiliteColor", "textStyle"],
              ["undo", "redo"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["list"],
              ["removeFormat"],
            ],
          }}
        />
      </Box>
    </Box>
  );
*/

NodeEditor.propTypes = {};

export default NodeEditor;
