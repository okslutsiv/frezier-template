import React from "react";
import PropTypes from "prop-types";

export default function MenuSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "30px"}
      fill={props.fill || "#ffffff"}
      className={props.className}
      viewBox="0 0 54 54"
    >
      <g transform="matrix(0.9999 0 0 0.9999 0.00269999 0.00269999)">
        <circle
          cx="7"
          cy="47"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="27"
          cy="47"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="47"
          cy="47"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="7"
          cy="27"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="27"
          cy="27"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="47"
          cy="27"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="7"
          cy="7"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="27"
          cy="7"
          r="7"
          data-original="#556080"
          className="active-path"
        />
        <circle
          cx="47"
          cy="7"
          r="7"
          data-original="#556080"
          className="active-path"
        />
      </g>
    </svg>
  );
}
MenuSvg.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
};
