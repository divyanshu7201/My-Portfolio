import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const EmptyState = ({ onClearFilters }) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-12 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Icon name="SearchX" size={40} className="text-muted-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground">
        No Projects Found
      </h3>
      <p className="mb-6 max-w-md text-muted-foreground">
        We couldn't find any projects matching your current filters. Try adjusting your search criteria or clearing all filters to see all available projects.
      </p>
      <Button variant="default" size="lg" iconName="RotateCcw" iconPosition="left" onClick={onClearFilters}>
        Clear All Filters
      </Button>
    </div>
  );
};

export default EmptyState;