import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    imageAlt,
    technologies = [],
    duration,
    teamSize,
    achievements = [],
    liveDemo,
    githubRepo,
    date
  } = project;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-elevation-1 transition-smooth hover:shadow-elevation-3">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded-md bg-background/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="caption font-medium text-foreground">
            {formatDate(date)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex-1">
          <h3 className="mb-3 font-heading text-xl font-semibold text-foreground line-clamp-2">
            {title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
            {technologies?.length > 4 && (
              <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                +{technologies?.length - 4} more
              </span>
            )}
          </div>

          <div className="mb-4 flex flex-wrap gap-4 border-t border-border pt-4">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-muted-foreground" />
              <span className="caption text-muted-foreground">{duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-muted-foreground" />
              <span className="caption text-muted-foreground">
                {teamSize} {teamSize === 1 ? 'member' : 'members'}
              </span>
            </div>
          </div>

          {achievements?.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-medium text-foreground">Key Achievements:</h4>
              <ul className="space-y-1">
                {achievements?.slice(0, 2)?.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle2" size={14} className="mt-0.5 flex-shrink-0 text-success" />
                    <span className="caption text-muted-foreground line-clamp-1">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row">
          <Link to={`/project-details/${id}`} className="flex-1">
            <Button variant="default" size="default" fullWidth iconName="Eye" iconPosition="left">
              View Details
            </Button>
          </Link>
          <div className="flex gap-2">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <Button variant="outline" size="default" iconName="ExternalLink" iconPosition="right">
                  Demo
                </Button>
              </a>
            )}
            {githubRepo && (
              <a
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <Button variant="outline" size="default" iconName="Github" iconPosition="right">
                  Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;