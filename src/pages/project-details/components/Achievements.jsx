import React from 'react';
import Icon from '../../../components/AppIcon';

const Achievements = ({ achievements }) => {
  const getIconForType = (type) => {
    switch (type) {
      case 'award':
        return 'Award';
      case 'metric':
        return 'TrendingUp';
      case 'recognition':
        return 'Star';
      default:
        return 'Trophy';
    }
  };

  const getColorForType = (type) => {
    switch (type) {
      case 'award':
        return 'bg-warning/10 text-warning';
      case 'metric':
        return 'bg-success/10 text-success';
      case 'recognition':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-accent/10 text-accent';
    }
  };

  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-foreground md:mb-6 md:text-3xl lg:text-4xl">
        Achievements & Recognition
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {achievements?.map((achievement, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 transition-smooth hover:shadow-elevation-2 md:p-8"
          >
            <div className="mb-4 flex items-start justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg md:h-14 md:w-14 ${getColorForType(
                  achievement?.type
                )}`}
              >
                <Icon
                  name={getIconForType(achievement?.type)}
                  size={24}
                  strokeWidth={2}
                />
              </div>
              {achievement?.date && (
                <span className="caption rounded-full bg-muted px-3 py-1 text-muted-foreground">
                  {achievement?.date}
                </span>
              )}
            </div>

            <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
              {achievement?.title}
            </h3>

            <p className="mb-4 text-sm text-muted-foreground md:text-base">
              {achievement?.description}
            </p>

            {achievement?.issuer && (
              <div className="flex items-center space-x-2 border-t border-border pt-4">
                <Icon
                  name="Building2"
                  size={16}
                  className="text-muted-foreground"
                  strokeWidth={2}
                />
                <span className="caption text-muted-foreground">
                  {achievement?.issuer}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;