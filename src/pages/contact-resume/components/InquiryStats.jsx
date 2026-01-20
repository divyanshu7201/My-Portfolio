import React from 'react';
import Icon from '../../../components/AppIcon';

const InquiryStats = () => {
  const stats = [
    {
      id: 1,
      icon: "MessageSquare",
      label: "Response Time",
      value: "24-48 hours",
      description: "Average reply time for inquiries"
    },
    {
      id: 2,
      icon: "CheckCircle2",
      label: "Response Rate",
      value: "100%",
      description: "All messages receive a response"
    },
    {
      id: 3,
      icon: "Users",
      label: "Active Connections",
      value: "500+",
      description: "Professional network contacts"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="rounded-lg border border-border bg-card p-6 shadow-elevation-1"
        >
          <div className="mb-3 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon name={stat?.icon} size={20} className="text-primary" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {stat?.value}
            </h3>
          </div>
          <p className="mb-1 font-medium text-foreground">{stat?.label}</p>
          <p className="caption text-muted-foreground">{stat?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InquiryStats;