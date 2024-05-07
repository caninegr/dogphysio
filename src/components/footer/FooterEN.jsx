import React from "react";
import { Link } from "react-router-dom";

const linkList = [
  {
    itemName: "Συχνες Ερωτησεις",
    link: "/faq",
  },
  {
    itemName: "Οροι & Προυποθεσεις",
    link: "/terms",
  },
  {
    itemName: "Πολιτικη Απορρητου",
    link: "/privacy",
  },
  {
    itemName: "Υπηρεσιες",
    link: "/service",
  },
];

const Product = [
  {
    itemName: "Συνεργατες",
    link: "https://cane.gr",
  },
  {
    itemName: "Volunteer",
    link: "/coming-soon",
  },
  {
    itemName: "Επικοινωνια",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
            Βελτίωσε την ζωή του κατοικίδιου σου!
          </div>

          <div className="ptf-footer-heading has-black-color">
            Κάνε το πρώτο &nbsp;
            <Link
              className="has-accent-1 text-decoration-underline"
              to="/contact"
            >
              βήμα
            </Link>&nbsp;!
          </div>

          <p className="fz-24">Αγ.Σάββα 2, 56533, Θεσσαλονίκη</p>
          <a className="fz-40 has-black-color" href="mailto:info@dogphysio.gr">
            info@dogphysio.gr
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">Βοήθεια</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i}>
                  <a href={val.link}>{val.itemName}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">Σύνδεσμοι</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {Product.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
