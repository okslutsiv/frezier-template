import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import PricePanel from "../components/pageAbout/PricePanel";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import GoldGrungBackground from "../images/backgrounds/goldGrung";
import HeroSalon from "../components/pageAbout/heroSalon";

const styles = theme => {
  const { burgundy } = theme.palette;

  return {
    container: {
      width: "90%",
      maxWidth: 960,
      margin: "2rem auto 0",
      borderRadius: "0.25rem",
      backgroundColor: "rgba(255,250,240,0.8)",
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
  const { classes, data } = props;
  const services = data.allServicesJson.edges;
  const renderService = () =>
    services.map((service, i) => (
      <PricePanel
        key={i}
        title={service.node.category}
        image={service.node.image.src.publicURL}
        description={service.node.intro}
        leftImg={i % 2 === 0}
        pricelist={service.node.pricelist}
      />
    ));

  return (
    <Layout>
      <SEO title="ABOUT" />
      <HeroSalon />
      <div className={classes.container}>
        <div className={classes.panel}>{renderService()}</div>
      </div>
    </Layout>
  );
};
AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export const query = graphql`
  {
    allServicesJson {
      edges {
        node {
          category
          pricelist {
            service
            price
          }
          image {
            src {
              publicURL
            }
          }
          intro
        }
      }
    }
  }
`;
export default withRoot(withStyles(styles)(AboutPage));
