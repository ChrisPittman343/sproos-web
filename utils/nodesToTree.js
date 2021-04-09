const nodeInput = {
  id: String,
  projectId: String,
  parentId: String | null, //null => top level node
  text: String,
};

/**
 * Constructs a sorted JSON tree of nodes from an
 * array of unsorted nodes.
 * @param {{parentId: String?}[]} nodes
 * @returns JSON tree of reparented nodes
 */
export function nodesToTree(nodes) {
  const tree = {};
  // Iterate over every node in the tree
  nodes.forEach((node) => {
    // For each node, sift through the tree
    let added = false;

    for (const key of tree) {
      // Try different method of looping?
      // possible that the index doesn't exist yet,
      // in which case you can make it first and assume
      // the node will be added later on (But nesting though???)
      if (node.id === key) {
        added = true;
      }
    }
    if (!added) {
    }
  });

  return tree;
}
