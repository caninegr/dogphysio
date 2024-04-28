import React from "react";

const approachContent = [
  {
    subTitle: "1",
    title: "Παρατήρησε",
    descriptions: `Εντόπισε το πρόβλημα. Όλα ξεκινάνε από τη σωστή παρατήρηση. Εσύ είσαι αυτός που ξέρει καλύτερα από όλους το κατοικίδιο σου.`,
    delayAnimation: "0",
  },

  {
    subTitle: "2",
    title: "Διάγνωση",
    descriptions: `Μην καθυστερείς και μην κάνεις πειράματα. Πήγαινε το ζωάκι σου στο κτηνίατρό σας για μια σωστή διάγνωση.`,
    delayAnimation: "100",
  },
  {
    subTitle: "3",
    title: "Αξιολόγηση",
    descriptions: `Κλείσε ένα ραντεβού αφιολόγησης μαζί μας και έλα να σε καθοδηγήσουμε. Είναι δωρεάν.`,
    delayAnimation: "200",
  },
  {
    subTitle: "4",
    title: "Φυσικοθεραπεία",
    descriptions: `Ο σκύλος ή η γάτα σου χρειάζεται φυσικοθεραπεία; Έχουμε 17ετή+ εμπειρία, γνώση και τον κατάλληλο εξοπλισμό και έχουμε αντιμετωπίσει πληθώρα παθολογικών και τραυματικών καταστάσεων.`,
    delayAnimation: "300",
  },
  {
    subTitle: "5",
    title: "Συντήρηση",
    descriptions: `Η δουλειά μας δεν τελειώνει στο φυσικοθεραπευτήριο. Αν θέλεις να διαρκέσει πρέπει να ακολουθήσεις έναν διαφορετικό τρόπο ζωής στο σπίτι.`,
    delayAnimation: "400",
  },
  {
    subTitle: "6",
    title: "Στήριξη",
    descriptions: `Είμαστε δίπλα σου για ένα τηλέφωνο ή μια συμβουλή όποτε μας χρειαστείς.`,
    delayAnimation: "500",
  },
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
