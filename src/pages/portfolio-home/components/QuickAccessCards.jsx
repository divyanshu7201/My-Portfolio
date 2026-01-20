import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickAccessCards = () => {
  const quickAccessItems = [
    {
      title: "Project Portfolio",
      description: "Explore my complete collection of engineering projects across various domains including IoT, AI/ML, and web development",
      icon: "FolderOpen",
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      link: "/project-portfolio",
      stats: "15+ Projects",
      action: "Browse Projects"
    },
    {
      title: "Skills & Experience",
      description: "Detailed overview of technical skills, academic achievements, certifications, and professional experience timeline",
      icon: "Award",
      iconColor: "text-success",
      iconBg: "bg-success/10",
      link: "/skills-experience",
      stats: "20+ Skills",
      action: "View Skills"
    },
    {
      title: "Resume & Contact",
      description: "Download my comprehensive resume and get in touch for collaboration opportunities, internships, or project inquiries",
      icon: "FileText",
      iconColor: "text-accent",
      iconBg: "bg-accent/10",
      link: "/contact-resume",
      stats: "Available Now",
      action: "Get Resume"
    }
  ];

  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2">
            <Icon name="Compass" size={16} className="text-primary" />
            <span className="caption font-medium text-primary">Quick Navigation</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Explore My Portfolio
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Navigate to different sections to learn more about my work, skills, and professional background
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {quickAccessItems?.map((item, index) => (
            <Link
              key={index}
              to={item?.link}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-elevation-2 transition-smooth hover:shadow-elevation-4 md:p-8"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${item?.iconBg} md:h-14 md:w-14`}>
                  <Icon name={item?.icon} size={28} className={item?.iconColor} />
                </div>
                
                <span className="caption rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground">
                  {item?.stats}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground transition-smooth group-hover:text-primary md:text-2xl">
                {item?.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item?.description}
              </p>

              <div className="flex items-center space-x-2 text-sm font-medium text-primary md:text-base">
                <span>{item?.action}</span>
                <Icon 
                  name="ArrowRight" 
                  size={18} 
                  className="transition-smooth group-hover:translate-x-1" 
                />
              </div>

              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 blur-2xl transition-smooth group-hover:opacity-100"></div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-gradient-to-r from-primary/5 via-accent/5 to-success/5 p-6 md:mt-16 md:p-8">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">
                Ready to Collaborate?
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Let's discuss how we can work together on innovative projects
              </p>
            </div>
            
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link to="/contact-resume">
                <button className="flex items-center justify-center space-x-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevation-2 transition-smooth hover:bg-primary/90 md:text-base">
                  <Icon name="Mail" size={20} />
                  <span>Contact Me</span>
                </button>
              </Link>
              
              <a 
                href="mailto:alex.chen@engineering.edu"
                className="flex items-center justify-center space-x-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-smooth hover:bg-muted md:text-base"
              >
                <Icon name="Send" size={20} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;