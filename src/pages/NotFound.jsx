import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Notfound = () => {
  const [state, setstate] = useState({
    heading: "oops!!!",
    para: "There appears to be an invalid route. Please check back the homepage.",
    image: "/assets/busta_stories/images/404.jpg",
  });
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Busta Stories page not found" />
      </Helmet>
      <Header heading={state.heading} para={state.para} image={state.image}>
        <Link
          to="/"
          className="btn-default"
          style={{ display: "inline-block" }}
        >
          Go Back Home
        </Link>
      </Header>
    </>
  );
};

export default Notfound;
