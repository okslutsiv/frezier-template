import React from "react";

import SalonBackground from "../../images/backgrounds/salon";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CtaButton from "../CTAButton";

const styles = theme => {
  const { gold, burgundy } = theme.palette;
  return {
    root: {
      width: "100%",
      paddingBottom: "2.5rem",
      backgroundImage: `radial-gradient(circle, rgba(255,250,240,0.85) 40%,rgba(255,250,240,0.55))`,
      paddingTop: `5vh`,
      minHeight: `50vh`,
      "& h2": {
        color: gold[900],
        textAlign: "center",
        margin: "0 2rem",
        textShadow: "0 0 15px rgba(255,250,240,1)",
      },
      "& p": {
        color: burgundy[900],
        padding: "1rem 2rem",
        textAlign: "center",
        textShadow: "0 0 15px rgba(255,250,240,1)",
      },
    },
    cta: {
      display: "block",
      // marginBottom: "2rem",
      marginLeft: "50%",
      transform: "translateX(-50%)",
    },
    intro: {
      margin: "1rem 5%",
    },
  };
};

function HeroSalon(props) {
  const { classes } = props;

  return (
    <section>
      <SalonBackground>
        <div className={classes.root}>
          <Typography variant="h2" gutterBottom>
            До ваших послуг
          </Typography>
          <Typography variant="body1" className={classes.intro}>
            повний комплекс перукарських послуг для чоловіків і жінок
          </Typography>
          <Typography className={classes.intro}>
            Наведені на цій сторінці ціни є базовими.
            <br /> Реальна вартість може дещо відхилятись в обидва боки в
            залежності від обраної марки засобів, довжини волосся, Ваших
            уподобань та додаткових опцій.
          </Typography>
          <CtaButton className={classes.cta} />
        </div>
      </SalonBackground>
    </section>
  );
}
HeroSalon.propTypes = {};

export default withStyles(styles)(HeroSalon);
