import React, { useEffect, useState } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";


import AOS from "aos";
//import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "photoswipe/dist/photoswipe.css";
//import "aos/dist/aos.css";

import ReactGA from "react-ga4";

ReactGA.initialize("G-CZ5R0LFTLS");

const App = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const location = useLocation();

  // Only show animated cursor on devices with mouse/trackpad
  useEffect(() => {
    if (!window?.matchMedia) return;

    const mql = window.matchMedia("(pointer: fine)");
    const handleChange = (e) => setIsFinePointer(e.matches);

    setIsFinePointer(mql.matches);

    if (mql.addEventListener) mql.addEventListener("change", handleChange);
    else mql.addListener(handleChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handleChange);
      else mql.removeListener(handleChange);
    };
  }, []);

  // Track route changes as pageviews (more correct than firing once at module load)
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

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

      {isFinePointer && (
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="0, 153, 144"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.2}
        />
      )}

      <ScrollToTop />
      <AllRoutes />
    </>
  );
};

export default App;
