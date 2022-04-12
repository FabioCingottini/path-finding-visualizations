import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import styles from "./TopBar.module.scss";

const TopBar = ({ startCell, endCell, onClickStartBtn }) => {
  const [shouldDisplayBtn, setShouldDisplayBtn] = useState(false);

  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!startCell) {
      setMessage("Please select the start cell");
    } else if (!endCell) {
      setMessage("Please select the end cell");
    } else {
      setMessage(`Select as many disabled cells as you want or press "Start!"`);
      setShouldDisplayBtn(true);
    }
  }, [startCell, endCell]);

  return (
    <nav className={styles.nav}>
      <p className={styles.message}>{message}</p>
      {shouldDisplayBtn && (
        <button className={styles.button} onClick={onClickStartBtn}>
          Start!
        </button>
      )}
    </nav>
  );
};

TopBar.propTypes = {
  startCell: PropTypes.string,
  endCell: PropTypes.string,
  onClickStartBtn: PropTypes.func.isRequired,
};

export { TopBar };
