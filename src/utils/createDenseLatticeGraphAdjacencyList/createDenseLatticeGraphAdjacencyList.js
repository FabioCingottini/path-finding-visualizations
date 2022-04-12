const { generateNodesNames } = require("../utils/generateNodesNames");
const { generateNodeNeighbours } = require("../utils/generateNodeNeighbours");

/**
 * @typedef DenseLatticeGraph
 * @type Map<string, Array<[string, number]>>
 */
/**
 * Given a width and a height expressed in graph nodes return a dense lattice graph.
 * In this context a dense lattice graph is a lattice graph with the connections between
 * nodes occur also diagonally.
 *
 * @param {number} int_width - The width of the lattice graph expressed in nodes
 * @param {number} int_height - The height of the lattice graph expressed in nodes
 *
 * @return {DenseLatticeGraph} denseLatticeGraph
 */
function createDenseLatticeGraphAdjacencyList(int_width, int_height) {
  const graph = new Map();
  const int_totNodes = int_width * int_height;
  const arrStr_nodeNames = generateNodesNames(int_totNodes);

  // IMPORTANT!!!!!! NODES START FROM 1 AND NOT FROM 0!!
  for (let i = 1; i <= int_totNodes; i++) {
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_nodeNames,
      int_width,
      i
    );
    const str_nodeName = arrStr_nodeNames[i - 1];
    graph.set(str_nodeName, arr_nodeNeighbours);
  }

  return graph;
}

export { createDenseLatticeGraphAdjacencyList };
