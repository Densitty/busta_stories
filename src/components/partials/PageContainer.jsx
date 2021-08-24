import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../Header";
import AboutImage from "./AboutImage";

const PageContainer = ({ heading, copyWord, description, children }) => {
  return (
    <>
      <Header heading={heading} />
      <section className="page">
        <div className="container">
          <div className="row">
            <div className="col-6">{children}</div>
            <div className="col-6">
              <article className="page__info">
                <h2 className="heading">{heading}</h2>
                <h2 className="page__info__heading">{copyWord}</h2>
                <p className="page__info__msg">{description}</p>
                <div className="page__info__link ">
                  <Link to="/" className="btn-dark" style={{}}>
                    Go Home
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PageContainer;
