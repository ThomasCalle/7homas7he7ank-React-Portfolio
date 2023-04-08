import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <>
      <h1>
        <Link to="/7homas7he7ank-react-portfolio/">7homas Calle</Link>
      </h1>
      <Navigation/>
    </>
  );
}

export default Header;
