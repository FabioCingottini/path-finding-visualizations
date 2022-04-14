/**
 * @typedef Graph
 * @type {Map<string, Array<[string, number]>>}
 */
/**
 * @typedef {Object} Node
 * @property {string} nodeName - The name of the node
 * @property {number} cost - The cost for reaching the node.
 * @property {string} predecessor - The name of the node previous to this one.
 * @property {boolean} visited - Whether the node has been visited or not.
 */
class DijkstraMemory {
  constructor(graph, startNode) {
    this.nodes = {};
    for (const [nodeName] of graph) {
      this.nodes[nodeName] = {
        cost: Infinity,
        predecessor: null,
        visited: false,
        nodeName,
      };
    }
    this.nodes[startNode].cost = 0;
  }

  /**
   * Return the node that cost less to be reached.
   *
   * @return {Node} node - The unvisited node that actually cost less to be reached.
   */
  getUnvisitedLessCostlyNode() {
    let result = {
      cost: Infinity,
      predecessor: null,
      visited: true,
      nodeName: "",
    };
    for (const nodeName in this.nodes) {
      const node = this.nodes[nodeName];
      if (!node.visited && node.cost < result.cost) {
        result = node;
      }
    }
    return result;
  }

  /**
   * Given a node, mark it as visited.
   *
   * @param {Node} node - The node that need to be marked as visited.
   */
  markNodeAsVisited(node) {
    this.nodes[node.nodeName].visited = true;
  }

  /**
   * Given a node, and the graph on which this memory rely on, set the node's
   * neighbours costs.
   *
   * @param {Node} node - The node, which the neighbours costs should be updated.
   * @param {Object} obj_graph - The graph which all the nodes belongs to
   */
  updateNeighboursCostsAndPredecessors(node, obj_graph) {
    for (const [neighbourName, neighbourCost] of obj_graph.get(node.nodeName)) {
      const newCost = node.cost + neighbourCost;
      if (newCost < this.nodes[neighbourName].cost) {
        this.nodes[neighbourName].cost = newCost;
        this.nodes[neighbourName].predecessor = node.nodeName;
      }
    }
  }

  /**
   * Given a startNode and an endNode, get the shortest path that links the two nodes
   *
   * @param {string} startNode - The start node for which the shortest path must be found
   * @param {string} endNode - The end node for which the shortest path must be found
   *
   * @return {string[]} shortestPath - The shortest path that links the startNode with the endNode
   */
  getShortestPath(startNode, endNode) {
    const shortestPath = [];

    let node = this.nodes[endNode];

    while (node.nodeName !== startNode) {
      shortestPath.push(node.nodeName);
      node = this.nodes[node.predecessor];
    }

    return shortestPath;
  }
}

/**
 * @typedef {Object} DijkstraFindPathReturnValue
 * @property {string[]} shortestPath - An array of string nodeNames representing the shortest path
 * @property {string[]} visitedCells - A sorted array of string nodeNames representing the visited cell in visiting order
 */
/**
 *
 * @return {DijkstraFindPathReturnValue} dijkstraFindPathReturnValue - The shortest path and the visited cells
 */
export function dijkstraFindPath(obj_graph, startNode, endNode) {
  const visitedCells = [];

  const mem = new DijkstraMemory(obj_graph, startNode);
  let node;
  do {
    node = mem.getUnvisitedLessCostlyNode();
    mem.markNodeAsVisited(node);
    visitedCells.push(node.nodeName);
    mem.updateNeighboursCostsAndPredecessors(node, obj_graph);
  } while (node.nodeName !== endNode);

  const shortestPath = mem.getShortestPath(startNode, endNode);

  return { visitedCells, shortestPath };
}
