import React from "react";
import StoryContents from "./StoryContents";
import StoryImage from "./StoryImage";

const StoryBody = ({ story }) => {
  return (
    <div className="stories__body">
      <StoryImage story={story} />
      <StoryContents story={story} />
    </div>
  );
};

export default StoryBody;
