/**
 * @typedef {Object} Node
 *
 * @property {number} g - The G cost for the node
 * @property {number} h - The H cost for the node
 * @property {number} f - The F cost for the node
 * @property {string} [predecessor] - The string name of the predecessor node
 * @property {boolean} [isInOpenList] - Whether the node is in the open List or not or if it is not already compyted
 * @property {boolean} [isInClosedList] - Whether the node is in the closed List or not or if it is not already compyted
 * @property {string} nodeName - The string name of the node
 * @property {number} x - X coordinate of the node
 * @property {number} y - Y coordinate of the node
 */
/**
 * @typedef {Object} Costs
 * @property {number} g - The G cost for the node
 * @property {number} h - The H cost for the node
 * @property {number} f - The F cost for the node
 */
class AStartMemory {
  /**
   *
   * @param {Map<string, Array<[string, number]>>} graph - The graph for which the shortest path must be found
   */
  constructor(graph) {
    /**
     * The internal tab memory containing data about nodes
     *
     * @type {Object<string, Node>}
     * @public
     */
    this.nodes = {};
    // init the table
    for (const [nodeName] of graph) {
      this.nodes[nodeName] = {
        g: Infinity,
        h: Infinity,
        f: Infinity,
        predecessor: undefined,
        isInOpenList: false,
        isInClosedList: false,
        nodeName,
      };
    }
    // The A* algorithm need to use a heuristic function to calculate the cost of reaching a certain node
    // not properly heuristic, a function that calculate the exact distance could be found.
    // If one wants to trade accuracy for speed (the exact definition of heuristic) the coordinates of
    // every node are needed. In this way the heuristic cost could be calculated by using euclidean distance,
    // Manhattan distance or diagonal distance.
    // For calculating the coordinates of every node, this algorithm will assume that the graph for which
    // the shortest path need to be calculated is a dense lattice graph (every node is connected to its
    // neighbour nodes horizontally, vertically and diagonally).
    // It'll be assumed also that node names are hexadecimal string representing the order (from left to right)
    // in which that node appears in the graph
    // Implementation:
    let currentIteration = 0;
    for (const [, nodeNeighbours] of graph) {
      // Node on the angles will have just 3 adjacent neighbours.
      // The first one is the top left, and it corresponds to first iteration (0).
      // The top right will be the second angle and therefore the right one
      if (currentIteration > 0 && nodeNeighbours.length === 3) {
        break;
      }
      currentIteration++;
    }
    const graphWidth = ++currentIteration;
    let currentX = 0;
    let currentY = 0;
    for (const [nodeName] of graph) {
      this.nodes[nodeName].x = currentX;
      this.nodes[nodeName].y = currentY;
      currentX++;
      if (currentX === graphWidth) {
        currentX = 0;
        currentY++;
      }
    }
  }

  /**
   * Given the start node initialize the algorithm by setting its g, h and f to 0 and by putting it in the open list
   *
   * @param {string} startNode - The node that is the starting point for the shortest path
   */
  initializeAlgorithm(startNode) {
    this.nodes[startNode].isInOpenList = true;
    this.nodes[startNode].g = 0;
    this.nodes[startNode].h = 0;
    this.nodes[startNode].f = 0;
  }

  /**
   * Return a boolean indicating whether the open list is empty or not
   *
   * @returns {boolean} isOpenListEmpty - Whether the open list is empty or not
   */
  checkIsOpenListEmpty() {
    for (const node in this.nodes) {
      if (this.nodes[node].isInOpenList) {
        return false;
      }
    }
    return true;
  }

  /**
   * Pop and return the node in the open list with the lowest f
   *
   * @return {Node} q - The node with the lowest f
   */
  popQWithLowestF() {
    /**
     * @type {Node}
     */
    let nodeWithLowestF;
    for (const nodeName in this.nodes) {
      const node = this.nodes[nodeName];
      // fundamental condition to start reasoning about popping this node: node has to be in the open list
      if (node.isInOpenList) {
        // if there is no node or a node with a lowest f has been found....
        if (!nodeWithLowestF || nodeWithLowestF.f > node.f) {
          nodeWithLowestF = node;
        }
      }
    }
    this.nodes[nodeWithLowestF.nodeName].isInOpenList = false;
    return nodeWithLowestF;
  }

  /**
   * Given the graph and q, return its successors nodes
   *
   * @param {Map<string, Array<[string, number]>>} graph - The graph containing the information about how nodes are linked
   * @param {Node} q - The node for which successors need to be found
   *
   * @return {Node[]} successors - An array of nodes representing the successors of q
   */
  getQSuccessors(graph, q) {
    /**
     * @type {Node[]}
     */
    const successors = [];
    const qNeighbours = graph.get(q.nodeName);
    for (const [qNeighbourName] of qNeighbours) {
      const neighbour = this.nodes[qNeighbourName];
      successors.push(neighbour);
    }
    return successors;
  }

  /**
   * Given q and a node set q as predecessor of the node
   *
   * @param {Node} q - The node that will be set as predecessor
   * @param {Node} node - The node for which q will be set as predecessor
   */
  setQAsPredecessor(q, node) {
    this.nodes[node.nodeName].predecessor = q.nodeName;
  }

