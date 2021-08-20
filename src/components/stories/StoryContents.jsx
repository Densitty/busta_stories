import React from "react";
import StoryAuthorAndTitle from "./StoryAuthorAndTitle";
import StoryDuration from "./StoryDuration";
import StoryFeatures from "./StoryFeatures";

const StoryContents = ({ story }) => {
  return (
    <div className="stories__body__contents">
      <div className="stories__body__contents__top">
        <StoryAuthorAndTitle {...story} />
        <StoryDuration story={story} />
      </div>
      <StoryFeatures type="photo" feature={story.photos} />
      <StoryFeatures type="series" feature={story.series} />
      <div className="stories__body__contents__button">
        <button className="btn--dark--sm">read now</button>
      </div>
    </div>
  );
};

export default StoryContents;
