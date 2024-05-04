import React from "react";
import { Helmet } from "react-helmet";
import CountDown from "../../components/CountDown";
import HeaderComingSoon from "../../components/header/HeaderComingSoon";
import HeaderDefault2 from "../../components/header/HeaderDefault2";
//import Newsletter from "../../components/Newsletter";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>Φυσικοθεραπεία σε κατοικίδια - Volunteer</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault2 />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--coming-soon">
          <section
            className="min-vh-100 jarallax"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "/assets/img/root/coming-soon-background.png"
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "14.375rem", "--ptf-md": "12.1875rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="col-xl-7">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Summer Camp '24</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.5625rem" }}
                    ></div>
                    <p
                      className="fz-18 has-3-color"
                      style={{ maxWidth: "37.5rem" }}
                    >
                      Φροντίδα σκύλων // Εκπαίδευση & Συμπεριφορά // Αποκατάσταση & Φυσικοθεραπεία // Διαμονή // Ομαδικές δραστηριότητες διασκέδασης 
                    </p>
                  </div>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                  <CountDown />
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.75rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <p className="fz-24 has-black-color">
                      <br />Έλα, δούλεψε και μάθε μαζί μας για την φυσικοθεραπεία και συμπεριφορά ζώων σε συνεργασία με το Cane Sentio.                    
                    </p>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "1.125rem",
                        "--ptf-md": "1.5625rem",
                      }}
                    ></div>
                    <Link to="https://cane.gr/volunteer">Μάθε πως να συμμετέχεις εδώ!</Link>
                    {/* <!--Spacer--> */}
                    {/*<Newsletter />*/}
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <div className="text-center">
                      <img
                        src="/assets/img/root/coming-soon-logo.png"
                        alt=""
                        style={{ maxWidth: "33.25rem" }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xl": "5.625rem", "--ptf-md": "2.8125rem" }}
                  ></div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10.375rem", "--ptf-md": "7.1875rem" }}
            ></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
