import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault2 from "../../components/header/HeaderDefault2";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import FaqTwo from "../../components/faq/FaqTwo";

const Faq = () => {
  return (
    <div>
      <Helmet>
        <title>Φυσικοθεραπεία σε κατοικίδια - Συχνές Ερωτήσεις</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault2 />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--faq">
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
                    <h1 className="large-heading">Συχνές Ερωτήσεις</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      Απαντήσεις στις πιο συχνές απορίες για τα 
                      θέματα που σας απασχολούν περισσότερο.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          <FaqTwo />
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

export default Faq;
