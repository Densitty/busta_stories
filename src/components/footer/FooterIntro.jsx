import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = () => {
  const [intro, setIntro] = useState({
    logo: "/assets/busta_stories/images/busta_stories.svg",
    message:
      "Hop on to the world of amazing fun with stories that titillates the senses and make your leisure time fun-filled with Busta Stories. Lots of fun awaits.",
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animate">
        <LazyLoadImage src={intro.logo} alt="footer logo" />
      </div>
      <p className="footer__intro__msg animate">{intro.message}</p>
    </div>
  );
};

export default FooterIntro;
