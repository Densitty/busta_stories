import React, { useState } from "react";
import { useGenresContext } from "../../utils/GenresContext";
import ShowFooterLinks from "./ShowFooterLinks";

const FooterLinks = () => {
  const [links, setLinks] = useState({
    pages: [
      { id: 1, name: "home", route: "/" },
      { id: 2, name: "about", route: "/about" },
      { id: 3, name: "contact", route: "/contact" },
    ],
    purchase: [
      { id: 1, name: "amazon", route: "https://amazon.com" },
      { id: 2, name: "goodreads", route: "https://goodreads.com" },
      { id: 3, name: "barns&nobles", route: "https://barnsandnobles.com" },
      { id: 4, name: "scribd", route: "https://scribd.com" },
    ],
    headings: {
      pages: "pages",
      purchase: "bookstores",
      genres: "genres",
    },
  });

  // get genres state data from the genresContext
  const {
    state: { genres },
  } = useGenresContext();

  return (
    <div className="row">
      <div className="col-4 pad-15">
        <h3 className="footer__heading animate">{links.headings.pages}</h3>
        <ShowFooterLinks links={links.pages} />
      </div>
      <div className="col-4 pad-15">
        <h3 className="footer__heading animate">{links.headings.purchase}</h3>
        <ShowFooterLinks links={links.purchase} external={true} />
      </div>
      <div className="col-4 pad-15">
        <h3 className="footer__heading animate">{links.headings.genres}</h3>
        <ShowFooterLinks links={genres} />
      </div>
    </div>
  );
};

export default FooterLinks;
