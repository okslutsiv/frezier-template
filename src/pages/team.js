import React from "react";
import { Link } from "gatsby";
import { withStyles, Grid } from "@material-ui/core";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import HeroTeam from "../components/pageTeam/heroTeam";
import ProfileCard from "../components/pageTeam/profileCard";

import hairdresser1 from "../images/team/hairdresser1.jpg";
import hairdresser2 from "../images/team/hairdresser2.jpg";
import hairdresser3 from "../images/team/hairdresser3.jpg";
import hairdresser4 from "../images/team/hairdresser4.jpg";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const styles = theme => {
  const { gold, burgundy, olive } = theme.palette;
  return {
    root: {
      padding: "5vh 0 5vh ",
      position: "relative",
    },
    container: {
      width: "90%",
      maxWidth: 1060,
      margin: "-5rem auto ",
    },
  };
};

const TeamPage = props => {
  const { classes } = props;

  return (
    <Layout>
      <SEO title="TEAM" />
      <HeroTeam />
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={32}>
            <Grid item xs={12} sm={6}>
              <ProfileCard
                name="Ірина Гринів"
                image={hairdresser1}
                chipData={[
                  "Жіночі стрижки",
                  "Чоловічі стрижки",
                  "Фарбування волосся",
                  "Урочисті зачіски",
                ]}
                description="Стаж роботи в професії 5 років."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileCard
                name="Олена Іванів"
                image={hairdresser2}
                chipData={[
                  "Жіночі стрижки",
                  "Плетення",
                  "Фарбування волосся",
                  "Урочисті зачіски",
                ]}
                description="Стаж роботи в професії 10 років."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileCard
                name="Ігор Боднар"
                image={hairdresser3}
                chipData={[
                  "Жіночі стрижки",
                  "Чоловічі стрижки",
                  "Фарбування волосся",
                ]}
                description="Стаж роботи в професії 6 років."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileCard
                name="Олена Стефура"
                image={hairdresser4}
                chipData={[
                  "Манікюр",
                  "Педікюр",
                  "Нарощення нігтів та вій",
                  "Макіяж",
                ]}
                description="Стаж роботи в професії 8 років."
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(TeamPage));
// export default withStyles(styles)(TeamPage);
