import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import MainNavigation from '../../components/UI/MainNavigation';
import Icon from '../../components/AppIcon';
import Button from '../../components/UI/Button';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import AchievementCard from './components/AchievementCard';
import SkillFilter from './components/SkillFilter';

const SkillsExperience = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProficiency, setSelectedProficiency] = useState('all');
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      category: "programming",
      proficiency: "expert",
      experience: "3+ years",
      icon: "Code2",
      projects: 15
    },
    {
      id: 2,
      name: "React",
      category: "frameworks",
      proficiency: "advanced",
      experience: "2+ years",
      icon: "Layers",
      projects: 12
    },
    {
      id: 3,
      name: "Python",
      category: "programming",
      proficiency: "advanced",
      experience: "2+ years",
      icon: "Terminal",
      projects: 10
    },
    {
      id: 4,
      name: "Node.js",
      category: "frameworks",
      proficiency: "advanced",
      experience: "2+ years",
      icon: "Server",
      projects: 8
    },
    {
      id: 5,
      name: "MongoDB",
      category: "databases",
      proficiency: "intermediate",
      experience: "1+ year",
      icon: "Database",
      projects: 6
    },
    {
      id: 6,
      name: "Git",
      category: "tools",
      proficiency: "expert",
      experience: "3+ years",
      icon: "GitBranch",
      projects: 20
    },
    {
      id: 7,
      name: "Docker",
      category: "tools",
      proficiency: "intermediate",
      experience: "1+ year",
      icon: "Package",
      projects: 5
    },
    {
      id: 8,
      name: "TypeScript",
      category: "programming",
      proficiency: "intermediate",
      experience: "1+ year",
      icon: "FileCode",
      projects: 7
    },
    {
      id: 9,
      name: "PostgreSQL",
      category: "databases",
      proficiency: "intermediate",
      experience: "1+ year",
      icon: "Database",
      projects: 4
    },
    {
      id: 10,
      name: "AWS",
      category: "tools",
      proficiency: "beginner",
      experience: "6 months",
      icon: "Cloud",
      projects: 2
    },
    {
      id: 11,
      name: "Problem Solving",
      category: "soft-skills",
      proficiency: "expert",
      experience: "4+ years",
      icon: "Lightbulb",
      projects: 25
    },
    {
      id: 12,
      name: "Team Collaboration",
      category: "soft-skills",
      proficiency: "advanced",
      experience: "3+ years",
      icon: "Users",
      projects: 18
    }
  ];

  const experiences = [
    {
      id: 1,
      role: "Software Engineering Intern",
      organization: "TechCorp Solutions",
      location: "San Francisco, CA",
      startDate: "2025-06-01",
      endDate: "2025-08-31",
      description: "Contributed to the development of a cloud-based project management platform serving over 10,000 users. Worked closely with senior engineers to implement new features and optimize existing functionality.",
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express, improving response time by 30%",
        "Implemented responsive UI components with React and Tailwind CSS, enhancing user experience across devices",
        "Collaborated with cross-functional teams in Agile sprints to deliver features on schedule",
        "Wrote comprehensive unit tests achieving 85% code coverage using Jest and React Testing Library",
        "Participated in code reviews and contributed to team documentation and best practices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Git"]
    },
    {
      id: 2,
      role: "Research Assistant",
      organization: "University AI Lab",
      location: "Boston, MA",
      startDate: "2024-09-01",
      endDate: "Present",
      description: "Supporting research in machine learning applications for natural language processing. Assisting in data collection, model training, and experimental analysis under faculty supervision.",
      responsibilities: [
        "Preprocessed and analyzed large datasets (100K+ samples) for NLP research projects",
        "Implemented machine learning models using Python, TensorFlow, and scikit-learn",
        "Conducted literature reviews and documented research findings in technical reports",
        "Presented research progress at weekly lab meetings and contributed to paper submissions"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Jupyter"]
    },
    {
      id: 3,
      role: "Web Development Volunteer",
      organization: "Local Non-Profit Organization",
      location: "Remote",
      startDate: "2024-01-01",
      endDate: "2024-05-31",
      description: "Redesigned and developed the organization\'s website to improve accessibility and user engagement. Worked directly with stakeholders to understand requirements and deliver solutions.",
      responsibilities: [
        "Built a fully responsive website using React and modern web technologies",
        "Integrated content management system for easy updates by non-technical staff",
        "Improved website accessibility to meet WCAG 2.1 AA standards",
        "Increased user engagement by 45% through improved UX design and performance optimization"
      ],
      technologies: ["React", "JavaScript", "CSS", "HTML", "Netlify"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      startDate: "2022-09-01",
      endDate: "Present",
      gpa: "3.8/4.0",
      description: "Pursuing a comprehensive education in computer engineering with focus on software development, algorithms, and system design. Active member of the Computer Science Club and participant in hackathons.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning",
        "Artificial Intelligence"
      ],
      achievements: [
        "Dean\'s List for 4 consecutive semesters",
        "Winner of University Hackathon 2024",
        "President of Computer Science Student Association",
        "Published research paper in undergraduate research symposium"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "2025-11-15",
      expiryDate: "2028-11-15",
      status: "completed",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
      credentialUrl: "https://aws.amazon.com/verification",
      certificateId: "AWS-CCP-2025-12345"
    },
    {
      id: 2,
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta via Coursera",
      issueDate: "2025-08-20",
      status: "completed",
      description: "Comprehensive program covering HTML, CSS, JavaScript, React, and modern front-end development practices.",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX"],
      credentialUrl: "https://coursera.org/verify/professional-cert",
      certificateId: "META-FE-2025-67890"
    },
    {
      id: 3,
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google via Coursera",
      issueDate: "2025-05-10",
      status: "completed",
      description: "Learned data analysis skills including data cleaning, visualization, and analysis using spreadsheets, SQL, R, and Tableau.",
      skills: ["Data Analysis", "SQL", "Data Visualization", "R Programming"],
      credentialUrl: "https://coursera.org/verify/professional-cert",
      certificateId: "GOOGLE-DA-2025-11223"
    },
    {
      id: 4,
      name: "Machine Learning Specialization",
      issuer: "Stanford University via Coursera",
      issueDate: "2024-12-01",
      status: "in-progress",
      description: "Currently learning supervised learning, unsupervised learning, and best practices in machine learning.",
      skills: ["Machine Learning", "Python", "Neural Networks", "Deep Learning"]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Place - University Hackathon 2024",
      organization: "MIT Computer Science Department",
      date: "2024-11-15",
      type: "competition",
      description: "Led a team of 4 students to develop an AI-powered study assistant application that won first place among 50+ competing teams.",
      details: [
        "Developed full-stack application in 24 hours using React and Python",
        "Implemented natural language processing for intelligent study recommendations",
        "Presented solution to panel of industry judges and faculty members"
      ],
      link: "https://hackathon.mit.edu/2024/winners"
    },
    {
      id: 2,
      title: "Dean\'s List Recognition",
      organization: "Massachusetts Institute of Technology",
      date: "2025-05-20",
      type: "academic",
      description: "Achieved Dean's List honors for maintaining GPA above 3.7 for four consecutive semesters while taking challenging coursework.",
      details: [
        "Maintained 3.8+ GPA across all semesters",
        "Completed advanced courses in algorithms and machine learning",
        "Balanced academics with leadership roles and extracurricular activities"
      ]
    },
    {
      id: 3,
      title: "Outstanding Undergraduate Research Award",
      organization: "University AI Research Lab",
      date: "2025-04-10",
      type: "recognition",
      description: "Recognized for exceptional contributions to natural language processing research project and publication in undergraduate research symposium.",
      details: [
        "Co-authored research paper on sentiment analysis techniques",
        "Presented findings at regional undergraduate research conference",
        "Contributed to open-source NLP toolkit used by research community"
      ]
    },
    {
      id: 4,
      title: "Published Research Paper",
      organization: "Undergraduate Research Symposium",
      date: "2025-03-15",
      type: "publication",
      description: "Co-authored and published research paper on machine learning applications in sentiment analysis at the annual undergraduate research symposium.",
      details: [
        "Conducted comprehensive literature review and experimental analysis",
        "Achieved 87% accuracy in sentiment classification task",
        "Paper selected for oral presentation at symposium"
      ],
      link: "https://research.mit.edu/symposium/2025"
    }
  ];

  const filteredSkills = useMemo(() => {
    return skills?.filter(skill => {
      const categoryMatch = selectedCategory === 'all' || skill?.category === selectedCategory;
      const proficiencyMatch = selectedProficiency === 'all' || skill?.proficiency === selectedProficiency;
      return categoryMatch && proficiencyMatch;
    });
  }, [selectedCategory, selectedProficiency]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedProficiency('all');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Resume_Engineering_Student.pdf';
    document.body?.appendChild(link);
    link?.click();
    document.body?.removeChild(link);
  };

  const tabs = [
    { id: 'skills', label: 'Technical Skills', icon: 'Code2' },
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' }
  ];

  return (
    <>
      <Helmet>
        <title>Skills & Experience - EngiPortfolio</title>
        <meta name="description" content="Explore my technical skills, work experience, education, certifications, and achievements in software engineering and computer science." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavigation />

        <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
          <div className="mb-8 md:mb-12">
            <div className="mb-6 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
              <div>
                <h1 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  Skills & Experience
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                  A comprehensive overview of my technical capabilities, professional experience, and academic achievements
                </p>
              </div>
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
                className="w-full md:w-auto"
              >
                Download Resume
              </Button>
            </div>

            <div className="overflow-x-auto">
              <div className="flex space-x-2 border-b border-border">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex flex-shrink-0 items-center space-x-2 border-b-2 px-4 py-3 font-heading text-sm font-medium transition-smooth md:px-6 md:text-base ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:border-muted hover:text-foreground'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} strokeWidth={2} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeTab === 'skills' && (
            <div>
              <SkillFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedProficiency={selectedProficiency}
                onProficiencyChange={setSelectedProficiency}
                onClearFilters={handleClearFilters}
              />

              {filteredSkills?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                  {filteredSkills?.map((skill) => (
                    <SkillCard key={skill?.id} skill={skill} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-16 text-center">
                  <Icon name="Search" size={48} className="mb-4 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    No skills found
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experiences?.map((experience) => (
                <ExperienceCard key={experience?.id} experience={experience} />
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {education?.map((edu) => (
                <EducationCard key={edu?.id} education={edu} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              {certifications?.map((cert) => (
                <CertificationCard key={cert?.id} certification={cert} />
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              {achievements?.map((achievement) => (
                <AchievementCard key={achievement?.id} achievement={achievement} />
              ))}
            </div>
          )}
        </main>

        <footer className="border-t border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="caption text-center text-muted-foreground md:text-left">
                © {new Date()?.getFullYear()} EngiPortfolio. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-smooth hover:text-foreground"
                  aria-label="GitHub Profile"
                >
                  <Icon name="Github" size={20} strokeWidth={2} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-smooth hover:text-foreground"
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="Linkedin" size={20} strokeWidth={2} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-muted-foreground transition-smooth hover:text-foreground"
                  aria-label="Email Contact"
                >
                  <Icon name="Mail" size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SkillsExperience;