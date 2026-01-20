import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const months = (end?.getFullYear() - start?.getFullYear()) * 12 + (end?.getMonth() - start?.getMonth());
    
    if (months < 12) {
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    }
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths > 0 
      ? `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`
      : `${years} ${years === 1 ? 'year' : 'years'}`;
  };

  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-elevation-1 transition-smooth hover:shadow-elevation-2 md:p-6 lg:p-8">
      <div className="mb-4 flex flex-col space-y-3 md:flex-row md:items-start md:justify-between md:space-y-0">
        <div className="flex-1">
          <h3 className="mb-1 font-heading text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
            {experience?.role}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={16} strokeWidth={2} />
              <span className="text-sm md:text-base">{experience?.organization}</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} strokeWidth={2} />
              <span className="text-sm md:text-base">{experience?.location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-2 md:px-4">
          <Icon name="Calendar" size={16} className="text-muted-foreground" strokeWidth={2} />
          <span className="caption whitespace-nowrap text-muted-foreground">
            {formatDate(experience?.startDate)} - {experience?.endDate === 'Present' ? 'Present' : formatDate(experience?.endDate)}
          </span>
        </div>
      </div>
      <p className="caption mb-4 text-muted-foreground">
        Duration: {calculateDuration(experience?.startDate, experience?.endDate)}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-foreground md:text-base">
        {experience?.description}
      </p>
      {experience?.responsibilities && experience?.responsibilities?.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground md:text-base">
            Key Responsibilities:
          </h4>
          <ul className="space-y-2">
            {experience?.responsibilities?.slice(0, isExpanded ? undefined : 3)?.map((responsibility, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon 
                  name="CheckCircle2" 
                  size={16} 
                  className="mt-1 flex-shrink-0 text-success" 
                  strokeWidth={2}
                />
                <span className="text-sm text-foreground md:text-base">{responsibility}</span>
              </li>
            ))}
          </ul>
          {experience?.responsibilities?.length > 3 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
              iconPosition="right"
              className="mt-3"
            >
              {isExpanded ? 'Show Less' : `Show ${experience?.responsibilities?.length - 3} More`}
            </Button>
          )}
        </div>
      )}
      {experience?.technologies && experience?.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {experience?.technologies?.map((tech, index) => (
            <span 
              key={index}
              className="caption rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground md:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;