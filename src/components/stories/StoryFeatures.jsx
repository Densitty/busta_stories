import React from "react";
import { BsCheck, BsX } from "react-icons/bs";

const StoryFeatures = ({ type, feature }) => {
  return (
    <div className="stories__body__contents__features">
      <div className="stories__body__contents__features__name">{type}</div>
      <div className="stories__body__contents__features__value">
        {feature ? (
          <BsCheck size={20} color={"#34d399"} />
        ) : (
          <BsX size={20} color="#ff4d58" />
        )}
      </div>
    </div>
  );
};

export default StoryFeatures;
