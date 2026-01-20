import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactIntegration = () => {
  const contactMethods = [
    {
      icon: "Mail",
      label: "Email",
      value: "alex.chen@engineering.edu",
      link: "mailto:alex.chen@engineering.edu",
      description: "Best for detailed inquiries"
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available Mon-Fri, 9AM-5PM EST"
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "Boston, MA, USA",
      link: null,
      description: "Open to remote opportunities"
    }
  ];

  const socialPlatforms = [
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/alexchen",
      username: "@alexchen",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com/in/alexchen",
      username: "Alex Chen",
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/alexchen_dev",
      username: "@alexchen_dev",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "Stack Overflow",
      icon: "Code",
      url: "https://stackoverflow.com/users/alexchen",
      username: "alexchen",
      color: "hover:text-[#F48024]"
    }
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2">
            <Icon name="MessageSquare" size={16} className="text-accent" />
            <span className="caption font-medium text-accent">Get In Touch</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Let's Connect
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 shadow-elevation-2 md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 md:h-14 md:w-14">
                <Icon name={method?.icon} size={28} className="text-primary" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                {method?.label}
              </h3>

              {method?.link ? (
                <a
                  href={method?.link}
                  className="mb-2 block text-base font-medium text-primary transition-smooth hover:underline md:text-lg"
                >
                  {method?.value}
                </a>
              ) : (
                <p className="mb-2 text-base font-medium text-foreground md:text-lg">
                  {method?.value}
                </p>
              )}

              <p className="caption text-muted-foreground">
                {method?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-elevation-2 md:p-8">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">
              Connect on Social Media
            </h3>
            <p className="text-sm text-muted-foreground md:text-base">
              Follow my journey and stay updated with my latest projects and insights
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {socialPlatforms?.map((platform, index) => (
              <a
                key={index}
                href={platform?.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-4 rounded-lg border border-border bg-background p-4 transition-smooth hover:border-primary hover:shadow-elevation-2 ${platform?.color}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-smooth group-hover:bg-primary/10 md:h-12 md:w-12">
                  <Icon name={platform?.icon} size={24} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground md:text-base">
                    {platform?.name}
                  </p>
                  <p className="caption truncate text-muted-foreground">
                    {platform?.username}
                  </p>
                </div>

                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  className="text-muted-foreground transition-smooth group-hover:text-primary" 
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:mt-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-success bg-success/10 px-6 py-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-success"></div>
            <span className="text-sm font-medium text-success md:text-base">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntegration;