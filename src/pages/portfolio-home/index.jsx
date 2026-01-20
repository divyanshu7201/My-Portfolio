import React, { useEffect } from 'react';
import MainNavigation from '../../components/UI/MainNavigation';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsOverview from './components/SkillsOverview';
import QuickAccessCards from './components/QuickAccessCards';
import ContactIntegration from './components/ContactIntegration';

const PortfolioHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <SkillsOverview />
        <QuickAccessCards />
        <ContactIntegration />
      </main>
      <footer className="border-t border-border bg-card py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="caption text-center text-muted-foreground md:text-left">
              &copy; {new Date()?.getFullYear()} Alex Chen. All rights reserved. Built with React & Tailwind CSS
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="/privacy" 
                className="caption text-muted-foreground transition-smooth hover:text-foreground"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="caption text-muted-foreground transition-smooth hover:text-foreground"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHome;