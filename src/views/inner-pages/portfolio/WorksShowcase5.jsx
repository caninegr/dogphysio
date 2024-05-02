import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault2 from "../../../components/header/HeaderDefault2";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy5 from "./WorksCaseStudy5";
import ImageGridThree from "../../../components/image-grid/ImageGridThree5";

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
                        PREHAB <br />
                        Προληπτική Φυσικοθεραπεία
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
                  <WorksCaseStudy5 />
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
                  Ο όρος "prehab" αναφέρεται σε προληπτικές μεθόδους και προγράμματα που αποσκοπούν στη διατήρηση της υγείας και της φυσικής κατάστασης πριν από τυχόν τραυματισμούς ή προβλήματα. Με τη βελτίωση της συνολικής δύναμης, ευλυγισίας και κινητικότητας μειώνεται ο κίνδυνος τραυματισμού και βελτιστοποιείται η κίνηση. 
                    <br /><br />
                    Μετά την αρχική μας αξιολόγηση δημιουργήσαμε ένα πλάνο πρόληψης εξατομικευμένο στις ανάγκες του Najac και του κηδεμόνα του: λόγω της θέσης που λαμβάνει ο Najac κατά την εύρεση εμποδίων έχει μια ελαφρά ευαισθησία τους παρασπονδυλικούς μύες η οποία δεν του έχει δημιουργήσει (ακόμα) κάποιο ορατό πρόβλημα αλλά θέλουμε να είμαστε καλά προετοιμασμένοι για το μέλλον μιας και η "εργασία" ενός σκύλου - οδηγού είναι εξαιρετικά σημαντική.
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
                    Εκμάθηση ασκήσεων στο κηδεμόνα
                    </li>
                    <li>
                    Ασκήσεις ιδιοδεκτικότητας και συντονισμού
                    </li>
                    <li>Ασκήσεις ενδυνάμωσης</li>
                    <li>
                    Μάλαξη και διατάσεις
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
                  Η πρόκληση που αντιμετωπίσαμε ήταν οτι ο Najac, ως σκύλος οδηγός, δεν επιτρεπόταν να λάβει τροφή ή λιχουδιές από κανέναν άλλο εκτός από το χειριστή του. Οπότε έπρεπε το πρόγραμμα να εκτελεστεί από τον ίδιο το χειριστή με τη δική μου καθοδήγηση. Τα καταφέραμε τέλεια και περάσαμε υπέροχα!  
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
