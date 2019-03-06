import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { navigate } from "gatsby";
import { Button, withStyles } from "@material-ui/core";

export const styles = theme => {
  const { burgundy, olive, error } = theme.palette;
  return {
    root: {
      color: olive[200],
      backgroundImage: `linear-gradient(145deg, ${error[300]}, ${burgundy[900]}
         )`,
      lineHeight: 1.8,
      borderRadius: 20,
      fontFamily: '"Roboto Slab", "serif"',

      "&:hover": {
        backgroundImage: `linear-gradient(145deg, ${error[300]}, ${error[900]}
          )`,
      },
    },
  };
};

function CtaButton(props) {
  const { classes, className: classNameProp } = props;
  const handleCallToAction = () => navigate("/contact");
  const mergedClassNames = classNames(classes.root, classNameProp);

  return (
    // <Link to="/contact">
    <Button
      variant="contained"
      className={mergedClassNames}
      onClick={handleCallToAction}
    >
      Записатись
    </Button>
    //  </Link>
  );
}

export default withStyles(styles)(CtaButton);
