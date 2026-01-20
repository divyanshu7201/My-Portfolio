import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const ProjectNavigation = ({ currentProject, allProjects = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectDetails = location?.pathname?.startsWith('/project-details');

  const currentIndex = allProjects?.findIndex(
    project => project?.id === currentProject?.id
  );
  const previousProject = currentIndex > 0 ? allProjects?.[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects?.length - 1 ? allProjects?.[currentIndex + 1] : null;

  const handlePrevious = () => {
    if (previousProject) {
      navigate(`/project-details/${previousProject?.id}`);
    }
  };

  const handleNext = () => {
    if (nextProject) {
      navigate(`/project-details/${nextProject?.id}`);
    }
  };

  if (!isProjectDetails) {
    return null;
  }

  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center space-x-2 text-sm">
            <li>
              <Link
                to="/portfolio-home"
                className="text-muted-foreground transition-smooth hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            </li>
            <li>
              <Link
                to="/project-portfolio"
                className="text-muted-foreground transition-smooth hover:text-foreground"
              >
                Projects
              </Link>
            </li>
            {currentProject && (
              <>
                <li>
                  <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                </li>
                <li>
                  <span className="font-medium text-foreground" aria-current="page">
                    {currentProject?.title}
                  </span>
                </li>
              </>
            )}
          </ol>
        </nav>

        {allProjects?.length > 1 && (
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={!previousProject}
              className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-smooth hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous project"
            >
              <Icon name="ChevronLeft" size={20} strokeWidth={2} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="caption text-center text-muted-foreground">
              Project {currentIndex + 1} of {allProjects?.length}
            </div>

            <button
              onClick={handleNext}
              disabled={!nextProject}
              className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-smooth hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next project"
            >
              <span className="hidden sm:inline">Next</span>
              <Icon name="ChevronRight" size={20} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigation;