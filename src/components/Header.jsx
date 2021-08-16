import React, { useState } from "react";

const Header = ({ heading, para, children }) => {
  const [header, setHeader] = useState({
    path: "assets/busta_stories/videos/eros.mp4",
    poster: "assets/busta_stories/videos/big_black_tempty.jpg",
    logo: "assets/busta_stories/images/logo.png",
  });

  return (
    <header className="header">
      <div className="container pr">
        <section className="header__logo">
          <img src={header.logo} alt="logo" />
        </section>
      </div>
      <section className="header__video">
        <video
          src={header.path}
          poster={header.poster}
          autoPlay
          loop
          muted
        ></video>
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
