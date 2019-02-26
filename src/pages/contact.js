import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="CONTACT" />
    <h1>Hi from the CONTACT page</h1>
    <p>Welcome to page CONTACT</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;
