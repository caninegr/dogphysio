import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";

import ReactGA from "react-ga4";

ReactGA.initialize("G-CZ5R0LFTLS");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    let scrollRef = 0;

    window.addEventListener('scroll', function() {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
        
  }, []);
  return (
    <>
      <Helmet>
        <title>Φυσικοθεραπεία σε κατοικίδια - Στέλλα Κεχαγιά</title>
        <meta
          name="description"
          content="Φυσικοθεραπεία για σκύλους και γάτες, ενδυνάμωση και μεταχειρουργική αποκατάσταση"
        />
        <meta
          name="keywords"
          content="φυσικοθεραπεία, φυσιοθεραπεία, κατοικίδια, ζώα, σκύλος, γάτα, δυσπλασία, αρθρίτιδα, ορθοπεδικά"
        />
      </Helmet>
      {/* End React Helmet for SEO */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="0, 153, 144"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <AllRoutes />
      {/* End All Routes */}
    </>
  );
};

export default App;
