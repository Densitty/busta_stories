import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// lazy-load the image
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = ({ heading, para, children, image }) => {
  const history = useHistory();
  const [header, setHeader] = useState({
    path: "/assets/busta_stories/videos/story.mp4",
    poster: "/assets/busta_stories/videos/big_black_tempty.jpg",
    logo: "/assets/busta_stories/images/busta_stories.svg",
  });

  return (
    <header className="header">
      <div className="container pr">
        <section className="header__logo" onClick={() => history.push("/")}>
          <LazyLoadImage src={header.logo} alt="logo" />
        </section>
      </div>
      <section className="header__video">
        {image ? (
          <LazyLoadImage
            src={image}
            alt={heading}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <video
            src={header.path}
            poster={header.poster}
            autoPlay
            loop
            muted
          ></video>
        )}
      </section>
      <section className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__block">
              <h1 className="header__contents__text__block__header">
                {heading}
              </h1>
              <p className="header__contents__text__block__para">{para}</p>
              <div className="header__contents__text__block__link">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
