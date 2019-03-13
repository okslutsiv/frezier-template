import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";

import Layout from "../components/layout";
import SEO from "../components/seo";

import StepperAppoint from "../components/pageContact/Stepper";
import HeroContact from "../components/pageContact/heroContact";
const styles = theme => {
  const { burgundy, gold, olive } = theme.palette;

  return {
    root: {
      position: "relative",
      "& h2": {
        color: burgundy[700],
        textAlign: "center",
      },
    },
    container: {
      width: "90%",
      maxWidth: 960,
      margin: "2rem auto 0",
      borderRadius: 4,
      backgroundImage: `linear-gradient(45deg, ${gold[300]}, ${olive[300]})`,
      // boxShadow:
      //   "0px 5px 15px -3px rgba(0,0,0,0.2), 0px 8px 20px 1px rgba(0,0,0,0.14), 0px 3px 24px 2px rgba(0,0,0,0.12)",
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
  const { classes, data } = props;
  const masters = data.allMastersJson.edges;
  const services = data.allServicesJson.edges;

  return (
    <Layout>
      <SEO title="CONTACT" />
      <HeroContact />
      <div className={classes.root}>
        <div className={classes.container}>
          <StepperAppoint masters={masters} services={services} />
        </div>
      </div>
    </Layout>
  );
};

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const query = graphql`
  query ContactPageQuery {
    allServicesJson {
      edges {
        node {
          category
          pricelist {
            service
            price
          }
        }
      }
    }
    allMastersJson {
      edges {
        node {
          id
          name
          specialty
          avatar {
            src {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(ContactPage));
