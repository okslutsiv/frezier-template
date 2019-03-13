import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  Typography,
  Paper,
  Switch,
  Grid,
  Avatar,
} from "@material-ui/core";

export const styles = theme => {
  const { gold, olive } = theme.palette;
  return {
    avatar: {
      width: "60%",
      height: "auto",
      margin: "5% 20%",
      border: `2px solid ${olive[500]}`,
    },
    card: {
      textAlign: "center",
      width: "80%",
      margin: "10%",
      border: `1px solid ${olive[500]}`,
      padding: "1rem 0",
    },
    caption: {
      color: gold[900],
      fontSize: 14,
      "& span": {
        fontSize: 10,
      },
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
  const { classes, handleSwithChange, masters, mastersList } = props;
  return (
    <Grid container justify="center">
      {masters.map(master => {
        const masterData = mastersList.filter(
          item => item.node.id === master.id,
        );
        return (
          <Grid item key={master.id} xs={6} sm={4} md={3} container>
            <Paper elevation={8} className={classes.card}>
              <Avatar
                src={masterData[0].node.avatar.src.publicURL}
                className={classes.avatar}
              />
              <Grid
                item
                xs={12}
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Switch
                  checked={master.checked}
                  onChange={handleSwithChange(master.id)}
                  color="primary"
                />
                <Typography className={classes.caption}>
                  <span>{masterData[0].node.specialty}</span>
                  <br />
                  {masterData[0].node.name}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

MastersStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MastersStep);
