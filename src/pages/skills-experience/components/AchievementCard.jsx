import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementCard = ({ achievement }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getIconByType = (type) => {
    switch (type) {
      case 'academic':
        return 'GraduationCap';
      case 'competition':
        return 'Trophy';
      case 'recognition':
        return 'Award';
      case 'publication':
        return 'BookOpen';
      default:
        return 'Star';
    }
  };

  const getColorByType = (type) => {
    switch (type) {
      case 'academic':
        return 'text-primary bg-primary/10';
      case 'competition':
        return 'text-accent bg-accent/10';
      case 'recognition':
        return 'text-warning bg-warning/10';
      case 'publication':
        return 'text-success bg-success/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="group rounded-lg border border-border bg-card p-5 shadow-elevation-1 transition-smooth hover:shadow-elevation-2 md:p-6">
      <div className="mb-4 flex items-start space-x-4">
        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-smooth ${getColorByType(achievement?.type)}`}>
          <Icon 
            name={getIconByType(achievement?.type)} 
            size={24} 
            strokeWidth={2}
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 font-heading text-base font-semibold text-foreground md:text-lg">
            {achievement?.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <span className="caption">{achievement?.organization}</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} strokeWidth={2} />
              <span className="caption">{formatDate(achievement?.date)}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-foreground md:text-base">
        {achievement?.description}
      </p>
      {achievement?.details && achievement?.details?.length > 0 && (
        <ul className="mb-4 space-y-2">
          {achievement?.details?.map((detail, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="mt-1 flex-shrink-0 text-muted-foreground" 
                strokeWidth={2}
              />
              <span className="caption text-foreground">{detail}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center justify-between">
        <span className="caption rounded-full bg-muted px-3 py-1 text-xs font-medium capitalize text-muted-foreground">
          {achievement?.type}
        </span>
        {achievement?.link && (
          <button
            onClick={() => window.open(achievement?.link, '_blank')}
            className="flex items-center space-x-1 text-sm font-medium text-primary transition-smooth hover:text-primary/80"
          >
            <span>View Details</span>
            <Icon name="ExternalLink" size={14} strokeWidth={2} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;