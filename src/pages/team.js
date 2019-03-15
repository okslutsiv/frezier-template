import React from "react";
import { graphql } from "gatsby";
import { withStyles, Grid } from "@material-ui/core";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import HeroTeam from "../components/pageTeam/heroTeam";
import ProfileCard from "../components/pageTeam/profileCard";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const styles = theme => {
  return {
    root: {
      position: "relative",
    },
    container: {
      width: "90%",
      maxWidth: 960,
      margin: "0 auto 0",
      borderRadius: "0.25rem",
      backgroundColor: "rgba(255,250,240,0.8)",
    },
  };
};

const TeamPage = props => {
  const { classes, data } = props;
  const masters = data.allMastersJson.edges;

  const renderMasters = () =>
    masters.map((master, i) => (
      <Grid item xs={12} md={6} key={i}>
        <ProfileCard
          name={master.node.name}
          image={master.node.image.src.publicURL}
          chipData={master.node.chipData}
          description={master.node.description}
          specialty={master.node.specialty}
        />
      </Grid>
    ));
  return (
    <Layout>
      <SEO title="TEAM" />
      <HeroTeam />
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container justify="center" style={{ padding: "2rem 0" }}>
            {renderMasters()}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMastersJson {
      edges {
        node {
          name
          specialty
          chipData
          description
          image {
            src {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(TeamPage));
