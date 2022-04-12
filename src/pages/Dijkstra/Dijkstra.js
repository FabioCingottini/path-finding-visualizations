import PropTypes from "prop-types";

export const Dijkstra = ({ children }) => {
  return children;
};

Dijkstra.propTypes = {
  graph: PropTypes.object,
  children: PropTypes.node.isRequired,
};
