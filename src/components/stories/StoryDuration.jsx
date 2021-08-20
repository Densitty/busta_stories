import React from "react";
import { BsStopwatch } from "react-icons/bs";

const StoryDuration = ({ story }) => {
  return (
    <div className="stories__body__contents__top__duration">
      <BsStopwatch size={18} color="#df2189" />
      <div className="stories__body__contents__top__duration__time">
        {story.duration} read
      </div>
    </div>
  );
};

export default StoryDuration;
