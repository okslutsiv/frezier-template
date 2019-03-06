import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";

import Layout from "../components/layout";
import SEO from "../components/seo";

import StepperAppoint from "../components/pageContact/Stepper";
import HeroContact from "../components/pageContact/heroContact";
const styles = theme => {
  const { burgundy } = theme.palette;

  return {
    root: {
      marginTop: "-3rem",
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
      borderRadius: "0.25rem",
      backgroundColor: "rgba(255,250,240,0.8)",
      overflow: "hidden",
    },
    intro: {
      padding: "2rem 2rem",
    },
    title: {
      textAlign: "center",
    },
  };
};

const ContactPage = props => {
  const { classes } = props;
  return (
    <Layout>
      <SEO title="CONTACT" />
      <HeroContact />
      <div className={classes.root}>
        <div className={classes.container}>
          <StepperAppoint />
        </div>
      </div>
    </Layout>
  );
};

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(ContactPage));
