import React from "react";
import { Helmet } from "react-helmet";
import HeaderFreelancer from "../../components/header/HeaderFreelancer";
import FooterFour from "../../components/footer/FooterFour";

const BOOKING_URL = "https://canesentio.com/book/588c3f8d-1052-4934-a04a-6fdfce91124c";

const OnlineBooking = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--online-booking">
      <Helmet>
        <title>Στέλλα Κεχαγιά - Online Booking</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderFreelancer />
      {/* End header */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--online-booking">
            <section
              className="ptf-booking-hero"
              style={{
                backgroundImage: "url(/assets/img/root/call-to-action.png)",
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "15.625rem",
                  "--ptf-md": "7.8125rem",
                  "--ptf-sm": "5rem",
                }}
              ></div>

              <div className="container-xxl text-center">
                <div className="d-inline-flex text-start">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-12 has-color-3 text-uppercase">
                      Κλεισε το ραντεβου σου <br />
                      online, ευκολα και γρηγορα
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.5625rem" }}
                    ></div>
                    <div className="fz-100 fz-90--md has-black-color fw-normal lh-0p8 has-secondary-font">
                      <a
                        className="ptf-filled-link"
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book <br />
                        Now
                      </a>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "0.625rem" }}
                    ></div>
                    <div className="fz-60 has-black-color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        style={{ height: "1em" }}
                        viewBox="0 0 17 17"
                      >
                        <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "10rem",
                  "--ptf-md": "5rem",
                  "--ptf-sm": "3.75rem",
                }}
              ></div>
            </section>
          </div>
          {/* End pft-page */}
        </div>
      </div>
      {/* End ptf-site-wrapper */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-6">
        <div className="container-xxl">
          <FooterFour />
        </div>
      </footer>
    </div>
  );
};

export default OnlineBooking;
