import React from "react";

const ServicesHeading = (props) => {
  return (
    <article className="services__heading">
      <h1 className="services__heading__header">{props.header}</h1>
      <p className="services__heading__sub">{props.subHeader}</p>
    </article>
  );
};

export default ServicesHeading;
