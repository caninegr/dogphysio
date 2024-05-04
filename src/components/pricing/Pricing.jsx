import React from "react";
import { Link } from "react-router-dom";

const pricingContent = [
  {
    planName: "PERSONALISED PLAN",
    price: "25",
    priceDuration: "Εβδομάδα",
    priceDescriptions: "Οι τιμές περιλαμβάνουν ΦΠΑ",
    pricingFeatures: ["Δημιουργουμε το ιδανικοτερο πακετο θεραπειας για το κατοικιδιο σου βαση της παθησης, της προσωπικοτητας του και του χρονου που διαθετεις."],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },
  {
    planName: "OA PLAN",
    price: "55",
    priceDuration: "Εβδομάδα",
    priceDescriptions: "Οι τιμές περιλαμβάνουν ΦΠΑ",
    pricingFeatures: [
      "Ο σκυλος σου μεγαλωσε, πονανε οι αρθρωσεις του, δυσκολευεται να σηκωθει.",
    ],
    badge: "Popular",
    badgeClass: "badge",
    delayAnimation: "100",
  },
  {
    planName: "PREHAB PLAN",
    price: "37,5",
    priceDuration: "Εβδομάδα",
    priceDescriptions: "Οι τιμές περιλαμβάνουν ΦΠΑ",
    pricingFeatures: [
      "Γιατι να περιμενεις να χρειαστει ο σκυλος σου εξειδικευμενη φροντιδα και να μην προνοησεις; Δημιουργησαμε ενα πλανο προληπτικης φυσικοθεραπειας.",
    ],
    badge: "",
    badgeClass: "",
    delayAnimation: "200",
  },
];

const Pricing = () => {
  return (
    <>
      {pricingContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block h-100"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Pricing Table--> */}
            <div className="ptf-pricing-table h-100">
              <div className={val.badgeClass}>{val.badge}</div>
              <div className="ptf-pricing-table__header">
                <h4 className="period">{val.planName}</h4>
              </div>
              <div className="ptf-pricing-table__price">
              <span className="period">από</span><span className="currency">€</span>
                <span className="price">{val.price}</span>
                <span className="period">/ {val.priceDuration}</span>
              </div>
              <div className="ptf-pricing-table__description">
                {val.priceDescriptions}
              </div>
              <div className="ptf-pricing-table__content">
                <ul>
                  {val.pricingFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="ptf-pricing-table__action">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--block"
                  to="/contact"
                >
                  Επικοινωνία
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
