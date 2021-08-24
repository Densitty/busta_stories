import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = () => {
  const [intro, setIntro] = useState({
    logo: "/assets/busta_stories/footer/logo.png",
    message:
      "Hop on to the world of amazing fun with stories that titillates the senses and make your leisure time fun-filled with Busta Stories. Lots of fun awaits.",
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img">
        <LazyLoadImage src={intro.logo} alt="footer logo" />
      </div>
      <p className="footer__intro__msg">{intro.message}</p>
    </div>
  );
};

export default FooterIntro;
