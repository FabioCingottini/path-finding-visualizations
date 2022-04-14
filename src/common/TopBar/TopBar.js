import PropTypes from "prop-types";
import { useMemo } from "react";

import styles from "./TopBar.module.scss";

const TopBar = ({
  startCell,
  endCell,
  onClickStartBtn,
  onClickResetBtn,
  hasAlgorithmFinished,
  isVisualizationOnGoing,
}) => {
  const message = useMemo(() => {
    if (!startCell) {
      return "Please select the start cell";
    } else if (!endCell) {
      return "Please select the end cell";
    } else {
      return `Select as many disabled cells as you want or press "Start!"`;
    }
  }, [startCell, endCell]);

  return (
    <nav className={styles.nav}>
      <p className={styles.message}>{message}</p>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.button}
          disabled={!startCell || !endCell || hasAlgorithmFinished}
          onClick={onClickStartBtn}
        >
          Start!
        </button>
        <button
          className={styles.button}
          disabled={isVisualizationOnGoing}
          onClick={onClickResetBtn}
        >
          Reset!
        </button>
      </div>
    </nav>
  );
};

TopBar.propTypes = {
  startCell: PropTypes.string,
  endCell: PropTypes.string,
  onClickStartBtn: PropTypes.func.isRequired,
  onClickResetBtn: PropTypes.func.isRequired,
  hasAlgorithmFinished: PropTypes.bool.isRequired,
  isVisualizationOnGoing: PropTypes.bool.isRequired,
};

export { TopBar };
