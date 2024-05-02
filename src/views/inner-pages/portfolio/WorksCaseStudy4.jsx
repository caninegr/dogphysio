import React from "react";

const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "ΣΚΥΛΟΣ",
        subTitle1: `Elmo,
                `,
        subTitle2: "5 ετών, jack russel terrier",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "ΠΛΑΝΟ ΘΕΡΑΠΕΙΑΣ",
        subTitle1: `Ασκήσεις ιδιοδεκτικότητας και συντονισμού,`,
        subTitle2: "Ασκήσεις ενδυνάμωσης,",
        subTitle3: "Laser",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "ΣΤΟΧΟΙ",
        subTitle1: `Ενίσχυση μυών και Αρθρώσεων
                `,
        subTitle2: "Βελτίωση της αφής στο πάσχον άκρο ",
        subTitle3: "",
      },
      {
        dealyAnimation: "400",
        title: "ΗΜΕΡΟΜΗΝΙΑ",
        subTitle1: `Μάρτιος, 2024`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const WorksCaseStudy3 = () => {
  return (
    <>
      {caseStudyContent.map((val, i) => (
        <div className="col-xl-3" key={i}>
          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
          {/* <!--Animated Block--> */}
          {val.caseContent.map((item, i) => (
            <div key={i}>
              <div
                className="ptf-animated-block mb-70"
                data-aos="fade"
                data-aos-delay={item.dealyAnimation}
              >
                <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                  {item.title}
                </h5>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.25rem" }}
                ></div>
                <p className="fz-20 lh-1p5 has-black-color">
                  {item.subTitle1} <br />
                  {item.subTitle2} <br />
                  {item.subTitle3}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": " 4.375rem",
                  "--ptf-md": "2.1875rem",
                }}
              ></div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WorksCaseStudy3;
