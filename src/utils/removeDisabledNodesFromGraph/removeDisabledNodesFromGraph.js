/**
 * Given a graph and array of string nodeNames remove those nodes from the copy of the graph
 *
 * @param {Map<string, Array<[string, number]>>} graph - The graph to copy and modify
 * @param {string[]} disabledNodes - The nodes that have been disabled
 *
 * @return Map<string, Array<[string, number]>> graph - A modified copy of the original graph
 */
export function removeDisabledNodesFromGraph(graph, disabledNodes) {
  // copy the graph
  const newGraph = new Map();
  for (const [nodeName, neighbours] of graph) {
    const newNeighbours = [];
    for (const [neighbourName, neighbourCost] of neighbours) {
      newNeighbours.push([neighbourName, neighbourCost]);
    }
    newGraph.set(nodeName, newNeighbours);
  }
  // then remove disabled nodes and their connections
  for (const disabledNode of disabledNodes) {
    const neighbours = newGraph.get(disabledNode);
    newGraph.delete(disabledNode);
    for (const [neighbourName] of neighbours) {
      // TODO: questo non sarà mica facile
      const neighbourNeighbours = newGraph.get(neighbourName);
      const idxNeighbourToDelete = neighbourNeighbours.findIndex(
        ([nodeName]) => nodeName === disabledNode
      );
      const newNeighbours = [...neighbourNeighbours];
      newNeighbours.splice(idxNeighbourToDelete, 1);
      newGraph.set(neighbourName, newNeighbours);
    }
  }

  return newGraph;
}
