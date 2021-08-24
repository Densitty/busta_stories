import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AboutImage from "../components/partials/AboutImage";
import PageContainer from "../components/partials/PageContainer";

const About = () => {
  const [about, setAbout] = useState({
    heading: "about us",
    copyWord: "serving the best of leisure-time tales since 2020",
    description:
      "Read the best of leisure time stories online or download to your device for offline reading. Share the fun with friends and young ones as you read together, the best entertaining stories that keep you glued to your seat.",
  });
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="About BustaStories" />
        <meta
          name="keywords"
          content="stories, storybook, leisure, play, fun, playtime, reading, sci-fi, fiction, children, teens, adults, war, romance, technology, travel, culture, religion, satire, non-fiction"
        />
      </Helmet>
      <PageContainer {...about}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;
