import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import withRoot from "../components/wrappers/MUIProvider/withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: "2rem",
  },
});

const NotFoundPage = props => {
  const {classes} = props
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={classes.root}>
        <h1>404 - NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(NotFoundPage));
