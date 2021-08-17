import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/Context";

const Nav = () => {
  const dataFromContext = useGlobalContext();
  const { navState, closeNav, dispatch } = dataFromContext;

  return (
    <div>
      {navState && <div className="navLayer"></div>}
      <div className={navState ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
