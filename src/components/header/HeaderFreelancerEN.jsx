import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialEN from "../social/SocialTwoEN";
import DropdownMenu2 from "./menu/DropdownMenu2EN";
import MobileMenu2 from "./menu/MobileMenu2EN";

const HeaderFreelancer = () => {
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <>
      <header className="ptf-header ptf-header--style-7 ptf-header--opaque">
        <div className="ptf-navbar ptf-navbar--main">
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default">
                {/* <!--Menu--> */}
                <DropdownMenu2 />
              </nav>
              {/* <!--Buttons--> */}
              {/* <!--Offcanvas Menu Toggle--> */}
              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}

              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src="/assets/img/root/logo-center-dark.png"
                  alt=""
                  loading="lazy"
                />
                <img
                  className="white"
                  src="/assets/img/root/logo-center-white.png"
                  alt=""
                  loading="lazy"
                />
              </Link>

              {/* <!--Socials--> */}
              <div className="ptf-navbar-socials">
                {/* <!--Social Icon--> */}
                <SocialEN />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher">
            <a className="is-active" href="/"><img src='/assets/img/root/flag-el.png' /></a>
            {/*<a href="/en/"><img src='/assets/img/root/flag-en.png' /></a>*/}
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu2 />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderFreelancer;
