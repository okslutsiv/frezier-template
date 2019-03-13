import React from "react";
import SalonBackground from "../../images/backgrounds/salon";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => {
  const { gold, burgundy } = theme.palette;
  return {
    root: {
      width: "100%",
      paddingBottom: "2.5rem",
      backgroundImage: `radial-gradient(circle, rgba(255,250,240,0.85) 40%,rgba(255,250,240,0.55))`,
      paddingTop: `15vh`,

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
        maxWidth: 960,
        margin: "0 auto",
      },
    },
    intro: {
      margin: "1rem 5% 2rem",
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
            Після отримання форми наш адміністратор перевірить робочі графіки і
            передзвонить до Вас за вказаним номером телефону.
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
