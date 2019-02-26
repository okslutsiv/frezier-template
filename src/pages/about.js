import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//====
import PropTypes from "prop-types";
import PricePanel from "../components/pageAbout/PricePanel";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import styling from "../images/pricelist/styling.jpg";
import manHaircut from "../images/pricelist/man-haircut.jpg";
import makeup from "../images/pricelist/makeup.jpg";
import manicure from "../images/pricelist/manicure.jpg";
import smokyEye from "../images/pricelist/smoky-eye.jpg";

import HeroSalon from "../components/pageAbout/heroSalon";
//===

const styles = theme => {
  const { gold, burgundy, error } = theme.palette;
  console.log(theme.palette);

  return {
    root: {
      marginTop: "-5rem",
      position: "relative",
      "& h2": {
        color: burgundy[700],
        textAlign: "center",
      },
    },
    container: {
      width: "90%",
      maxWidth: 960,
      margin: "0 auto",
    },
    intro: {
      padding: "2rem 2rem",
    },
    title: {
      textAlign: "center",
    },
  };
};

const AboutPage = props => {
  const { classes } = props;
  return (
    <Layout>
      <SEO title="Page two" />
      <HeroSalon />
      <div className={classes.root}>
        <div className={classes.container}>
          <PricePanel
            title="Стрижка, фарбування та укладка волосся"
            image={styling}
            description=" Ваш текст тут:
                Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур. Еирмод фиерент еу меи, ут сит
                дицит апериам.Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. "
            leftImg
          />

          <PricePanel
            title="Догляд за бровами і віями"
            image={smokyEye}
            description=" Ваш текст тут: 
                Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур. Еирмод фиерент еу меи, ут сит
                дицит апериам."
          />

          <PricePanel
            title="Манікюр та педікюр"
            image={manicure}
            description=" Ваш текст тут: 
                Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур. Еирмод фиерент еу меи, ут сит
                дицит апериам.Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур."
            leftImg
          />

          <PricePanel
            title="Макіяж"
            image={makeup}
            description=" Ваш текст тут: 
                Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур. Еирмод фиерент еу меи, ут сит
                дицит апериам."
          />

          <PricePanel
            title="Чоловічі стрижки"
            image={manHaircut}
            description="  Ваш текст тут: 
                Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Ат дуо елитр оцурререт. Ут цум иллум ирацундиа цонцлудатуряуе,
                яуи те нибх ребум малис. Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур.Но анимал сигниферумяуе сед, хас ет
                детрахит лобортис цомплецтитур. Еирмод фиерент еу меи, ут сит
                дицит апериам."
            leftImg
          />
        </div>
      </div>
    </Layout>
  );
};
AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(AboutPage));
