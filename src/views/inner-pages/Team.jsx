import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault2 from "../../components/header/HeaderDefault2";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import TeamTwo from "../../components/team/TeamTwo";

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>Φυσικοθεραπεία σε κατοικίδια - Ομάδα</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault2 />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--team">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Η ομάδα μας</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-24">
                      Μικρή αλλά θαυματουργή! Woof & Meow!
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="ptf-team-member-grid">
                <TeamTwo />
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