  /**
   * Given a node object and the name of the endNode, return whether the node is the final one or not
   *
   * @param {Node} node - The node for which to check if it's the ending node or not
   * @param {string} endNodeName - The end node name
   *
   * @return {boolean} return whether the node is the final one or not
   */
  checkIsEndNode(node, endNodeName) {
    return node.nodeName === endNodeName;
  }

  /**
   * Given a node check whether it is in the open list or not
   *
   * @param {Node} node - The node for which to check if it is in the open list or not
   *
   * @return {boolean} - Whether the node is in the open list or not
   */
  checkIsInOpenList(node) {
    return this.nodes[node.nodeName].isInOpenList;
  }

  /**
   * Given a node check whether it is in the closed list or not
   *
   * @param {Node} node - The node for which to check if it is in the closed list or not
   *
   * @return {boolean} - Whether the node is in the closed list or not
   */
  checkIsInClosedList(node) {
    return this.nodes[node.nodeName].isInClosedList;
  }

  /**
   * Given a node, add it to the open list
   *
   * @param {Node} node - The node to add to the open list
   */
  addNodeToTheOpenList(node) {
    this.nodes[node.nodeName].isInOpenList = true;
  }

  /**
   * Given a node, add it to the closed list and remove it from the open list
   *
   * @param {Node} node - The node to add to the closed list and remove from the open list
   */
  addNodeToTheClosedList(node) {
    this.nodes[node.nodeName].isInOpenList = false;
    this.nodes[node.nodeName].isInClosedList = true;
  }

  /**
   * Given a node, remove it from the open list
   *
   * @param {Node} node - The node that has to be removed from the open list
   */
  removeNodeFromOpenList(node) {
    this.nodes[node.nodeName].isInOpenList = false;
  }

  /**
   * Given a node and its costs object update its g, h and f
   *
   * @param {Node} node - The node for which costs need to be updated
   * @param {Costs} costs - The new costs for the node
   */
  updateNodeCosts(node, costs) {
    this.nodes[node.nodeName].g = costs.g;
    this.nodes[node.nodeName].h = costs.h;
    this.nodes[node.nodeName].f = costs.f;
  }

  /**
   * Given the node q, the q successor, the original graph and the end node name, calculate and return
   * g, h and f costs
   *
   * @param {Node} q - The parent of q successors
   * @param {Node} qSuccessor - The node for which costs need to be calculated
   * @param {Map<string, Array<[string, number]>>} graph - The graph where original costs are stored
   * @param {string} endNodeName - The string name of the end node
   *
   * @return {Costs} costs - The newly calculated costs for the q successor
   */
  calcQSuccessorCost(q, qSuccessor, graph, endNodeName) {
    const qNeighbours = graph.get(q.nodeName);
    const [, qSuccessorCost] = qNeighbours.find(
      ([name]) => name === qSuccessor.nodeName
    );
    const costs = {};
    costs.g = q.g + qSuccessorCost;
    const endNode = this.nodes[endNodeName];
    // calculate the Manhattan distance
    costs.h = Math.abs(q.x - endNode.x) + Math.abs(q.y - endNode.y);
    costs.f = costs.g + costs.h;
    return costs;
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
 * @typedef {Object} AStarFindPathReturnValue
 * @property {string[]} shortestPath - An array of string nodeNames representing the shortest path
 * @property {string[]} visitedCells - A sorted array of string nodeNames representing the visited cell in visiting order
 */
/**
 * Given an adjacency list of a weighted undirected dense lattice graph, a start node name and an end node name, return
 * an object containing due array of strings, one contains the names of the visited nodes in the visited order and one
 * is the shortestPath that links the start node with the end node.
 *
 * @param {Map<string, Array<[string,  number]>>} graph - The original dense lattice graphs where costs and nodes are stored
 * @param {string} startNodeName - The string name of the start node
 * @param {string} endNodeName - The string name of the end node
 *
 * @return {AStarFindPathReturnValue} aStarFindPathReturnValue - An obj containing an array of visited node names and an array of node names containing the shortest path
 */
export function aStartFindPath(graph, startNodeName, endNodeName) {
  const visitedCells = [];

  const mem = new AStartMemory(graph);
  mem.initializeAlgorithm(startNodeName);
  while (!mem.checkIsOpenListEmpty()) {
    const q = mem.popQWithLowestF();
    const qSuccessors = mem.getQSuccessors(graph, q);
    mem.removeNodeFromOpenList(q);
    mem.addNodeToTheClosedList(q);
    for (const qSuccessor of qSuccessors) {
      if (mem.checkIsEndNode(qSuccessor, endNodeName)) {
        mem.setQAsPredecessor(q, qSuccessor);
        const shortestPath = mem.getShortestPath(startNodeName, endNodeName);
        return { visitedCells, shortestPath };
      } else if (!mem.checkIsInClosedList(qSuccessor)) {
        const costs = mem.calcQSuccessorCost(q, qSuccessor, graph, endNodeName);
        if (costs.f < qSuccessor.f) {
          mem.addNodeToTheOpenList(qSuccessor);
          mem.updateNodeCosts(qSuccessor, costs);
          mem.setQAsPredecessor(q, qSuccessor);
        }
      }
    }
    visitedCells.push(q.nodeName);
  }
  const shortestPath = mem.getShortestPath(startNodeName, endNodeName);

  return { visitedCells, shortestPath };
}
