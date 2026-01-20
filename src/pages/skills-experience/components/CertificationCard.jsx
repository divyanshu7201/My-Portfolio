import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const CertificationCard = ({ certification }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const isExpired = certification?.expiryDate && new Date(certification.expiryDate) < new Date();
  const isExpiringSoon = certification?.expiryDate && 
    new Date(certification.expiryDate) > new Date() && 
    new Date(certification.expiryDate) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  return (
    <div className="group rounded-lg border border-border bg-card p-5 shadow-elevation-1 transition-smooth hover:shadow-elevation-2 md:p-6">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-start space-x-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-smooth group-hover:bg-accent/20">
              <Icon 
                name="Award" 
                size={24} 
                className="text-accent" 
                strokeWidth={2}
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 font-heading text-base font-semibold text-foreground md:text-lg">
                {certification?.name}
              </h3>
              <p className="caption text-muted-foreground">
                {certification?.issuer}
              </p>
            </div>
          </div>
        </div>
        {certification?.status === 'completed' && (
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-success/10">
            <Icon name="CheckCircle2" size={18} className="text-success" strokeWidth={2} />
          </div>
        )}
        {certification?.status === 'in-progress' && (
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-warning/10">
            <Icon name="Clock" size={18} className="text-warning" strokeWidth={2} />
          </div>
        )}
      </div>
      <div className="mb-4 flex flex-wrap gap-2 text-sm">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Icon name="Calendar" size={14} strokeWidth={2} />
          <span className="caption">Issued: {formatDate(certification?.issueDate)}</span>
        </div>
        {certification?.expiryDate && (
          <>
            <span className="text-muted-foreground">•</span>
            <div className={`flex items-center space-x-2 ${isExpired ? 'text-error' : isExpiringSoon ? 'text-warning' : 'text-muted-foreground'}`}>
              <Icon name="Calendar" size={14} strokeWidth={2} />
              <span className="caption">
                {isExpired ? 'Expired' : 'Expires'}: {formatDate(certification?.expiryDate)}
              </span>
            </div>
          </>
        )}
      </div>
      {certification?.description && (
        <p className="mb-4 text-sm leading-relaxed text-foreground">
          {certification?.description}
        </p>
      )}
      {certification?.skills && certification?.skills?.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {certification?.skills?.map((skill, index) => (
            <span 
              key={index}
              className="caption rounded-full border border-border bg-background px-2 py-1 text-xs font-medium text-foreground md:px-3"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {certification?.credentialUrl && (
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(certification?.credentialUrl, '_blank')}
          >
            View Credential
          </Button>
        )}
        {certification?.certificateId && (
          <div className="flex items-center space-x-2 rounded-lg border border-border bg-muted px-3 py-2">
            <Icon name="Hash" size={14} className="text-muted-foreground" strokeWidth={2} />
            <span className="caption text-muted-foreground">{certification?.certificateId}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;