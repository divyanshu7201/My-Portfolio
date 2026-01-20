import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationCard = ({ education }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-elevation-1 transition-smooth hover:shadow-elevation-2 md:p-6 lg:p-8">
      <div className="mb-4 flex flex-col space-y-3 md:flex-row md:items-start md:justify-between md:space-y-0">
        <div className="flex-1">
          <h3 className="mb-2 font-heading text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
            {education?.degree}
          </h3>
          <div className="mb-2 flex items-center space-x-2 text-muted-foreground">
            <Icon name="GraduationCap" size={18} strokeWidth={2} />
            <span className="text-sm md:text-base">{education?.institution}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="MapPin" size={16} strokeWidth={2} />
            <span className="caption">{education?.location}</span>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 md:items-end">
          <div className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-2 md:px-4">
            <Icon name="Calendar" size={16} className="text-muted-foreground" strokeWidth={2} />
            <span className="caption whitespace-nowrap text-muted-foreground">
              {formatDate(education?.startDate)} - {education?.endDate === 'Present' ? 'Present' : formatDate(education?.endDate)}
            </span>
          </div>
          {education?.gpa && (
            <div className="rounded-lg bg-primary/10 px-3 py-2 md:px-4">
              <span className="caption font-semibold text-primary">
                GPA: {education?.gpa}
              </span>
            </div>
          )}
        </div>
      </div>
      {education?.description && (
        <p className="mb-4 text-sm leading-relaxed text-foreground md:text-base">
          {education?.description}
        </p>
      )}
      {education?.coursework && education?.coursework?.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground md:text-base">
            Relevant Coursework:
          </h4>
          <div className="flex flex-wrap gap-2">
            {education?.coursework?.map((course, index) => (
              <span 
                key={index}
                className="caption rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground md:text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
      {education?.achievements && education?.achievements?.length > 0 && (
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground md:text-base">
            Achievements:
          </h4>
          <ul className="space-y-2">
            {education?.achievements?.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon 
                  name="Award" 
                  size={16} 
                  className="mt-1 flex-shrink-0 text-accent" 
                  strokeWidth={2}
                />
                <span className="text-sm text-foreground md:text-base">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationCard;