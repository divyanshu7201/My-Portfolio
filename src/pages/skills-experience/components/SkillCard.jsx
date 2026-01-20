import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill }) => {
  const getProficiencyColor = (level) => {
    switch (level) {
      case 'expert':
        return 'bg-success';
      case 'advanced':
        return 'bg-primary';
      case 'intermediate':
        return 'bg-warning';
      case 'beginner':
        return 'bg-muted-foreground';
      default:
        return 'bg-muted';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'expert':
        return 'w-full';
      case 'advanced':
        return 'w-4/5';
      case 'intermediate':
        return 'w-3/5';
      case 'beginner':
        return 'w-2/5';
      default:
        return 'w-1/5';
    }
  };

  return (
    <div className="group rounded-lg border border-border bg-card p-4 transition-smooth hover:shadow-elevation-2 md:p-5 lg:p-6">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-smooth group-hover:bg-primary/20 md:h-12 md:w-12">
            <Icon 
              name={skill?.icon} 
              size={20} 
              className="text-primary md:h-6 md:w-6" 
              strokeWidth={2}
            />
          </div>
          <div>
            <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
              {skill?.name}
            </h3>
            <p className="caption text-muted-foreground">
              {skill?.experience}
            </p>
          </div>
        </div>
        <span className="caption rounded-full bg-muted px-2 py-1 text-xs font-medium capitalize text-muted-foreground md:px-3 md:text-sm">
          {skill?.proficiency}
        </span>
      </div>
      <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div 
          className={`h-full transition-all duration-500 ${getProficiencyColor(skill?.proficiency)} ${getProficiencyWidth(skill?.proficiency)}`}
        />
      </div>
      {skill?.projects && (
        <p className="caption mt-3 text-muted-foreground">
          Used in {skill?.projects} {skill?.projects === 1 ? 'project' : 'projects'}
        </p>
      )}
    </div>
  );
};

export default SkillCard;