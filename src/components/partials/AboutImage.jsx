import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutImage = () => {
  return (
    <div className="page__image animate">
      <LazyLoadImage
        src={"/assets/busta_stories/about/story_time.jpg"}
        alt="about-us-image"
      />
    </div>
  );
};

export default AboutImage;
