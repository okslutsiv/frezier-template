import React from "react";
import PropTypes from "prop-types";

export default function ExpandMoreIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "30px"}
      fill={props.fill || "#ffffff"}
      viewBox="0 0 306 306"
    >
      <g>
        <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35 		" />
      </g>
    </svg>
  );
}
ExpandMoreIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
};
