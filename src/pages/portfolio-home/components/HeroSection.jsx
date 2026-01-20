import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const socialLinks = [
  {
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com',
    ariaLabel: 'Visit GitHub profile'
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://linkedin.com',
    ariaLabel: 'Visit LinkedIn profile'
  },
  {
    name: 'Twitter',
    icon: 'Twitter',
    url: 'https://twitter.com',
    ariaLabel: 'Visit Twitter profile'
  },
  {
    name: 'Email',
    icon: 'Mail',
    url: 'mailto:alex.chen@engineering.edu',
    ariaLabel: 'Send email'
  }];


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 md:mb-8">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="caption font-medium text-primary">Available for Opportunities</span>
            </div>

            <h1 className="mb-4 text-center text-4xl font-bold text-foreground md:mb-6 md:text-5xl lg:text-left lg:text-6xl">
              Hi, I'm <span className="text-primary">Alex Chen</span>
            </h1>

            <p className="mb-3 text-center text-xl font-medium text-muted-foreground md:mb-4 md:text-2xl lg:text-left">
              Computer Engineering Student
            </p>

            <p className="mb-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:mb-8 md:text-lg lg:text-left">
              Passionate about building innovative solutions through software development and embedded systems. Currently pursuing my Bachelor's degree with a focus on AI/ML applications and IoT technologies. I transform complex problems into elegant, user-friendly applications.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:justify-start">
              <Link to="/project-portfolio">
                <Button
                  variant="default"
                  size="lg"
                  iconName="FolderOpen"
                  iconPosition="right"
                  className="shadow-elevation-2">

                  View Projects
                </Button>
              </Link>
              
              <Link to="/contact-resume">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="right">

                  Download Resume
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) =>
              <a
                key={social?.name}
                href={social?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition-smooth hover:border-primary hover:bg-primary/10 md:h-12 md:w-12"
                aria-label={social?.ariaLabel}>

                  <Icon name={social?.icon} size={20} className="text-foreground" />
                </a>
              )}
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-card shadow-elevation-4 md:rounded-3xl">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_101be0cb3-1763300423274.png"
                  alt="Professional headshot of Alex Chen, a young Asian male computer engineering student with short black hair, wearing a navy blue blazer and white shirt, smiling confidently against a modern office background"
                  className="h-64 w-64 object-cover md:h-80 md:w-80 lg:h-96 lg:w-96" />

              </div>
              
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card p-3 shadow-elevation-3 md:p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 md:h-10 md:w-10">
                    <Icon name="Code2" size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground md:text-sm">15+ Projects</p>
                    <p className="caption text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;