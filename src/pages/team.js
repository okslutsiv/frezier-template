import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import HeroTeam from "../components/pageTeam/heroTeam";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const styles = theme => {
  const { gold, burgundy } = theme.palette;
  return {
    root: {
      color: burgundy[900],
    },
  };
};

const TeamPage = props => {
  const { classes } = props;

  return (
    <Layout>
      <SEO title="TEAM" />
      <HeroTeam />
      <p>Welcome to page TEAM</p>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(TeamPage));
