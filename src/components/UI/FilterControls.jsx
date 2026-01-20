import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Input from './Input';
import Select from './Select';

const FilterControls = ({ projects = [], onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const technologies = ['all', ...new Set(
    projects.flatMap(project => project.technologies || [])
  )]?.sort();

  const technologyOptions = technologies?.map(tech => ({
    value: tech,
    label: tech === 'all' ? 'All Technologies' : tech
  }));

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title', label: 'Title (A-Z)' }
  ];

  useEffect(() => {
    const filteredProjects = projects?.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());

      const matchesTechnology = selectedTechnology === 'all' ||
        project?.technologies?.includes(selectedTechnology);

      return matchesSearch && matchesTechnology;
    });

    const sortedProjects = [...filteredProjects]?.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.date || 0) - new Date(a.date || 0);
        case 'oldest':
          return new Date(a.date || 0) - new Date(b.date || 0);
        case 'title':
          return (a?.title || '')?.localeCompare(b?.title || '');
        default:
          return 0;
      }
    });

    onFilterChange?.(sortedProjects);
  }, [searchTerm, selectedTechnology, sortBy, projects, onFilterChange]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTechnology('all');
    setSortBy('recent');
  };

  const hasActiveFilters = searchTerm !== '' || selectedTechnology !== 'all' || sortBy !== 'recent';

  const FilterContent = () => (
    <>
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-end lg:space-x-4 lg:space-y-0">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full"
          />
        </div>

        <div className="w-full lg:w-64">
          <Select
            options={technologyOptions}
            value={selectedTechnology}
            onChange={setSelectedTechnology}
            placeholder="Filter by technology"
          />
        </div>

        <div className="w-full lg:w-48">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            placeholder="Sort by"
          />
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="flex items-center justify-center space-x-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition-smooth hover:bg-muted lg:py-3"
            aria-label="Clear all filters"
          >
            <Icon name="X" size={16} strokeWidth={2} />
            <span>Clear</span>
          </button>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <p className="caption text-muted-foreground">
          Showing {projects?.length} {projects?.length === 1 ? 'project' : 'projects'}
        </p>
        {hasActiveFilters && (
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} className="text-primary" />
            <span className="caption text-primary">Filters active</span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="mb-8 rounded-lg border border-border bg-card p-6 shadow-elevation-1">
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <h3 className="font-heading text-lg font-semibold">Filter Projects</h3>
        <button
          onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
          className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-smooth hover:bg-muted"
          aria-expanded={isFilterPanelOpen}
          aria-label="Toggle filter panel"
        >
          <Icon 
            name={isFilterPanelOpen ? 'ChevronUp' : 'ChevronDown'} 
            size={20} 
            strokeWidth={2}
          />
          <span>{isFilterPanelOpen ? 'Hide' : 'Show'} Filters</span>
        </button>
      </div>

      <div className={`${isFilterPanelOpen ? 'block' : 'hidden'} lg:block`}>
        <FilterContent />
      </div>
    </div>
  );
};

export default FilterControls;