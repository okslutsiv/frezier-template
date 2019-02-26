import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const FooterBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "texture-flower-rose.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        Tag="div"
        className="footer py-3"
        style={{
          backgroundSize: `cover`,
          minHeight: `10vh`,
        }}
        fluid={data.backgroundImage.childImageSharp.fluid}
      >
        {children}
      </BackgroundImage>
    )}
  />
);
export default FooterBackground;
