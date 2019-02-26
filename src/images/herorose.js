import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const HeroBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "herorose1.jpg" }) {
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
        Tag="section"
        className="hero"
        style={{
          marginTop: "-60px",
          backgroundSize: `cover`,
          minHeight: `75vh`,
          paddingTop: `20vh`,
          paddingBottom: "1rem",
        }}
        fluid={data.backgroundImage.childImageSharp.fluid}
      >
        {children}
      </BackgroundImage>
    )}
  />
);
export default HeroBackground;
