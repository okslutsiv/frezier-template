import React from "react";
import Clock from "../../images/clock";
import { Paper, Grid, withStyles, Typography, Hidden } from "@material-ui/core";
import ClockBackground from "../../images/backgrounds/clock";

const styles = theme => {
  const { burgundy, gold, olive } = theme.palette;
  return {
    root: {
      padding: "5%",
      textAlign: "center",
    },
    title: {
      color: gold[700],
      margin: "1rem auto",
    },
    adress: {
      color: burgundy[900],
      fontSize: "1.6rem",
      margin: "1rem auto",
    },
    paper: {
      backgroundColor: "rgba(255,252,245,1)",
      backgroundImage: `linear-gradient(45deg, ${gold[200]} 20% ,${
        olive[200]
      } 80%)`,
      padding: "1.0rem",
      margin: "0.5rem auto",
      textAlign: "center",
      boxShadow: "none",
      "& p": {
        color: burgundy[900],
      },
    },
  };
};

function Working(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Grid container justify="space-around" alignItems="flex-end">
        <Hidden smDown>
          <Grid item sm={4}>
            <Clock />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h2" className={classes.title}>
            Чекаємо на Вас
          </Typography>
          <Typography variant="h3" className={classes.adress}>
            м.Львів, вулиця Болгарська, 1
          </Typography>
          <Paper className={classes.paper}>
            <Grid container justify="space-between">
              <Grid item xs={3}>
                <Typography>Пн</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>з 10:00 до 20:00</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container justify="space-between">
              <Grid item xs={3}>
                <Typography>Вт-Чт</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>з 9:00 до 20:00</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container justify="space-between">
              <Grid item xs={3}>
                <Typography>Пт</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>з 9:00 до 21:00</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container justify="space-between">
              <Grid item xs={3}>
                <Typography>Сб</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>з 8:00 до 16:00</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container justify="space-between">
              <Grid item xs={3}>
                <Typography>Нд</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>Відпочиваємо</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>{" "}
      </Grid>
    </section>
  );
}

export default withStyles(styles)(Working);
