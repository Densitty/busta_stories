import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const ShowFooterLinks = (props) => {
  const { links, external } = props;

  return (
    <ul className="footer__ul animate">
      {links.map((link) => {
        return (
          <li key={link.id} className="footer__ul__li">
            {external ? (
              <>
                <BsChevronRight size={12} />
                <a href={link.route} target="_blank">
                  {link.name}
                </a>
              </>
            ) : (
              <>
                <BsChevronRight size={12} />
                {/* <NavLink to={link.route ? link.route : `/genre/${link.id}`}> */}
                {/* or do it as below */}
                <NavLink
                  to={
                    link.hasOwnProperty("route")
                      ? link.route
                      : `/genre/${link.id}`
                  }
                >
                  {link.name ? link.name : link.genre}
                </NavLink>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
  // return links.map((link) => {
  //   return (

  //   );
  // });
};

export default ShowFooterLinks;
