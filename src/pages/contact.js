import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const Contact = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Contact</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>This Page Contact</h1>
        <p>Page contact will be soons</p>
      </Container>
    </Layout>
  );
};

export default Contact;
