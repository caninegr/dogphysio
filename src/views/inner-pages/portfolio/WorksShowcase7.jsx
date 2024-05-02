import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault2 from "../../../components/header/HeaderDefault2";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy7 from "./WorksCaseStudy7";
import ImageGridThree from "../../../components/image-grid/ImageGridThree7";

const WorksShowcase3 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Περιστατικά & Παθήσεις</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault2 />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        Παράλυτος σκύλος <br />
                        Νευροχειρουργική επέμβαση στον αυχένα 
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <Social />
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  {/* End .col */}
                  <WorksCaseStudy7 />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>


            <section>
              
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Gallery--> */}
                  <ImageGridThree />
                </div>                

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Θεραπεία</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div style={{"width" : "70%"}} 
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                  Η συχνότητα των χειρουργικών επεμβάσεων στη σπονδυλική στήλη των σκύλων ολοένα και αυξάνεται καθώς καταρτίζονται οι πιο εξειδικευμένοι κτηνίατροι. Κάθε περίπτωση απαιτεί προσεκτική αξιολόγηση από τον κτηνίατρο και την κατάλληλη επέμβαση που θα προσαρμοστεί στις ανάγκες και την κατάσταση του σκύλου. Μετά την επέμβαση, η φυσικοθεραπεία μπορεί να αποδειχθεί σωτήρια για την ανάκτηση της κινητικότητας και την αποκατάσταση της λειτουργικότητας του σκύλου. 
                    <br /><br />
                    Μετά την αρχική μας αξιολόγηση δημιουργήσαμε ένα πλάνο διαχείρισης εξατομικευμένο στις ανάγκες του Wolfgang: έπρεπε να διαχειριστούμε τον πόνο λόγω της χειρουργικής επέμβασης στον αυχένα του, να επανακτήσει την αισθητικότητα των άκρων του, να ξεκινήσει να στηρίζεται και να κάνει τα πρώτα του βήματα, έπρεπε να βελτιώσει τη μυική του μάζα και την ισορροπία του. 
                    <br /><br />
                    Το θεραπευτικό μας πλάνο περιλάμβανε:
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <ul className="fz-18" style={{ lineHeight: 2 }}>
                    <li>
                    Βελονισμό και laser για διαχείριση του πόνου και ενεργοποίηση των νεύρων
                    </li>
                    <li>
                    Εκμάθηση στη κηδεμόνα παθητικών κινήσεων και μάλαξης για κατοίκον θεραπεία
                    </li>
                    <li>Ασκήσεις ισορροπίας, ιδιοδεκτικότητας και ενδυνάμωσης</li>
                    <li>
                    Συμβουλές διαβίωσης στο σπίτι και φροντίδα του παράλυτου σκύλου
                    </li>                                        
                  </ul>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Αποτέλεσμα</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                  Ο Wolfgang μετά από 6 εβδομάδες θεραπειών, σταδιακά άρχισε να κινεί ξανά τα πρόσθια και τα οπίσθια άκρα του, βελτίωσε την όρθια θέση του και ένιωσε σίγουρος να κάνει τα πρώτα του βήματα. Ευτυχώς ήταν καλοκαιράκι και είχαμε σύμμαχο το παγωτό που λάτρευε! 
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.5625rem" }}
                ></div>                



              </div>
            </section>


          </article>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
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
    // End .ptf-is--blog-grid
  );
};

export default WorksShowcase3;
