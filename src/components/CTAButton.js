import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "gatsby";
import { Button, withStyles } from "@material-ui/core";

export const styles = theme => {
  const { burgundy, olive, error } = theme.palette;
  return {
    root: {
      backgroundImage: `linear-gradient(145deg, ${error[300]}, ${burgundy[900]}
         )`,
      lineHeight: 1.8,
      borderRadius: 20,
      fontFamily: '"Roboto Slab", "serif"',

      "& span a": { color: olive[200], textDecoration: "none" },
      "&:hover": {
        backgroundImage: `linear-gradient(145deg, ${error[300]}, ${error[900]}
          )`,
      },
    },
  };
};

function CtaButton(props) {
  const { classes, className: classNameProp } = props;
  const mergedClassNames = classNames(classes.root, classNameProp);

  console.log(props);

  return (
    <Button
      variant="contained"
      className={mergedClassNames}
      onClick={props.handleCallToAction}
    >
      <Link to="/contact">Записатись</Link>
    </Button>
  );
}

export default withStyles(styles)(CtaButton);
