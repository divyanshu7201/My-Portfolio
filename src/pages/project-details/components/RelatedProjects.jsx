import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const RelatedProjects = ({ projects }) => {
  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <div className="mb-6 flex items-center justify-between md:mb-8">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
          Related Projects
        </h2>
        <Link to="/project-portfolio">
          <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {projects?.map((project) => (
          <Link
            key={project?.id}
            to={`/project-details/${project?.id}`}
            className="group overflow-hidden rounded-lg border border-border bg-card shadow-elevation-1 transition-smooth hover:shadow-elevation-3"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <Image
                src={project?.image}
                alt={project?.imageAlt}
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="caption rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {project?.category}
                </span>
                <Icon
                  name="ArrowUpRight"
                  size={18}
                  className="text-muted-foreground transition-smooth group-hover:text-primary"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground md:text-xl">
                {project?.title}
              </h3>

              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground md:text-base">
                {project?.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project?.technologies?.slice(0, 3)?.map((tech, index) => (
                  <span
                    key={index}
                    className="caption rounded-md border border-border bg-muted px-2 py-1 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project?.technologies?.length > 3 && (
                  <span className="caption rounded-md border border-border bg-muted px-2 py-1 text-muted-foreground">
                    +{project?.technologies?.length - 3}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;