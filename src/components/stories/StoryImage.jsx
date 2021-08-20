import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StoryImage = ({ story }) => {
  return (
    <div className="stories__body__image">
      <LazyLoadImage src={story.image} alt={story.title} />
      <div
        className={
          story.status === "Mostly Read"
            ? "mostly-read"
            : story.status === "New"
            ? "new"
            : story.status === "Hot"
            ? "hot"
            : ""
        }
      >
        {story.status}
      </div>
    </div>
  );
};

export default StoryImage;
