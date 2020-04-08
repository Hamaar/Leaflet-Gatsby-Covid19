import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const Symptoms = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Symptoms</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>This Page Symptoms</h1>
        <p>Page symptoms will be soons</p>
      </Container>
    </Layout>
  );
};

export default Symptoms;
