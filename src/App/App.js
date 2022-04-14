import { useCallback, useEffect, useRef, useState } from "react";

import { Board } from "../common/Board";
import { SideBar } from "../common/SideBar";
import { TopBar } from "../common/TopBar";
import { CELL_SIDE } from "../define/cellSde";
import { aStartFindPath } from "../utils/aStartFindPath";
import { createDenseLatticeGraphAdjacencyList } from "../utils/createDenseLatticeGraphAdjacencyList";
import { dijkstraFindPath } from "../utils/dijkstraFindPath/dijkstraFindPath";
import { removeDisabledNodesFromGraph } from "../utils/removeDisabledNodesFromGraph";

import styles from "./App.module.scss";

const App = () => {
  const refBoard = useRef(null);
  const [graph, setGraph] = useState(null);
  const [cellsPerHeight, setCellsPerHeight] = useState(0);
  const [cellsPerWidth, setCellsPerWidth] = useState(0);
  const [disabledCells, setDisabledCells] = useState([]);
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);
  const [visitedCells, setVisitedCells] = useState([]);
  const [shortestPathCells, setShortestPathCells] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [hasAlgorithmFinished, setHasAlgorithmFinished] = useState(false);
  const [isVisualizationOnGoing, setIsVisualizationOnGoing] = useState(false);

  const reset = useCallback(() => {
    setDisabledCells([]);
    setStartCell(null);
    setEndCell(null);
    setVisitedCells([]);
    setShortestPathCells([]);
    setHasAlgorithmFinished(false);
  }, []);

  useEffect(() => {
    if (refBoard.current) {
      const listener = () => {
        setDisabledCells([]);
        setStartCell(null);
        setEndCell(null);
        const tempCellsPerWidth = Math.floor(
          refBoard.current.offsetWidth / CELL_SIDE
        );
        const tempCellsPerHeight = Math.floor(
          refBoard.current.offsetHeight / CELL_SIDE
        );
        const tempGraph = createDenseLatticeGraphAdjacencyList(
          tempCellsPerWidth,
          tempCellsPerHeight
        );
        setGraph(tempGraph);
        setCellsPerWidth(tempCellsPerWidth);
        setCellsPerHeight(tempCellsPerHeight);
      };

      listener(); // let's call it the first time
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }
  }, [refBoard]);

  const DIJKSTRA = "DIJKSTRA";
  const A_STAR = "A_STAR";
  const [activeAlgorithm, setActiveAlgorithm] = useState(DIJKSTRA);

  return (
    <div className={styles.container}>
      <TopBar
        startCell={startCell}
        endCell={endCell}
        onClickStartBtn={() => {
          const fn_findPath = (function () {
            switch (activeAlgorithm) {
              case DIJKSTRA:
                return () =>
                  dijkstraFindPath(modifiedGraph, startCell, endCell);
              case A_STAR:
                return () => aStartFindPath(modifiedGraph, startCell, endCell);
              default:
                throw new Error(
                  "Mysteriously an incorrect algorithm was selected "
                );
            }
          })();
          const modifiedGraph = removeDisabledNodesFromGraph(
            graph,
            disabledCells
          );
          const { visitedCells, shortestPath } = fn_findPath();
          setVisitedCells(visitedCells);
          setShortestPathCells(shortestPath);
          setHasAlgorithmFinished(true);
        }}
        hasAlgorithmFinished={hasAlgorithmFinished}
        onClickResetBtn={reset}
        isVisualizationOnGoing={isVisualizationOnGoing}
      />
      <SideBar
        onClickDijkstra={() => {
          reset();
          setActiveAlgorithm(DIJKSTRA);
        }}
        onClickAStar={() => {
          reset();
          setActiveAlgorithm(A_STAR);
        }}
      />
      <Board
        setIsVisualizationOnGoing={setIsVisualizationOnGoing}
        cellsPerWidth={cellsPerWidth}
        cellsPerHeight={cellsPerHeight}
        ref={refBoard}
        graph={graph}
        startCell={startCell}
        setStartCell={setStartCell}
        endCell={endCell}
        setEndCell={setEndCell}
        disabledCells={disabledCells}
        setDisabledCells={setDisabledCells}
        shortestPathCells={shortestPathCells}
        visitedCells={visitedCells}
      />
    </div>
  );
};

export default App;
