import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import Social from "../../components/social/Social";
import ContactForm from "../../components/ContactForm";
import Address from "../../components/Address";
import HeaderDefault2 from "../../components/header/HeaderDefault2";

const MyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 10);    
})};

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Small Animal Physiotherapy - Contact</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault2 />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
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
                    <h1 className="large-heading">How can I help you?</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                    ></div>

                    <Social />
                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End section contact header */}

          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <Address />
                </div>
                {/* End .col */}

                <div className="col-lg-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                      Please, provide us with some information.
                    </h5>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <ContactForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
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
            <MyComponent />
          </div>
        </div>
      </footer>
    </div>
    
  ); 
};

export default Contact;
