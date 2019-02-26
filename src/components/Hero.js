import React from "react";
import CtaButton from "../components/CTAButton";
import { withStyles, Button, Typography, IconButton } from "@material-ui/core";

import HeroBackground from "../images/backgrounds/herorose";
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
      paddingTop: `20vh`,
      minHeight: `75vh`,
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
  const handleCallToAction = () => console.log("click");
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
            <CtaButton handleCallToAction={handleCallToAction} />
          </div>
        </div>
      </HeroBackground>
    </>
  );
}

export default withStyles(styles)(Hero);
