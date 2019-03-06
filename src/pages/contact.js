import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { withStyles, Paper } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";

import Layout from "../components/layout";
import SEO from "../components/seo";

import StepperAppoint from "../components/pageContact/Stepper";
import HeroContact from "../components/pageContact/heroContact";
const styles = theme => {
  const { gold, burgundy, error } = theme.palette;

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
      // padding: "3%",
      // boxShadow:
      //   "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
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
// export default withStyles(styles)(ContactPage);
