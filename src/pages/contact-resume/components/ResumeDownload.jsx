import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const ResumeDownload = () => {
  const [downloadingId, setDownloadingId] = useState(null);

  const downloadOptions = [
    {
      id: 1,
      title: "Full Resume",
      description: "Complete professional resume with all experience and education details",
      icon: "FileText",
      fileSize: "245 KB",
      fileType: "PDF",
      fileName: "Alex_Johnson_Resume.pdf"
    },
    {
      id: 2,
      title: "Portfolio Summary",
      description: "Condensed overview of key projects and technical skills",
      icon: "Briefcase",
      fileSize: "180 KB",
      fileType: "PDF",
      fileName: "Alex_Johnson_Portfolio_Summary.pdf"
    },
    {
      id: 3,
      title: "Project Documentation",
      description: "Detailed technical documentation of major projects",
      icon: "FolderOpen",
      fileSize: "520 KB",
      fileType: "PDF",
      fileName: "Alex_Johnson_Projects.pdf"
    },
    {
      id: 4,
      title: "Certifications",
      description: "Professional certifications and course completions",
      icon: "Award",
      fileSize: "95 KB",
      fileType: "PDF",
      fileName: "Alex_Johnson_Certifications.pdf"
    }
  ];

  const handleDownload = (option) => {
    setDownloadingId(option?.id);
    
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.download = option?.fileName;
      document.body?.appendChild(link);
      link?.click();
      document.body?.removeChild(link);
      
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-elevation-2 lg:p-8">
      <div className="mb-6">
        <h2 className="mb-2 font-heading text-2xl font-semibold text-foreground">
          Download Materials
        </h2>
        <p className="text-muted-foreground">
          Access my professional documents and portfolio materials in PDF format
        </p>
      </div>
      <div className="space-y-4">
        {downloadOptions?.map((option) => (
          <div
            key={option?.id}
            className="flex flex-col space-y-3 rounded-lg border border-border bg-background p-4 transition-smooth hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
          >
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon name={option?.icon} size={24} className="text-primary" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-heading text-base font-semibold text-foreground">
                  {option?.title}
                </h3>
                <p className="caption mb-2 text-muted-foreground">
                  {option?.description}
                </p>
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center space-x-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground">
                    <Icon name="File" size={12} strokeWidth={2} />
                    <span>{option?.fileType}</span>
                  </span>
                  <span className="caption text-muted-foreground">
                    {option?.fileSize}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="default"
              onClick={() => handleDownload(option)}
              loading={downloadingId === option?.id}
              iconName="Download"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              {downloadingId === option?.id ? 'Downloading...' : 'Download'}
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-muted p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary" strokeWidth={2} />
          <div>
            <p className="caption text-foreground">
              All documents are regularly updated to reflect my latest experience and projects. Last updated: January 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;