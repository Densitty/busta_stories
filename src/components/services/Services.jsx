import React, { useState } from "react";
import { ServicesProvider } from "../../utils/otherContexts/ServicesFAQContext";
import ServicesFAQ from "./ServicesFAQ";
import ServicesHeading from "./ServicesHeading";

const Services = () => {
  const [heading, useHeading] = useState({
    header:
      "busta stories provide the engaging stories for or readers of various ages to reading pleasure",
    subHeader:
      "Reading for leisure is our goal and we are here to provide it. We believe reading should be fun and engaging, reason you read any tale you want and can also create any tale you want others to read.",
  });

  return (
    <section className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row m-left-15 m-right-15">
            <div className="col-6 pad-15">
              <ServicesHeading {...heading} />
            </div>
            <div className="col-6 pad-15">
              <ServicesFAQ />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
