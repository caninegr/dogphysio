import React from "react";
import { Link } from "react-router-dom";

const HeaderComingSoon = () => {
  return (
    <header className="ptf-header ptf-header--empty">
      <div className="ptf-navbar ptf-navbar--main ptf-navbar--transparent">
        <div className="container-xxl">
          <div className="ptf-navbar-inner">
            {/* <!--Logo--> */}
            <Link to="/" className="ptf-navbar-logo">
              <img
                className="black"
                src="/assets/img/root/logo-dark.png"
                alt="logo"
                loading="lazy"
              />
              <img
                className="white"
                src="/assets/img/root/logo-white.png"
                alt="logo"
                loading="lazy"
              />
            </Link>
            {/* <!--Socials--> */}
            <div className="ptf-navbar-socials">
              {/* <!--Social Icon--> */}
              {/* <!--Social Icon--> */}
              <a
                className="ptf-social-icon ptf-social-icon--style-3 facebook"
                href="https://www.facebook.com/profile.php?id=100063698132030&sk=about"
                target="_blank"
              >
                <i className="socicon-facebook"></i>
              </a>
              {/* <!--Social Icon--> */}
              <a
                className="ptf-social-icon ptf-social-icon--style-3 instagram"
                href="https://www.instagram.com/dog_physio_stella_kechagia/"
                target="_blank"
              >
                <i className="socicon-instagram"></i>
              </a>
              {/* <!--Social Icon--> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComingSoon;
