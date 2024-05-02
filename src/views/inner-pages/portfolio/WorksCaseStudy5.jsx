import React from "react";

const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "ΣΚΥΛΟΣ",
        subTitle1: `Najac,
                `,
        subTitle2: "6 ετών, labrador retriever",
        subTitle3: "Σκύλοι Οδηγοί Ελλάδας",
      },
      {
        dealyAnimation: "200",
        title: "ΠΛΑΝΟ ΘΕΡΑΠΕΙΑΣ",
        subTitle1: `Eκμάθηση ασκήσεων στο κηδεμόνα,`,
        subTitle2: "Aσκήσεις ιδιοδεκτικότητας και συντονισμού,",
        subTitle3: "Aσκήσεις ενδυνάμωσης & διατάσεις",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "ΣΤΟΧΟΙ",
        subTitle1: `Ενίσχυση μυών και αρθρώσεων
                `,
        subTitle2: "Ενημέρωση κηδεμόνα",
        subTitle3: "Προσομοίωση Θεραπευτικών Μέσων",
      },
      {
        dealyAnimation: "400",
        title: "ΗΜΕΡΟΜΗΝΙΑ",
        subTitle1: `Απρίλιος, 2023`,
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
