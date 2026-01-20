import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const MainNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  const navigationItems = [
    { label: 'Home', path: '/portfolio-home', icon: 'Home' },
    { label: 'Projects', path: '/project-portfolio', icon: 'FolderOpen' },
    { label: 'Skills', path: '/skills-experience', icon: 'Award' },
    { label: 'Contact', path: '/contact-resume', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    if (path === '/portfolio-home') {
      return location?.pathname === '/' || location?.pathname === path;
    }
    if (path === '/project-portfolio') {
      return location?.pathname === path || location?.pathname?.startsWith('/project-details');
    }
    return location?.pathname === path;
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full bg-card transition-smooth ${
          isScrolled ? 'shadow-elevation-2' : 'shadow-elevation-1'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link 
              to="/portfolio-home" 
              className="flex items-center space-x-3 transition-smooth hover:opacity-80"
              aria-label="EngiPortfolio Home"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 shadow-lg">
                <Icon name="Code2" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  EngiPortfolio
                </span>
                <span className="text-xs text-muted-foreground">Engineering Excellence</span>
              </div>
            </Link>

            <div className="hidden items-center space-x-10 md:flex">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`font-heading text-base font-medium transition-smooth hover:text-primary ${
                    isActivePath(item?.path)
                      ? 'text-primary' :'text-foreground'
                  }`}
                  aria-current={isActivePath(item?.path) ? 'page' : undefined}
                >
                  {item?.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-smooth hover:bg-muted md:hidden"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                strokeWidth={2}
              />
            </button>
          </div>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col px-6 py-6">
            <div className="flex items-center justify-between pb-6">
              <Link 
                to="/portfolio-home" 
                className="flex items-center space-x-3"
                aria-label="EngiPortfolio Home"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 shadow-lg">
                  <Icon name="Code2" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                    EngiPortfolio
                  </span>
                  <span className="text-xs text-muted-foreground">Engineering Excellence</span>
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-smooth hover:bg-muted"
                aria-label="Close mobile menu"
              >
                <Icon name="X" size={24} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-4 rounded-lg px-4 py-4 font-heading text-base font-medium transition-smooth ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  aria-current={isActivePath(item?.path) ? 'page' : undefined}
                >
                  <Icon 
                    name={item?.icon} 
                    size={20} 
                    strokeWidth={2}
                  />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavigation;