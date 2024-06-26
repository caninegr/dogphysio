import React, { useRef } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "17",
    metaText1: "ΕΤΗ",
    metaText2: "ΕΜΠΕΙΡΙΑΣ",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "870",
    metaText1: "ΑΞΙΟΛΟΓΗΣΕΙΣ",
    metaText2: "ΚΑΤΟΙΚΙΔΙΩΝ",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "90",
    metaText1: "ΠΟΣΟΣΤΟ",
    metaText2: "ΕΠΙΤΥΧΙΑΣ",
    animationDelay: "200",
    suffix: "%",
  },
  {
    startCount: "0",
    endCount: "7000",
    metaText1: "ΣΥΝΕΔΡΙΕΣ",
    metaText2: "ΘΕΡΑΠΕΙΑΣ",
    animationDelay: "300",
  },
];

const CounterFour = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div key={i}>
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            <h5 className="fz-14 text-uppercase has-3-color fw-normal">
              {val.metaText1} <br />
              {val.metaText2}
            </h5>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.8125rem" }}
            ></div>
            {/* <!--Counter Up--> */}
            <div
              className="ptf-counter-up ptf-counter-up--style-2"
              style={{
                "--ptf-value-font-family": "var(--ptf-secondary-font)",
                "--ptf-value-font-weight": "normal",
              }}
            >
              <div className="ptf-counter-up__value">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                  suffix={val.suffix}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} ></span>
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </div>

          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            style={{
              "--ptf-xxl": "4.375rem",
              "--ptf-md": "2.1875rem",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default CounterFour;
