import React from "react";
import SalonBackground from "../../images/backgrounds/salon";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => {
  const { gold, olive, burgundy } = theme.palette;
  return {
    root: {
      width: "100%",
      paddingBottom: "2.5rem",
      backgroundImage: `radial-gradient(circle, rgba(255,250,240,0.85) 40%,rgba(255,250,240,0.55))`,
      paddingTop: `5vh`,
      minHeight: `50vh`,
      "& h2": {
        color: gold[700],
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
      marginBottom: "2rem",
      marginLeft: "50%",
      transform: "translateX(-50%)",
    },
    intro: {
      //   margin: "1rem 5% 2rem",
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
            Запис онлайн
          </Typography>
          <Typography variant="body1" className={classes.intro}>
            у кілька простих кроків
          </Typography>
          <Typography className={classes.intro}>
            Будь-який крок, крім останнього, де вказуються Ваші контакти, не є
            обов'язковим.
            <br /> Ви можете оминути його, натомість погодивши інформацію з
            адміністратором в процесі зворотнього телефонного дзвінка
          </Typography>
        </div>
      </SalonBackground>
    </section>
  );
}
HeroSalon.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HeroSalon);
