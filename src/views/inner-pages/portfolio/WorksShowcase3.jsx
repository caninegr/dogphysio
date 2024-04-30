import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault2 from "../../../components/header/HeaderDefault2";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy3 from "./WorksCaseStudy3";
import ImageGridThree from "../../../components/image-grid/ImageGridThree3";

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
                        Οστεοαρθρίτιδα <br />
                        Γηριατρικό
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
                  <WorksCaseStudy3 />
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
                    Η οστεοαρθρίτιδα είναι μια κοινή πάθηση που πλήττει τις αρθρώσεις των σκύλων. Συνήθως εμφανίζεται σε σκύλους μεγαλύτερης ηλικίας ή σε πιο νεαρούς αν έχουν υποστεί τραυματισμούς. Η διαχείριση της οστεοαρθρίτιδας στον σκύλο συνήθως περιλαμβάνει μια ολιστική προσέγγιση, αλλαγές στη διατροφή, στην άσκηση και στο τρόπο ζωής.                    
                    <br /><br />
                    Μετά την αρχική μας αξιολόγηση δημιουργήσαμε ένα πλάνο διαχείρισης εξατομικευμένο στις ανάγκες του Pongo: έπρεπε να αδυνατίσει, να βελτιώσει τη μυική μάζα του και την ισορροπία του και να διαχειριστούμε τον πόνο τόσο στις αρθρώσεις του, όσο και στη σπονδυλική του στήλη.
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
                      Βελονισμό και laser για διαχείριση του πόνου
                    </li>
                    <li>
                      Ασκήσεις ενδυνάμωσης, ισορροπίας και ιδιοδεκτικότητας
                    </li>
                    <li>Συμβουλές διαβίωσης στο σπίτι και αλλαγές στη καθημαρινή του βόλτα</li>
                    <li>
                      Πρόγραμμα ειδικής κτηνιατρικής διατροφής για ελάττωση του βάρους και βελτίωση της εντερικής λειτουργίας
                    </li> 
                    <li>
                      Συμπληρώματα χονδροπροστασίας για ενίσχυση των αρθρώσεων
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
                    O Pongo έχει βελτιώσει την κίνηση και τη βάδιση του, είναι σε ιδανικό σωματικό βάρος και η κηδεμόνας του μπορεί να διαχειριστεί την καθημερινότητα μαζί του. Συνεχίζει να μας επισκέπτεται για συνεδρίες συντήρησης του αρχικού αποτελέσματος και διαχείρισης του πόνου όταν υπάρχουν εξάρσεις.                    
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
