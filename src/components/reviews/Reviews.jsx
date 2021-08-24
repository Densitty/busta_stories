import React from "react";
import { useServicesContext } from "../../utils/otherContexts/ServicesFAQContext";
import ReviewBody from "./ReviewBody";

const Reviews = () => {
  const dataFromServicesContext = useServicesContext();

  const {
    state: { reviews },
  } = dataFromServicesContext;

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="heading animate">Our Readers say...</h2>
        <div className="row m-left-15 m-right-15">
          {reviews.length > 0
            ? reviews.map((review) => {
                return <ReviewBody key={review.id} {...review} />;
              })
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
