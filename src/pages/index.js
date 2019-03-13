import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import Hero from "../components/pageIndex/Hero";
import Features from "../components/pageIndex/Features";
import Promo from "../components/pageIndex/Promo";
import Advantages from "../components/pageIndex/Advantages";
import Working from "../components/pageIndex/Working";
import MapPigeon from "../components/Map";

import SEO from "../components/seo";

const styles = theme => {
  const { gold } = theme.palette;

  return {
    root: {
      textAlign: "center",
      paddingTop: "2rem",
      "& h2": {
        color: gold[900],
      },
    },
  };
};

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `OksLutsiv`,
        `portfolio`,
        `demo Frizier`,
        `gatsby`,
        `application`,
        `react`,
      ]}
    />

    <Hero />
    <Promo />
    <Advantages />
    <Features />
    <Working />
    <MapPigeon />
  </Layout>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(IndexPage));
