import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault2 from "../../../components/header/HeaderDefault2";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy4 from "./WorksCaseStudy4";
import ImageGridThree from "../../../components/image-grid/ImageGridThree4";

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
                        Ρήξη <br />
                        Χιαστού
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
                  <WorksCaseStudy4 />
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
                  Η ρήξη του πρόσθιου χιαστού συνδέσμου (ΠΧΣ) είναι μία από τις συχνότερες ορθοπεδικές παθήσεις του σκύλου, που συνήθως οφείλεται σε προοδευτική, αγνώστου αιτιολογίας, εκφύλιση του ή τραυματισμό. Η θεραπεία της ρήξης του πρόσθιου χιαστού συνδέσμου μπορεί να είναι συντηρητική ή χειρουργική ανάλογα το βαθμό της ρήξης. 
                    <br /><br />
                    Ο Elmo ήρθε για φυσικοθεραπείες 1 μήνα μετά τη χειρουργική επέμβαση και είχαν ήδη εγκατασταθεί λάθος πρότυπα κίνησης και φοβία στην επαφή του άκρου.Μετά την αρχική μας αξιολόγηση δημιουργήσαμε ένα πλάνο διαχείρισης εξατομικευμένο στις ανάγκες του Elmo: έπρεπε να ηρεμίσει και να μας αφήσει να αγγίξουμε το πάσχον άκρο του, έπρεπε να μάθει να τοποθετεί το άκρο του στο έδαφος και να ξεκινήσει να το φορτίζει ώστε να το χρησιμοποιήσει στη κίνηση του και τέλος έπρεπε να δυναμώσει το ατροφικό του άκρο. 
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
                      Ήπιους χειρισμούς σε όλο το σώμα για θετική συσχέτιση της αφής στο άκρο
                    </li>
                    <li>
                      Laser για διαχείριση του πόνου και ενίσχυση της αιμάτωσης και της ανάπτυξης νέων ιστών
                    </li>
                    <li>Συμβουλές διαβίωσης στο σπίτι και αλλαγές στη καθημαρινή του βόλτα</li>
                    <li>
                      Ασκήσεις ισορροπίας και ιδιοδεκτικότητας
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
                  Μετά από 5 συνεδρίες ο Elmo απέκτησε την αυτοπεποίθηση και τη σιγουριά να τοποθετήσει το άκρο του στο έδαφος, να το χρησιμοποιεί στη βάδιση, στο τροχασμό και σε όλες τις καθημερινές του δραστηριότητες. 
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
