import PropTypes from "prop-types";
import { forwardRef } from "react";

export const AStar = forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

AStar.displayName = "AStar";

AStar.propTypes = {
  graph: PropTypes.object,
  children: PropTypes.node.isRequired,
};
