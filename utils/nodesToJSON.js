const nodeInput = {
  id: "",
  text: "",
};

/**
 * Constructs a sorted JSON tree of nodes from an
 * array of unsorted nodes.
 * @param {Array} nodes
 * @returns JSON tree of reparented nodes like so - node_id: {node, children: []}
 */
export function nodesToJson(nodes) {
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
