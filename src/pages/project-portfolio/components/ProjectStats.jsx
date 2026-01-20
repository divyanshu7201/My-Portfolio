import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects = [] }) => {
  const totalProjects = projects?.length;
  const uniqueTechnologies = new Set(projects.flatMap(p => p.technologies || []))?.size;
  const totalTeamMembers = projects?.reduce((sum, p) => sum + (p?.teamSize || 0), 0);
  const completedProjects = projects?.filter(p => p?.status === 'completed')?.length;

  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: totalProjects,
      color: 'text-primary'
    },
    {
      icon: 'Code2',
      label: 'Technologies',
      value: uniqueTechnologies,
      color: 'text-accent'
    },
    {
      icon: 'Users',
      label: 'Team Members',
      value: totalTeamMembers,
      color: 'text-success'
    },
    {
      icon: 'CheckCircle2',
      label: 'Completed',
      value: completedProjects,
      color: 'text-warning'
    }
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg border border-border bg-card p-6 shadow-elevation-1 transition-smooth hover:shadow-elevation-2"
        >
          <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-muted ${stat?.color}`}>
            <Icon name={stat?.icon} size={24} strokeWidth={2} />
          </div>
          <div className="text-center">
            <p className="mb-1 font-heading text-2xl font-bold text-foreground lg:text-3xl">
              {stat?.value}
            </p>
            <p className="caption text-muted-foreground">{stat?.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;