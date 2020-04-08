import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const Medicine = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Medicine</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>This Page Medicine</h1>
        <p>Page medicine will be soons</p>
      </Container>
    </Layout>
  );
};

export default Medicine;
