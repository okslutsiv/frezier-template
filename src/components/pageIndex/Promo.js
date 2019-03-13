import React from "react";
import Redhair from "../../images/redhair";
import CtaButton from "../CTAButton";
import GoldGrungBackground from "../../images/backgrounds/goldGrung";

import { withStyles, Typography, Grid, Card, Hidden } from "@material-ui/core";

const styles = theme => {
  const { burgundy, error, gold, olive } = theme.palette;
  return {
    root: {
      backgroundColor: `rgba(255,250,240,0.8)`,
      padding: "2rem 0",
      "& h2": {
        color: burgundy[700],
        textAlign: "center",
      },
    },
    promo: {
      textAlign: "center",
      width: "80%",
      maxWidth: 700,
      border: `4px solid ${olive[500]}`,
      margin: `2rem auto`,
      background: "white",
    },
    inner: {
      border: `1px solid ${gold[500]}`,
      margin: 3,
      paddingTop: "2rem",
    },

    text: {
      color: gold[900],
    },
    strong: {
      display: "block",
      fontSize: "3rem",
      color: error[500],
      padding: " 1rem 0",
    },
    ctaButton: {
      margin: "1rem auto",
      display: "block",
    },
    redhair: {
      margin: "0 auto",
    },
  };
};

function Promo(props) {
  const { classes } = props;
  return (
    <GoldGrungBackground>
      <section className={classes.root}>
        <Card raised className={classes.promo}>
          <div className={classes.inner}>
            <Typography variant="h2">ПРОМОУЦІЯ ТИЖНЯ</Typography>

            <Grid container alignItems="flex-end">
              <Grid item md={6}>
                <Hidden smDown>
                  <div className={classes.redhair}>
                    <Redhair />
                  </div>
                </Hidden>
              </Grid>
              <Grid item xs={12} md={6} container justify="center">
                <div>
                  <Typography variant="h3" className={classes.text}>
                    Знижка на всі стрижки
                  </Typography>
                  <Typography>
                    <strong className={classes.strong}>-10%</strong>
                  </Typography>
                  <div className={classes.ctaButton}>
                    <CtaButton />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Card>{" "}
      </section>
    </GoldGrungBackground>
  );
}

export default withStyles(styles)(Promo);
