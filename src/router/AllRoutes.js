import React, { Suspense, lazy } from "react";
import { Navigate, Link, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
// import Preview from "../views/Preview";
// Homepage Demo

const HomeFreelancer = lazy(() => import("../views/all-home-version/HomeFreelancer"));
const HomeFreelancerEN = lazy(() => import("../views/all-home-version/HomeFreelancerEN"));
// Service
const Service = lazy(() => import("../views/inner-pages/service/Service"));
const ServiceEN = lazy(() => import("../views/inner-pages/service/ServiceEN"));
const ServiceDetails = lazy(() => import("../views/inner-pages/service/ServiceDetails"));

// About
const AboutUs = lazy(() => import("../views/inner-pages/about/AboutUs"));
//import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
const BlogMasonry = lazy(() => import("../views/inner-pages/blog/BlogMasonry"));
const BlogDetails = lazy(() => import("../views/inner-pages/blog/BlogDetails"));
const BlogDetailsSidebar = lazy(() => import("../views/inner-pages/blog/BlogDetailsSidebar"));

// Portfolio
const WorksGrid = lazy(() => import("../views/inner-pages/portfolio/WorksGrid"));
const WorksMasonry = lazy(() => import("../views/inner-pages/portfolio/WorksMasonry"));
const WorksListing = lazy(() => import("../views/inner-pages/portfolio/WorksListing"));
const WorksCarousel = lazy(() => import("../views/inner-pages/portfolio/WorksCarousel"));
const WorksShowcase1 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase1"));
const WorksShowcase2 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase2"));
const WorksShowcase3 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase3"));
const WorksShowcase4 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase4"));
const WorksShowcase5 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase5"));
const WorksShowcase6 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase6"));
const WorksShowcase7 = lazy(() => import("../views/inner-pages/portfolio/WorksShowcase7"));

// Others
const Contact = lazy(() => import("../views/inner-pages/Contact"));
const OnlineBooking = lazy(() => import("../views/inner-pages/OnlineBooking"));
//import PricingInner from "../views/inner-pages/PricingInner";
const Team = lazy(() => import("../views/inner-pages/Team"));
const TeamEN = lazy(() => import("../views/inner-pages/TeamEN"));
const ComingSoon = lazy(() => import("../views/inner-pages/ComingSoon"));
const Terms = lazy(() => import("../views/inner-pages/Terms"));
const Privacy = lazy(() => import("../views/inner-pages/Privacy"));
const Faq = lazy(() => import("../views/inner-pages/Faq"));
const NotFound = lazy(() => import("../views/NotFound"));
//import BlogDetails2 from "../views/inner-pages/blog/BlogDetails2";
const BlogDetailsArticle = lazy(() => import("../views/inner-pages/blog/BlogDetailsArticle"));

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeFreelancer />} />
          <Route path="/en/" element={<HomeFreelancerEN />} />
          {/*  Homepage Demo */}

          {/* Service */}
          <Route path="/service" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetails />} />

          {/* About */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-me" element={<Navigate to='/' />} />

          {/* Blog */}
          {/*<Route path="/blog-grid" element={<BlogGrid />} />*/}
          <Route path="/blog-masonry" element={<BlogMasonry />} />
          {/*<Route path="/blog-sidebar" element={<BlogSidebar />} />*/}
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blog-article/:id" element={<BlogDetailsArticle />} />
          <Route path="/blog-details-sidebar" element={<BlogDetailsSidebar />} />

          {/* Portfolio */}
          <Route path="/works-grid" element={<WorksGrid />} />
          <Route path="/works-masonry" element={<WorksMasonry />} />
          <Route path="/works-listing" element={<WorksListing />} />
          <Route path="/works-carousel" element={<WorksCarousel />} />
          <Route path="/works-showcase-1" element={<WorksShowcase1 />} />
          <Route path="/works-showcase-2" element={<WorksShowcase2 />} />
          <Route path="/works-showcase-3" element={<WorksShowcase3 />} />
          <Route path="/works-showcase-4" element={<WorksShowcase4 />} />
          <Route path="/works-showcase-5" element={<WorksShowcase5 />} />
          <Route path="/works-showcase-6" element={<WorksShowcase6 />} />
          <Route path="/works-showcase-7" element={<WorksShowcase7 />} />

          {/* others */}
          <Route path="/team" element={<Team />} />
          <Route path="/teamEN" element={<TeamEN />} />
          {/*<Route path="/pricing" element={<PricingInner />} />*/}
          <Route path="/contact" element={<Contact />} />
          <Route path="/online-booking" element={<OnlineBooking />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />

          {/* imports */}
          <Route path="/2018/02/05/λάθη-που-κάνουν-οι-ιδιοκτήτες-κατά-την" element={<Navigate to='/blog-article/cruciate-ligament' />} />
          <Route path="/2021/02/17/πως-να-φροντίσετε-το-παράλυτο-ζωάκι-σα" element={<Navigate to='/blog-article/paralysed-dog' />} />
          <Route path="/2019/03/17/ο-βελονισμός-στα-κατοικίδια" element={<Navigate to='/blog-article/velonismos' />} />
          <Route path="/2019/01/02/λήψη-βάρους-και-παχυσαρκία-στο-σκύλο-μ-2" element={<Navigate to='/blog-article/paxisarkia-2' />} />
          <Route path="/2020/11/09/θεραπευτικό-λέιζερ-στα-κατοικίδια" element={<Navigate to='/blog-article/laser' />} />
          <Route path="/2018/12/17/λήψη-βάρους-και-παχυσαρκία-στο-σκύλο-μ" element={<Navigate to='/blog-article/paxisarkia-1' />} />
          <Route path="/2018/01/30/διαχείριση-της-οστεοαρθρίτιδας-στα-ζ" element={<Navigate to='/blog-article/arthritis' />} />
          <Route path="/2018/01/30/διαχείριση-της-οστεοαρθρίτιδας-στα-ζ/comment-page-1/" element={<Navigate to='/blog-article/arthritis' />} />
          <Route path="/2019/04/12/τα-οφέλη-της-φυσικοθεραπείας-σε-ζώα-συ" element={<Navigate to='/blog-article/physiotherapy' />} />
          <Route path="/2018/08/12/φυσικοθεραπεία-στα-ζώα-συντροφιάς" element={<Navigate to='/blog-article/physiotherapy' />} />
          <Route path="/2018/10/27/φυσικοθεραπεία-στα-ζώα-συντροφιάς-2" element={<Navigate to='/blog-article/physiotherapy' />} />
          <Route path="/about-me/συνέντευξη" element={<Navigate to='#education' />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AllRoutes;
