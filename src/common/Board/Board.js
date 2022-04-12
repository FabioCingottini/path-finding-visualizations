import cn from "classnames";
import PropTypes from "prop-types";
import { forwardRef, useCallback, useEffect, useRef } from "react";

import { CELL_SIDE } from "../../define/cellSde";

import styles from "./Board.module.scss";

const Board = forwardRef(
  (
    {
      cellsPerWidth,
      cellsPerHeight,
      graph,
      startCell,
      setStartCell,
      endCell,
      setEndCell,
      disabledCells,
      setDisabledCells,
      visitedCells,
      shortestPathCells,
    },
    ref
  ) => {
    // custom usage of setStartCell
    const cb_setStartCell = useCallback(
      (nodeName) => {
        // remove the disabled cell if it is there
        const tempDisabledCells = [...disabledCells];
        const idxDisabledCell = tempDisabledCells.findIndex(
          (dc) => dc === nodeName
        );
        if (idxDisabledCell !== -1) {
          tempDisabledCells.splice(idxDisabledCell, 1);
        }
        // remove the end cell if the new start cell is the old end cell
        if (endCell === nodeName) {
          setEndCell(null);
        }
        setStartCell(nodeName);
      },
      [disabledCells, endCell, setEndCell, setStartCell]
    );

    // custom usage of setEndCell
    const cb_setEndCell = useCallback(
      (nodeName) => {
        // remove the disabled cell if it is there
        const tempDisabledCells = [...disabledCells];
        const idxDisabledCell = tempDisabledCells.findIndex(
          (dc) => dc === nodeName
        );
        if (idxDisabledCell !== -1) {
          tempDisabledCells.splice(idxDisabledCell, 1);
        }
        // remove the start cell if the new end cell is the old start cell
        if (startCell === nodeName) {
          setStartCell(null);
        }
        setEndCell(nodeName);
      },
      [disabledCells, setEndCell, setStartCell, startCell]
    );

    const refsCells = useRef(new Map());

    useEffect(() => {
      if (visitedCells.length && shortestPathCells.length) {
        let current = 0;
        const interval = setInterval(() => {
          if (current < visitedCells.length) {
            const nodeName = visitedCells[current];
            if (![startCell, endCell].includes(nodeName)) {
              const cell = refsCells.current.get(nodeName);
              cell.classList.add(styles.visitedCell);
            }
            current++;
          } else {
            clearInterval(interval);
            for (const nodeName of shortestPathCells) {
              const cell = refsCells.current.get(nodeName);
              cell.classList.add(styles.pathCell);
            }
          }
        }, 50);
      }
    }, [visitedCells, shortestPathCells, startCell, endCell]);

    return (
      <main ref={ref} className={styles.boardContainer}>
        <div
          onTouchMove={(e) => console.log(e)}
          className={styles.board}
          style={{
            width: CELL_SIDE * cellsPerWidth,
            height: CELL_SIDE * cellsPerHeight,
            backgroundPosition: `0 0, ${CELL_SIDE}px ${CELL_SIDE}px`,
            backgroundSize: `${CELL_SIDE * 2}px ${CELL_SIDE * 2}px`,
          }}
        >
          {graph &&
            Array.from(graph.entries()).map(([nodeName], i) => {
              const bool_isStartCell = startCell === nodeName;
              const bool_isEndCell = endCell === nodeName;
              const bool_isDisabledCell =
                !bool_isStartCell && // these two conditions should prevent to iterate
                !bool_isEndCell && // disabledCells when it is not necessary
                disabledCells.includes(nodeName);
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                <div
                  ref={(el) => {
                    refsCells.current.set(nodeName, el);
                  }}
                  key={nodeName}
                  id={nodeName}
                  onClick={() => {
                    switch (true) {
                      case !startCell:
                        cb_setStartCell(nodeName);
                        break;
                      case bool_isStartCell:
                        setStartCell(null);
                        break;
                      case !endCell:
                        cb_setEndCell(nodeName);
                        break;
                      case bool_isEndCell:
                        setEndCell(null);
                        break;
                      default: {
                        // add or remove disabled cell
                        const str_selectedCell = nodeName;
                        const int_cellPosition = disabledCells.findIndex(
                          (cell) => cell === str_selectedCell
                        );
                        const arr_newState = [...disabledCells];
                        if (int_cellPosition !== -1) {
                          arr_newState.splice(int_cellPosition, 1);
                        } else {
                          arr_newState.push(str_selectedCell);
                        }
                        setDisabledCells(arr_newState);
                        break;
                      }
                    }
                  }}
                  className={cn(styles.cell, {
                    [styles.startingCell]: startCell === nodeName,
                    [styles.endingCell]: endCell === nodeName,
                    [styles.disabledCell]: bool_isDisabledCell,
                  })}
                  style={{
                    width: `${CELL_SIDE}px`,
                    height: `${CELL_SIDE}px`,
                    top: Math.floor(i / cellsPerWidth) * CELL_SIDE,
                    left: CELL_SIDE * (i % cellsPerWidth),
                  }}
                >
                  {nodeName}
                </div>
              );
            })}
        </div>
      </main>
    );
  }
);

Board.displayName = "Board";

Board.propTypes = {
  graph: PropTypes.object,
  cellsPerWidth: PropTypes.number.isRequired,
  cellsPerHeight: PropTypes.number.isRequired,
  startCell: PropTypes.string,
  setStartCell: PropTypes.func.isRequired,
  endCell: PropTypes.string,
  setEndCell: PropTypes.func.isRequired,
  disabledCells: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDisabledCells: PropTypes.func.isRequired,
  visitedCells: PropTypes.arrayOf(PropTypes.string),
  shortestPathCells: PropTypes.arrayOf(PropTypes.string),
};

export { Board };
