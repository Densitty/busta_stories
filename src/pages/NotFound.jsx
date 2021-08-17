import React from "react";
import { Helmet } from "react-helmet-async";

const Notfound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Busta Stories page not found" />
      </Helmet>
      <h1>Dear Busta, this destination does not exist.</h1>
    </>
  );
};

export default Notfound;
