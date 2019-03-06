import React from "react";
import { Link } from "gatsby";

import CtaButton from "../CTAButton";
import { withStyles, Typography } from "@material-ui/core";
import HeroBackground from "../../images/backgrounds/herorose";

const styles = theme => {
  const { gold, burgundy, error } = theme.palette;
  return {
    root: {
      display: "block",
      paddingLeft: "10%",
      paddingRight: "5%",
      paddingBottom: "3rem",
      paddingTop: "5vh",
      textShadow: "0 0 5px rgba(0,0,0,0.5)",
      backgroundImage: `linear-gradient(-135deg, rgba(255,0,0,0.2) 20%, rgba(0,0,0,0.8))`,
      // paddingTop: `20vh`,
    },
    ask: {
      color: gold[100],
    },
    answer: {
      color: gold[700],
      fontWeight: 700,
    },
    ctaText: {
      marginTop: "2rem",
      color: "#fff",
    },
    ctaButton: {
      paddingTop: "10vh",
    },
  };
};

function Hero(props) {
  const { classes } = props;
  return (
    <>
      <HeroBackground>
        <div className={classes.root}>
          <Typography variant="h1" className={classes.ask}>
            Мати ідеальний вигляд
          </Typography>
          <Typography variant="h1" className={classes.answer}>
            Реально
          </Typography>
          <Typography variant="h5" className={classes.ctaText}>
            Забронюйте послугу просто зараз
          </Typography>
          <div className={classes.ctaButton}>
            <CtaButton />
          </div>
        </div>
      </HeroBackground>
    </>
  );
}

export default withStyles(styles)(Hero);
