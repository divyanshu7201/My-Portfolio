import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/UI/Button';

const FeaturedProjects = () => {
  const featuredProjects = [
  {
    id: 1,
    title: "Smart Home Automation System",
    description: "IoT-based home automation platform with voice control, mobile app integration, and energy monitoring capabilities using Raspberry Pi and Arduino.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10037bb68-1764661946287.png",
    imageAlt: "Modern smart home control panel mounted on white wall displaying temperature controls, lighting options, and security camera feeds with blue LED indicators",
    technologies: ["Python", "React Native", "MQTT", "Firebase"],
    category: "IoT",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Traffic Management",
    description: "Machine learning system for real-time traffic flow optimization using computer vision and predictive analytics to reduce congestion in urban areas.",
    image: "https://images.unsplash.com/photo-1567563549378-81212b9631e4",
    imageAlt: "Aerial view of busy urban intersection with multiple lanes of traffic, cars in motion, traffic lights visible, and pedestrian crosswalks during evening rush hour",
    technologies: ["TensorFlow", "OpenCV", "Python", "Docker"],
    category: "AI/ML",
    featured: true
  },
  {
    id: 3,
    title: "Blockchain Supply Chain Tracker",
    description: "Decentralized application for transparent supply chain management with smart contracts, real-time tracking, and automated verification processes.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f16da186-1768146282473.png",
    imageAlt: "Digital blockchain network visualization showing interconnected nodes with glowing blue lines on dark background, representing distributed ledger technology and data flow",
    technologies: ["Solidity", "Web3.js", "React", "Node.js"],
    category: "Blockchain",
    featured: true
  },
  {
    id: 4,
    title: "Healthcare Monitoring Wearable",
    description: "Wearable device prototype for continuous health monitoring with real-time alerts, data analytics, and cloud synchronization for medical professionals.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a68c556-1766577149618.png",
    imageAlt: "Close-up of modern fitness tracker wearable device on wrist showing heart rate monitor display with green LED sensors visible on black band against white background",
    technologies: ["C++", "Flutter", "AWS IoT", "PostgreSQL"],
    category: "Embedded Systems",
    featured: true
  }];


  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2">
            <Icon name="Star" size={16} className="text-accent" />
            <span className="caption font-medium text-accent">Featured Work</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Highlighted Projects
          </h2>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            A showcase of my most impactful engineering projects demonstrating technical expertise across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {featuredProjects?.map((project) =>
          <Link
            key={project?.id}
            to={`/project-details/${project?.id}`}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-elevation-2 transition-smooth hover:shadow-elevation-4">

              <div className="relative h-48 w-full overflow-hidden md:h-56 lg:h-64">
                <Image
                src={project?.image}
                alt={project?.imageAlt}
                className="h-full w-full object-cover transition-smooth group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                
                <div className="absolute right-4 top-4">
                  <span className="inline-flex items-center space-x-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    <Icon name="Award" size={12} />
                    <span>Featured</span>
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center space-x-2">
                  <span className="caption rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground">
                    {project?.category}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground transition-smooth group-hover:text-primary md:text-2xl">
                  {project?.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground md:text-base">
                  {project?.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project?.technologies?.slice(0, 3)?.map((tech, index) =>
                <span
                  key={index}
                  className="caption rounded-md bg-primary/10 px-2 py-1 font-medium text-primary">

                      {tech}
                    </span>
                )}
                  {project?.technologies?.length > 3 &&
                <span className="caption rounded-md bg-muted px-2 py-1 font-medium text-muted-foreground">
                      +{project?.technologies?.length - 3} more
                    </span>
                }
                </div>

                <div className="flex items-center space-x-2 text-sm font-medium text-primary">
                  <span>View Details</span>
                  <Icon
                  name="ArrowRight"
                  size={16}
                  className="transition-smooth group-hover:translate-x-1" />

                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="mt-12 text-center md:mt-16">
          <Link to="/project-portfolio">
            <Button
              variant="outline"
              size="lg"
              iconName="Grid3x3"
              iconPosition="right">

              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;