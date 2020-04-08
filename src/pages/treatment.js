import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const Treatment = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Treatment</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>This Page Treatment</h1>
        <p>Page treatment will be soons</p>
      </Container>
    </Layout>
  );
};

export default Treatment;
