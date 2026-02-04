import React from "react";
import { Navigate, Link } from "react-router-dom";
// import Preview from "../views/Preview";
// Homepage Demo

import HomeFreelancer from "../views/all-home-version/HomeFreelancer";
import HomeFreelancerEN from "../views/all-home-version/HomeFreelancerEN";
// Service
import Service from "../views/inner-pages/service/Service";
import ServiceEN from "../views/inner-pages/service/ServiceEN";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";
//import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";
import BlogDetailsSidebar from "../views/inner-pages/blog/BlogDetailsSidebar";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksMasonry from "../views/inner-pages/portfolio/WorksMasonry";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksShowcase1 from "../views/inner-pages/portfolio/WorksShowcase1";
import WorksShowcase2 from "../views/inner-pages/portfolio/WorksShowcase2";
import WorksShowcase3 from "../views/inner-pages/portfolio/WorksShowcase3";
import WorksShowcase4 from "../views/inner-pages/portfolio/WorksShowcase4";
import WorksShowcase5 from "../views/inner-pages/portfolio/WorksShowcase5";
import WorksShowcase6 from "../views/inner-pages/portfolio/WorksShowcase6";
import WorksShowcase7 from "../views/inner-pages/portfolio/WorksShowcase7";

// Others
import Contact from "../views/inner-pages/Contact";
//import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import TeamEN from "../views/inner-pages/TeamEN";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Terms from "../views/inner-pages/Terms";
import Privacy from "../views/inner-pages/Privacy";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
//import BlogDetails2 from "../views/inner-pages/blog/BlogDetails2";
import BlogDetailsArticle from "../views/inner-pages/blog/BlogDetailsArticle";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
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
    </>
  );
};

export default AllRoutes;
