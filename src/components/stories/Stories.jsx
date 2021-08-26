import React from "react";
import StoryBody from "./StoryBody";

const Stories = ({ stories, genre }) => {
  return (
    <section className="stories">
      <div className="container">
        <div className="stories__container">
          <h2 className="heading animate">{genre}</h2>
          <div className="row">
            {stories.length > 0
              ? stories.map((story) => {
                  // console.log(story);
                  return (
                    <div key={story.id} className="col-3 pad-15">
                      <StoryBody story={story} />
                    </div>
                  );
                })
              : `No story for ${genre} has been shared yet.`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
