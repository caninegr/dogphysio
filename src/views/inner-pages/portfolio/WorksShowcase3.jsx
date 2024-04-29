import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy3 from "./WorksCaseStudy3";
import ImageGridThree from "../../../components/image-grid/ImageGridThree1";

const WorksShowcase3 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Περιστατικά & Παθήσεις</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
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
                        Δυσπλασία <br />
                        Ισχίων
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
                    Η δυσπλασία των ισχίων είναι μια κοινή πάθηση στο σκύλο αλλά με 
                    σωστή διαχείριση και φυσικοθεραπεία τα σκυλιά μπορούν να 
                    ζήσουν μια ποιοτική και χαρούμενη ζωή!                     
                    <br /><br />
                    Μετά την αρχική μας αξιολόγηση δημιουργήσαμε ένα πλάνο 
                    διαχείρισης εξατομικευμένο στις ανάγκες του Justin:<br />
                    έπρεπε να αδυνατίσει, να γυμνάσει τα πίσω πόδια του και να 
                    τα χρησιμοποιεί καλύτερα. Επίσης είδαμε οτι φοβόταν τις 
                    νέες επιφάνειες και δεν ήθελε να ανέβει σε σκάλες. 
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
                      Yδροθεραπείες για γυμναστική και αδυνάτισμα
                    </li>
                    <li>
                      Aσκησιολόγιο εντοπισμένο στην ενδυνάμωση 
                      των οπίσθιων άκρων του
                    </li>
                    <li>Xρήση laser για τη διαχείριση του πόνου</li>
                    <li>
                      Eκπαίδευση στην στόχευση εδάφους
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
                    Μέσα σε 2 μήνες καταφέραμε να δυναμώσουμε τα πίσω πόδια 
                    του, να αυξήσουμε το εύρος κίνησης στα ισχία, να 
                    ελαττώσουμε το βάρος του και να βελτιώσουμε το 
                    καρδιαναπνευστικο του σύστημα. Παράλληλα με την φυσικοθεραπεία 
                    του, έκανε και εκπαίδευση και πλέον τοποθετηθεί μπροστινά 
                    και πίσω πόδια σε αντικείμενα και ανεβαίνει ξανά σκάλες. 
                    Είναι δεινός κολυμβητής και σίγουρα θα τον έχετε δει 
                    να πλατσουρίζει στην πισίνα μας το καλοκαίρι!                     
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
