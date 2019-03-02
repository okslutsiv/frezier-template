import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
// import withRoot from "../components/wrappers/MUIProvider/withRoot";

import Header from "./Header";
import Footer from "./Footer";
// import "./scss/main.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            phone
            adress
            fblink
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          title={data.site.siteMetadata.title}
          phone={data.site.siteMetadata.phone}
          adress={data.site.siteMetadata.adress}
          fblink={data.site.siteMetadata.fblink}
        />
        <div
          style={{
            width: `100%`,
            minHeight: `57vh`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
// export default withRoot(Layout);
