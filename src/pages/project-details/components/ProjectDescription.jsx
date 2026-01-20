import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectDescription = ({ project }) => {
  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-foreground md:mb-6 md:text-3xl lg:text-4xl">
        Project Overview
      </h2>
      <div className="space-y-6 md:space-y-8">
        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-error/10 md:h-12 md:w-12">
              <Icon name="AlertCircle" size={20} className="text-error" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Problem Statement
            </h3>
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            {project?.problemStatement}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 md:h-12 md:w-12">
              <Icon name="Lightbulb" size={20} className="text-success" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Solution Approach
            </h3>
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            {project?.solutionApproach}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 md:h-12 md:w-12">
              <Icon name="Zap" size={20} className="text-warning" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Technical Challenges
            </h3>
          </div>
          <ul className="space-y-3 md:space-y-4">
            {project?.challenges?.map((challenge, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon
                  name="CheckCircle2"
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-primary"
                  strokeWidth={2}
                />
                <span className="text-sm text-muted-foreground md:text-base lg:text-lg">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
              <Icon name="TrendingUp" size={20} className="text-primary" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Measurable Outcomes
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {project?.outcomes?.map((outcome, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-muted p-4 md:p-5"
              >
                <p className="mb-2 text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
                  {outcome?.value}
                </p>
                <p className="text-sm text-muted-foreground md:text-base">
                  {outcome?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;