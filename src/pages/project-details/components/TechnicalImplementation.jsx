import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const TechnicalImplementation = ({ project }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyCode = (code, index) => {
    navigator.clipboard?.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-foreground md:mb-6 md:text-3xl lg:text-4xl">
        Technical Implementation
      </h2>
      <div className="space-y-6 md:space-y-8">
        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
              <Icon name="Layers" size={20} className="text-primary" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Architecture Overview
            </h3>
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            {project?.architecture}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 md:h-12 md:w-12">
              <Icon name="Cpu" size={20} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Key Algorithms
            </h3>
          </div>
          <ul className="space-y-3 md:space-y-4">
            {project?.algorithms?.map((algorithm, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon
                  name="Code2"
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-primary"
                  strokeWidth={2}
                />
                <span className="text-sm text-muted-foreground md:text-base lg:text-lg">
                  {algorithm}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-1 md:p-8">
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 md:h-12 md:w-12">
              <Icon name="GitBranch" size={20} className="text-success" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl lg:text-2xl">
              Integration Approach
            </h3>
          </div>
          <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            {project?.integration}
          </p>

          <div className="space-y-4 md:space-y-6">
            {project?.codeSnippets?.map((snippet, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-border">
                <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3 md:px-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="FileCode" size={18} className="text-primary" strokeWidth={2} />
                    <span className="caption font-medium text-foreground">
                      {snippet?.title}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName={copiedIndex === index ? "Check" : "Copy"}
                    iconPosition="left"
                    onClick={() => handleCopyCode(snippet?.code, index)}
                  >
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
                <div className="overflow-x-auto bg-background p-4 md:p-6">
                  <pre className="text-xs text-foreground md:text-sm">
                    <code>{snippet?.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalImplementation;