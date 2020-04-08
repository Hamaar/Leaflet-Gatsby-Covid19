import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid19 Gatsby Site</p>
        <ul>
          <li>
            <Link activeClassName="active-li" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active-li" to="/symptoms/">
              Symptoms
            </Link>
          </li>
          <li>
            <Link activeClassName="active-li" to="/treatment/">
              Treatment
            </Link>
          </li>
          <li>
            <Link activeClassName="active-li" to="/doctors/">
              Doctors
            </Link>
          </li>
          <li>
            <Link activeClassName="active-li" to="/medicine/">
              Medicine
            </Link>
          </li>
          <li>
            <Link activeClassName="active-li" to="/contact/">
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
