import React from "react";

const resumeContent = [
  {
    year: "2000 - 2006",
    delayAnimation: "",
    infoContent: [
      {
        title: "Τμήμα Φυσικοθεραπείας",
        subTitle: "Διεθνές Πανεπιστήμιο Ελλάδος",
      },
      {
        title: "Εθελοντική Εργασία",
        subTitle: "Φιλοζωικές οργανώσεις",
      },
      {
        title: "Πρακτική άσκηση",
        subTitle: "Κλινική Mühlengrund, Reinhardshausen, Γερμανία",
      },      
    ],
  },
  {
    year: "2007 - 2019",
    delayAnimation: "",
    infoContent: [
      {
        title: "Πλήρης Εργασία",
        subTitle: "Κτηνιατρικό κέντρο Fachtierarzt Leonding, Αυστρία",
      },
      {
        title: "Canine Rehabilitation",
        subTitle: "University of Tennessee, USA",
      },
      {
        title: "Πιστοποίηση CCRP",
        subTitle: "University of Tennessee, USA",
      },
      {
        title: "Παροχή φυσικοθεραπειών",
        subTitle: "σε Κτηνιατρικό κέντρο, Θεσσαλονίκη",
      },
    ],
  },
  {
    year: "2019 - Σημερα",
    delayAnimation: "",
    infoContent: [
      {
        title: "Παραδοσιακός και Βιοϊατρικός Βελονισμός",
        subTitle: "ΕΦΕΑ & ΠΑΔΑ",
      },
      {
        title: "Δημιουργία Ιδιωτικού Χώρου",
        subTitle: "Αποκλειστικά για φυσικοθεραπεία",
      },
      {
        title: "Παροχή Υδροθεραπειών",
        subTitle: "σε Συνεργασία με Cane Sentio",
      },
      {
        title: "Δημιουργία του Project",
        subTitle: "The Truth about Dogs",
      },
    ],
  },
];

const Resume = () => {
  return (
    <>
      {resumeContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Timeline--> */}
            <div className="ptf-timeline">
              <div className="ptf-timeline__year">{item.year}</div>
              <ul className="ptf-timeline__list">
                {item.infoContent.map((val, i) => (
                  <li className="ptf-timeline__item" key={i}>
                    <h4 className="ptf-timeline__title">{val.title}</h4>
                    <p className="ptf-timeline__description">{val.subTitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
