import React from "react";
import SalonBackground from "../../images/backgrounds/salon";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CtaButton from "../CTAButton";

const styles = theme => {
  const { gold, olive, burgundy } = theme.palette;
  return {
    root: {
      width: "100%",
      paddingBottom: "2.5rem",
      background: `rgba(255,255,255,0.85)`,
      paddingTop: `5vh`,
      minHeight: `50vh`,
      "& h2": {
        color: gold[700],
        textAlign: "center",
        margin: "0 2rem",
      },
      "& p": {
        color: burgundy[900],
        padding: "1rem 2rem",
        textAlign: "center",
      },
    },
    cta: {
      display: "block",
      marginBottom: "2rem",
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
            Ми пишаємось своїми майстрами
          </Typography>
          <Typography variant="body1" className={classes.intro}>
            Без сумніву, Ви теж їх полюбите
          </Typography>
          <Typography className={classes.intro}>
            Кожен з них є досвідченим професіоналом своєї справи, креативним та
            ретельним.
          </Typography>
          <CtaButton className={classes.cta} />
        </div>
      </SalonBackground>
    </section>
  );
}
HeroSalon.propTypes = {};

export default withStyles(styles)(HeroSalon);
