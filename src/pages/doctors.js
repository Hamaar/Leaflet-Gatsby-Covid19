import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const Doctors = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Doctors</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>This Page Doctors</h1>
        <p>Page doctors will be soons</p>
      </Container>
    </Layout>
  );
};

export default Doctors;
