import React from "react";
import FooterIntro from "./FooterIntro";
import FooterLinks from "./FooterLinks";

const footerStyle = {
  background: "url(/assets/busta_stories/footer/footer_beauty.jpg)",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer__container">
        <div className="container">
          <div className="footer__container__block">
            <div className="row m-left-15 m-right-15">
              <div className="col-6 pad-15">
                <FooterIntro />
              </div>

              <div className="col-6 pad-15">
                <FooterLinks />
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; copyright busta stories {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
