import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";

import BrandingDetail from "../components/BrandingDetail";
import DetailPortfolio from "../components/DetailPortfolio";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopBtn";

const AppRouter: React.FC = () => {
  return (
   <>
   <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/portfolio/:serviceId/:workId" element={<PortfolioDetail />} /> */}
      <Route path="/portfolio/branding/:slug" element={<BrandingDetail />} />
      <Route path="/portfolio/:id" element={<DetailPortfolio />} />
      <Route path="/portfolio/branding/:slug" element={<BrandingDetail />} />
    </Routes>
    <ScrollToTopButton/>
    </>
  );
};

export default AppRouter;