import React from "react";

const Address = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Address</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
          Αγ.Σάββα 2, Πολίχνη <br /> 56533
          <br />
          Θεσσαλονίκη
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Email</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
          <a href="mailto:info@dogphysio.gr">
            info@dogphysio.gr
            <br />
          </a>
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Phone</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
          <a href="tel:+306938198989">+30 6938198989</a>
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-lg": "4.375rem", "--ptf-md": "2.1875rem" }}
      ></div>
    </>
  );
};

export default Address;
