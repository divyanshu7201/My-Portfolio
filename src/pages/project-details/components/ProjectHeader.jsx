import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectHeader = ({ project }) => {
  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <div className="mb-4 md:mb-6">
        <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          {project?.title}
        </h1>
        <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
          {project?.tagline}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
        <div className="flex items-start space-x-3 rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
            <Icon name="Calendar" size={20} className="text-primary" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="caption mb-1 text-muted-foreground">Duration</p>
            <p className="truncate text-sm font-medium text-foreground md:text-base">
              {project?.duration}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3 rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
            <Icon name="Users" size={20} className="text-primary" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="caption mb-1 text-muted-foreground">Team Size</p>
            <p className="truncate text-sm font-medium text-foreground md:text-base">
              {project?.teamSize}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3 rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
            <Icon name="Award" size={20} className="text-primary" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="caption mb-1 text-muted-foreground">Role</p>
            <p className="truncate text-sm font-medium text-foreground md:text-base">
              {project?.role}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3 rounded-lg border border-border bg-card p-4 md:p-5 lg:p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
            <Icon name="Code2" size={20} className="text-primary" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="caption mb-1 text-muted-foreground">Status</p>
            <p className="truncate text-sm font-medium text-foreground md:text-base">
              {project?.status}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8">
        <p className="caption mb-3 text-muted-foreground">Technology Stack</p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground md:px-4 md:py-2 md:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;