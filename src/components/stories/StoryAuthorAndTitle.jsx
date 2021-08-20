import React from "react";

const StoryAuthorAndTitle = ({ title, author }) => {
  return (
    <>
      <div className="stories__body__contents__top__name">{title}</div>
      <div className="stories__body__contents__top__author">{author}</div>
    </>
  );
};

export default StoryAuthorAndTitle;
