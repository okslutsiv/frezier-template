import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";

export const styles = theme => {
  const { burgundy, olive } = theme.palette;
  return {
    root: {
      padding: "5%",
      backgroundImage: `linear-gradient(45deg, ${burgundy[700]}, ${
        burgundy[900]
      })`,
      color: olive[200],
      textAlign: "center",
      "& p": {
        color: olive[200],
      },
      "& h3": {
        color: olive[200],
        paddingBottom: "2rem",
      },
    },
    title: {
      color: olive[300],
      textAlign: "center",
      marginBottom: "2rem",
    },
  };
};

function Advantages(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Grid container alignItems="center" justify="center" spacing={40}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className={classes.block}>
            МОДНІ ТЕНДЕНЦІЇ
          </Typography>
          <Typography className={classes.block}>
            Ми завжди в курсі останніх трендів в області перукарського мистецтва{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className={classes.block}>
            КОМАНДА ПРОФІ
          </Typography>
          <Typography className={classes.block}>
            У кожного з наших майстрів як мінімум 3-річний досвід роботи своєї
            справи{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className={classes.block}>
            100% СТЕРИЛІЗАЦІЯ
          </Typography>
          <Typography className={classes.block}>
            Повна дезинфекція і стерилізація всього інструменту{" "}
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default withStyles(styles)(Advantages);
