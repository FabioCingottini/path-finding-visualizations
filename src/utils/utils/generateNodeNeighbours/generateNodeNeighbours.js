/**
 * @typedef NodeNeighbours
 * @type {Array<[string, number]>}
 */
/**
 * @param {Array<string>} arrStr_nodeNames - The array of hex string from where to pick the node names.
 * @param {number} int_width - The width of the lattice graph expressed in node numbers.
 * @param {number} int_currentNode - The current node number.
 *
 * @return {NodeNeighbours} nodeNeighbours - The adjacency list for the current node.
 */
function generateNodeNeighbours(arrStr_nodeNames, int_width, int_currentNode) {
  const nodeNeighbours = [];
  // calculate the neighbours
  const str_nodeBelow = arrStr_nodeNames[int_currentNode - 1 + int_width];
  const str_nodeAbove = arrStr_nodeNames[int_currentNode - 1 - int_width];
  const str_nodeLeft =
    int_currentNode % int_width !== 1
      ? arrStr_nodeNames[int_currentNode - 2]
      : undefined;
  const str_nodeRight =
    int_currentNode % int_width !== 0
      ? arrStr_nodeNames[int_currentNode]
      : undefined;
  const str_nodeBelowLeft =
    !!str_nodeBelow && !!str_nodeLeft
      ? arrStr_nodeNames[int_currentNode - 1 - 1 + int_width]
      : undefined;
  const str_nodeBelowRight =
    !!str_nodeBelow && !!str_nodeRight
      ? arrStr_nodeNames[int_currentNode - 1 + 1 + int_width]
      : undefined;
  const str_nodeAboveLeft =
    !!str_nodeAbove && !!str_nodeLeft
      ? arrStr_nodeNames[int_currentNode - 1 - 1 - int_width]
      : undefined;
  const str_nodeAboveRight =
    !!str_nodeAbove && !!str_nodeRight
      ? arrStr_nodeNames[int_currentNode - 1 + 1 - int_width]
      : undefined;
  const int_costStraight = 1;
  const int_costDiagonal = Math.SQRT2;
  // straight
  if (str_nodeBelow) nodeNeighbours.push([str_nodeBelow, int_costStraight]);
  if (str_nodeAbove) nodeNeighbours.push([str_nodeAbove, int_costStraight]);
  if (str_nodeLeft) nodeNeighbours.push([str_nodeLeft, int_costStraight]);
  if (str_nodeRight) nodeNeighbours.push([str_nodeRight, int_costStraight]);
  // diagonal
  if (str_nodeBelowRight)
    nodeNeighbours.push([str_nodeBelowRight, int_costDiagonal]);
  if (str_nodeBelowLeft)
    nodeNeighbours.push([str_nodeBelowLeft, int_costDiagonal]);
  if (str_nodeAboveLeft)
    nodeNeighbours.push([str_nodeAboveLeft, int_costDiagonal]);
  if (str_nodeAboveRight)
    nodeNeighbours.push([str_nodeAboveRight, int_costDiagonal]);
  // finished
  return nodeNeighbours;
}

export { generateNodeNeighbours };
