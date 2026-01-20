import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SkillsExperience from './pages/skills-experience';
import ProjectPortfolio from './pages/project-portfolio';
import ContactResume from './pages/contact-resume';
import PortfolioHome from './pages/portfolio-home';
import ProjectDetails from './pages/project-details';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/skills-experience" element={<SkillsExperience />} />
        <Route path="/project-portfolio" element={<ProjectPortfolio />} />
        <Route path="/contact-resume" element={<ContactResume />} />
        <Route path="/portfolio-home" element={<PortfolioHome />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
