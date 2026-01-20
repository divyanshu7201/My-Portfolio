import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/UI/Button';

const SkillFilter = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedProficiency, 
  onProficiencyChange,
  onClearFilters 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'programming', label: 'Programming Languages' },
    { value: 'frameworks', label: 'Frameworks & Libraries' },
    { value: 'tools', label: 'Tools & Technologies' },
    { value: 'databases', label: 'Databases' },
    { value: 'soft-skills', label: 'Soft Skills' }
  ];

  const proficiencyOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'expert', label: 'Expert' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'beginner', label: 'Beginner' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedProficiency !== 'all';

  return (
    <div className="mb-6 rounded-lg border border-border bg-card p-4 shadow-elevation-1 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
          Filter Skills
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Clear Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select
          label="Category"
          options={categoryOptions}
          value={selectedCategory}
          onChange={onCategoryChange}
        />

        <Select
          label="Proficiency Level"
          options={proficiencyOptions}
          value={selectedProficiency}
          onChange={onProficiencyChange}
        />
      </div>
    </div>
  );
};

export default SkillFilter;