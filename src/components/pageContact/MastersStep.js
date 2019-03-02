import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  Typography,
  Paper,
  Radio,
  FormControlLabel,
  Grid,
  Avatar,
} from "@material-ui/core";
import {
  RadioButtonUncheckedIcon,
  RadioButtonCheckedIcon,
  GridOff,
} from "@material-ui/icons";

export const styles = theme => {
  const { gold, olive, burgundy } = theme.palette;
  return {
    avatar: {
      width: "60%",
      height: "auto",
      margin: "5% 20%",
      // boxShadow:
      //   "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
      border: `2px solid ${olive[500]}`,
    },
    card: {
      textAlign: "center",
      width: "80%",
      margin: "10%",
      border: `1px solid ${olive[500]}`,
      color: burgundy[700],
    },
    caption: {
      paddingRight: 12,
    },
    toggleContainer: {
      height: 56,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: `${theme.spacing.unit}px 0`,
      background: theme.palette.background.default,
    },
  };
};
function MastersStep(props) {
  const { classes, handleChange, value, masters } = props;

  return (
    <Grid container justify="center">
      {masters.map((master, i) => (
        <Grid item key={i} xs={6} sm={4} md={3} container>
          <Paper elevation={8} className={classes.card}>
            <Avatar src={master.image} className={classes.avatar} />
            <Grid item xs={12} container justify="center" alignItems="center">
              <Radio
                checked={value === master.name}
                onChange={handleChange}
                value={master.name}
              />
              <Typography variant="body2" className={classes.caption}>
                {master.name}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

MastersStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MastersStep);
