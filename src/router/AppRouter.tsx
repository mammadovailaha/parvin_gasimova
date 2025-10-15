import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PortfolioDetail from "../components/PortfolioDetail";
import BrandingDetail from "../components/BrandingDetail";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio/:serviceId/:workId" element={<PortfolioDetail />} />
      <Route path="/portfolio/branding/:slug" element={<BrandingDetail />} />
    </Routes>
  );
};

export default AppRouter;