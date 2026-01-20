import React from 'react';
import Icon from '../../../components/AppIcon';


const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      icon: "Mail",
      label: "Email",
      value: "alex.johnson@engineering.edu",
      action: "mailto:alex.johnson@engineering.edu",
      actionLabel: "Send Email"
    },
    {
      id: 2,
      icon: "Phone",
      label: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      actionLabel: "Call Now"
    },
    {
      id: 3,
      icon: "MapPin",
      label: "Location",
      value: "San Francisco, CA",
      action: null,
      actionLabel: null
    }
  ];

  const socialLinks = [
    {
      id: 1,
      platform: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com/in/alexjohnson",
      username: "@alexjohnson"
    },
    {
      id: 2,
      platform: "GitHub",
      icon: "Github",
      url: "https://github.com/alexjohnson",
      username: "@alexjohnson"
    },
    {
      id: 3,
      platform: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/alexjohnson",
      username: "@alexjohnson"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1">
        <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
          Contact Information
        </h3>
        <div className="space-y-4">
          {contactDetails?.map((detail) => (
            <div key={detail?.id} className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon name={detail?.icon} size={20} className="text-primary" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <p className="caption text-muted-foreground">{detail?.label}</p>
                <p className="font-medium text-foreground">{detail?.value}</p>
                {detail?.action && (
                  <a
                    href={detail?.action}
                    className="mt-1 inline-flex items-center space-x-1 text-sm text-primary transition-smooth hover:text-primary/80"
                  >
                    <span>{detail?.actionLabel}</span>
                    <Icon name="ExternalLink" size={14} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1">
        <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
          Connect With Me
        </h3>
        <div className="space-y-3">
          {socialLinks?.map((social) => (
            <a
              key={social?.id}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-border p-4 transition-smooth hover:border-primary hover:bg-primary/5"
            >
              <div className="flex items-center space-x-3">
                <Icon name={social?.icon} size={20} className="text-foreground" strokeWidth={2} />
                <div>
                  <p className="font-medium text-foreground">{social?.platform}</p>
                  <p className="caption text-muted-foreground">{social?.username}</p>
                </div>
              </div>
              <Icon name="ExternalLink" size={16} className="text-muted-foreground" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-success" strokeWidth={2} />
          <div>
            <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
              Current Availability
            </h3>
            <p className="text-muted-foreground">
              Open to internship opportunities and project collaborations starting Summer 2026. Available for full-time positions upon graduation in May 2027.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;