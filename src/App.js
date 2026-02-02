import React, { useEffect, useState } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

import AnimatedCursor from "react-animated-cursor";

// NOTE: keep AOS CSS import out of the global bundle.
// We'll dynamically import it only on desktop.
// import "aos/dist/aos.css";

const isFinePointer = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(pointer: fine)").matches;

const isMobileLike = () =>
  typeof window !== "undefined" &&
  (window.innerWidth <= 768 || !isFinePointer());

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(isMobileLike());
    checkMobile();

    window.addEventListener("resize", checkMobile, { passive: true });

    // --- Google Analytics: move it into effect, and only in production ---
    // (You had it running at module-eval time, which is unnecessary work up-front.)
    if (process.env.NODE_ENV === "production") {
      import("react-ga4")
        .then(({ default: ReactGA }) => {
          ReactGA.initialize("G-CZ5R0LFTLS");
          ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname + window.location.search,
          });
        })
        .catch(() => {});
    }

    // --- AOS: do NOT even load on mobile ---
    // Also: remove the scrollRef/AOS.refresh() listener completely.
    if (!isMobileLike()) {
      // Defer so it doesn't compete with initial render
      const startAOS = () => {
        Promise.all([import("aos"), import("aos/dist/aos.css")])
          .then(([AOS]) => {
            AOS.default.init({
              duration: 800,
              once: true, // reduces repeated work while scrolling
            });
          })
          .catch(() => {});
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(startAOS, { timeout: 1500 });
      } else {
        setTimeout(startAOS, 500);
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
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

      {/* Only show AnimatedCursor on non-mobile-like devices */}
      {!isMobile && (
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
