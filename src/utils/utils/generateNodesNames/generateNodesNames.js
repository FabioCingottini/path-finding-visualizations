/**
 * Given a total amount of nodes, return their names as an array of hex strings which start from '1'.
 *
 * @param {number} int_totNodes - The total amount of nodes for which names should be generated
 *
 * @return {Array<string>} names - The array containing the node names as strings
 */
function generateNodesNames(int_totNodes) {
  const names = [];
  // IMPORTANT!!!!!! NODES START FROM 1 AND NOT FROM 0!!
  for (let i = 1; i <= int_totNodes; i++) {
    const str_nodeName = i.toString(16);
    names.push(str_nodeName);
  }
  return names;
}

export { generateNodesNames };
