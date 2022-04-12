import PropTypes from "prop-types";

import styles from "./SideBar.module.scss";

export const SideBar = ({ onClickDijkstra, onClickAStar }) => {
  return (
    <aside className={styles.aside}>
      <ul className={styles.ul}>
        {[
          ["Dijkstra", onClickDijkstra],
          ["A*", onClickAStar],
        ].map(([label, onClick]) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <li className={styles.li} key={label} onClick={onClick}>
              {label}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

SideBar.propTypes = {
  onClickDijkstra: PropTypes.func.isRequired,
  onClickAStar: PropTypes.func.isRequired,
};
