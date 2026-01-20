import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const SkillsOverview = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      category: "Web Development",
      icon: "Globe",
      skills: [
        { name: "React", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "HTML/CSS", level: 92 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 83 },
        { name: "OpenCV", level: 77 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "Wrench",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 88 }
      ]
    }
  ];

  const topSkills = [
    "Python", "React", "Machine Learning", "IoT", "Blockchain",
    "Computer Vision", "Cloud Computing", "Embedded Systems",
    "Data Structures", "Algorithms", "REST APIs", "Microservices"
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-success/10 px-4 py-2">
            <Icon name="Zap" size={16} className="text-success" />
            <span className="caption font-medium text-success">Technical Expertise</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Comprehensive technical skill set developed through academic coursework and hands-on project experience
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            {skillCategories?.map((category, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 shadow-elevation-2 md:p-8"
              >
                <div className="mb-6 flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
                    <Icon name={category?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {category?.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category?.skills?.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground md:text-base">
                          {skill?.name}
                        </span>
                        <span className="caption font-semibold text-primary">
                          {skill?.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-smooth"
                          style={{ width: `${skill?.level}%` }}
                          role="progressbar"
                          aria-valuenow={skill?.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`${skill?.name} proficiency: ${skill?.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-elevation-2 md:p-8">
          <div className="mb-6 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 md:h-12 md:w-12">
              <Icon name="Tags" size={24} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground md:text-xl">
              Quick Skills Overview
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {topSkills?.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center space-x-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-smooth hover:border-primary hover:bg-primary/5 md:text-base"
              >
                <Icon name="CheckCircle2" size={16} className="text-success" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:mt-16">
          <Link to="/skills-experience">
            <Button 
              variant="default" 
              size="lg"
              iconName="Award"
              iconPosition="right"
            >
              View Full Skills & Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;