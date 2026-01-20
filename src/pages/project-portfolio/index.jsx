import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import MainNavigation from '../../components/UI/MainNavigation';
import FilterControls from '../../components/ui/FilterControls';
import ProjectCard from './components/ProjectCard';
import ProjectStats from './components/ProjectStats';
import EmptyState from './components/EmptyState';

const ProjectPortfolio = () => {
  const allProjects = [
  {
    id: 1,
    title: "Smart Home Automation System",
    description: "Developed an IoT-based smart home automation system using Raspberry Pi and Arduino. The system allows users to control lights, temperature, and security cameras through a mobile application with real-time monitoring and voice command integration.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10037bb68-1764661946287.png",
    imageAlt: "Modern smart home control panel mounted on white wall displaying temperature and lighting controls with blue LED indicators",
    technologies: ["Python", "React Native", "Arduino", "MQTT", "Firebase", "TensorFlow"],
    duration: "6 months",
    teamSize: 4,
    achievements: [
    "Reduced energy consumption by 35% through intelligent automation",
    "Implemented facial recognition for enhanced security",
    "Won Best IoT Project Award at University Tech Fest 2025"],

    liveDemo: "https://smarthome-demo.example.com",
    githubRepo: "https://github.com/username/smart-home",
    date: "2025-12-15",
    status: "completed",
    category: "IoT"
  },
  {
    id: 2,
    title: "AI-Powered Medical Diagnosis Assistant",
    description: "Created a machine learning application that assists doctors in diagnosing diseases from medical images. The system uses deep learning models trained on thousands of X-ray and MRI scans to provide accurate preliminary diagnoses with confidence scores.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfc44208-1767112219634.png",
    imageAlt: "Medical professional in white coat examining digital X-ray images on large monitor screen in modern hospital diagnostic room",
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "React", "PostgreSQL"],
    duration: "8 months",
    teamSize: 3,
    achievements: [
    "Achieved 94% accuracy in disease detection",
    "Processed over 10,000 medical images during testing",
    "Published research paper in IEEE conference"],

    liveDemo: "https://medai-demo.example.com",
    githubRepo: "https://github.com/username/medical-ai",
    date: "2025-11-20",
    status: "completed",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "E-Commerce Platform with Microservices",
    description: "Built a scalable e-commerce platform using microservices architecture. The system includes user authentication, product catalog, shopping cart, payment gateway integration, and order management with real-time inventory tracking.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
    imageAlt: "Modern e-commerce website interface displayed on laptop screen showing product grid with colorful items and shopping cart icon",
    technologies: ["Node.js", "React", "MongoDB", "Docker", "Kubernetes", "Redis", "Stripe"],
    duration: "10 months",
    teamSize: 5,
    achievements: [
    "Handled 1000+ concurrent users during load testing",
    "Implemented CI/CD pipeline reducing deployment time by 70%",
    "Integrated multiple payment gateways for global transactions"],

    liveDemo: "https://ecommerce-demo.example.com",
    githubRepo: "https://github.com/username/ecommerce-platform",
    date: "2025-10-05",
    status: "completed",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Blockchain-Based Supply Chain Tracker",
    description: "Developed a blockchain solution for transparent supply chain management. The system tracks products from manufacturer to consumer, ensuring authenticity and preventing counterfeit goods through immutable ledger technology.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df567048-1764839603599.png",
    imageAlt: "Warehouse worker scanning QR code on cardboard box with digital tablet showing blockchain tracking interface with blue network visualization",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "IPFS"],
    duration: "7 months",
    teamSize: 3,
    achievements: [
    "Reduced counterfeit incidents by 85% in pilot program",
    "Deployed smart contracts on Ethereum testnet",
    "Collaborated with local businesses for real-world testing"],

    liveDemo: "https://blockchain-supply.example.com",
    githubRepo: "https://github.com/username/blockchain-supply",
    date: "2025-09-12",
    status: "completed",
    category: "Blockchain"
  },
  {
    id: 5,
    title: "Real-Time Traffic Management System",
    description: "Designed an intelligent traffic management system using computer vision and machine learning. The system analyzes traffic patterns, detects congestion, and optimizes signal timings to reduce wait times and improve traffic flow.",
    image: "https://images.unsplash.com/photo-1676036633191-ca2c6aac0b63",
    imageAlt: "Aerial view of busy urban intersection with multiple lanes of traffic and smart traffic lights with digital sensors mounted on poles",
    technologies: ["Python", "OpenCV", "YOLOv5", "Django", "PostgreSQL", "AWS"],
    duration: "9 months",
    teamSize: 4,
    achievements: [
    "Reduced average wait time by 40% in simulations",
    "Detected traffic violations with 92% accuracy",
    "Presented at National Smart Cities Conference 2025"],

    liveDemo: "https://traffic-system.example.com",
    githubRepo: "https://github.com/username/traffic-management",
    date: "2025-08-28",
    status: "completed",
    category: "Computer Vision"
  },
  {
    id: 6,
    title: "Mobile Fitness Tracking Application",
    description: "Created a comprehensive fitness tracking mobile app with workout planning, nutrition tracking, and social features. The app uses device sensors to track activities and provides personalized recommendations based on user goals.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1200d014a-1766945419790.png",
    imageAlt: "Athletic person in blue sportswear running outdoors while checking fitness tracking app on smartphone with heart rate display visible",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "TensorFlow Lite"],
    duration: "5 months",
    teamSize: 2,
    achievements: [
    "Achieved 10,000+ downloads in beta testing phase",
    "Integrated with 15+ fitness wearable devices",
    "Featured in university app development showcase"],

    liveDemo: "https://fitness-app.example.com",
    githubRepo: "https://github.com/username/fitness-tracker",
    date: "2025-07-15",
    status: "completed",
    category: "Mobile Development"
  },
  {
    id: 7,
    title: "Automated Drone Delivery System",
    description: "Engineered an autonomous drone delivery system with path planning, obstacle avoidance, and package handling capabilities. The system uses GPS navigation and computer vision for precise delivery to designated locations.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc19b318-1764868117350.png",
    imageAlt: "White quadcopter drone with attached delivery package flying against clear blue sky with GPS tracking interface overlay",
    technologies: ["ROS", "Python", "C++", "OpenCV", "Gazebo", "PX4"],
    duration: "12 months",
    teamSize: 6,
    achievements: [
    "Successfully completed 50+ test deliveries",
    "Achieved 98% delivery accuracy within 5-meter radius",
    "Won First Prize in National Robotics Competition 2025"],

    liveDemo: "https://drone-delivery.example.com",
    githubRepo: "https://github.com/username/drone-delivery",
    date: "2025-06-10",
    status: "completed",
    category: "Robotics"
  },
  {
    id: 8,
    title: "Cybersecurity Threat Detection Platform",
    description: "Built a comprehensive cybersecurity platform that monitors network traffic, detects anomalies, and identifies potential security threats in real-time. The system uses machine learning algorithms to adapt to new attack patterns.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae7b6680-1765292859257.png",
    imageAlt: "Dark computer screen displaying cybersecurity dashboard with red alert indicators, network traffic graphs, and threat detection analytics",
    technologies: ["Python", "Scikit-learn", "Elasticsearch", "Kibana", "Docker", "Kafka"],
    duration: "8 months",
    teamSize: 4,
    achievements: [
    "Detected 95% of simulated cyber attacks",
    "Reduced false positive rate to under 5%",
    "Implemented for university network security"],

    liveDemo: "https://cybersec-platform.example.com",
    githubRepo: "https://github.com/username/cybersecurity-platform",
    date: "2025-05-22",
    status: "completed",
    category: "Cybersecurity"
  },
  {
    id: 9,
    title: "Virtual Reality Campus Tour",
    description: "Developed an immersive VR application that provides virtual tours of university campus. The application includes interactive elements, 360-degree views, and information hotspots for prospective students and visitors.",
    image: "https://images.unsplash.com/photo-1685431965454-04ffbafdb406",
    imageAlt: "Person wearing black VR headset experiencing virtual reality campus tour with hand controllers in modern tech lab environment",
    technologies: ["Unity", "C#", "Blender", "Oculus SDK", "Photon", "Firebase"],
    duration: "6 months",
    teamSize: 3,
    achievements: [
    "Created virtual tours of 20+ campus buildings",
    "Received 500+ positive reviews from beta testers",
    "Adopted by admissions office for recruitment"],

    liveDemo: "https://vr-campus.example.com",
    githubRepo: "https://github.com/username/vr-campus-tour",
    date: "2025-04-18",
    status: "completed",
    category: "VR/AR"
  },
  {
    id: 10,
    title: "Renewable Energy Monitoring Dashboard",
    description: "Created a comprehensive monitoring system for renewable energy installations. The dashboard tracks solar panel efficiency, wind turbine performance, and energy storage levels with predictive analytics for maintenance scheduling.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d72eca36-1766779747355.png",
    imageAlt: "Large solar panel array installation in open field with monitoring equipment and digital dashboard display showing energy production metrics",
    technologies: ["React", "Node.js", "InfluxDB", "Grafana", "MQTT", "Python"],
    duration: "7 months",
    teamSize: 3,
    achievements: [
    "Monitored 50+ renewable energy installations",
    "Predicted equipment failures with 88% accuracy",
    "Helped optimize energy production by 25%"],

    liveDemo: "https://energy-monitor.example.com",
    githubRepo: "https://github.com/username/energy-monitoring",
    date: "2025-03-05",
    status: "completed",
    category: "Green Tech"
  },
  {
    id: 11,
    title: "Natural Language Processing Chatbot",
    description: "Developed an intelligent chatbot using advanced NLP techniques for customer service automation. The bot understands context, handles multiple languages, and provides accurate responses to complex queries with sentiment analysis.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b71551de-1766565517422.png",
    imageAlt: "Modern smartphone screen displaying AI chatbot interface with conversation bubbles and blue accent colors on white background",
    technologies: ["Python", "NLTK", "spaCy", "Transformers", "FastAPI", "Redis"],
    duration: "5 months",
    teamSize: 2,
    achievements: [
    "Achieved 91% accuracy in intent recognition",
    "Handled 1000+ conversations during testing",
    "Reduced customer service response time by 60%"],

    liveDemo: "https://nlp-chatbot.example.com",
    githubRepo: "https://github.com/username/nlp-chatbot",
    date: "2025-02-14",
    status: "completed",
    category: "AI/ML"
  },
  {
    id: 12,
    title: "Cloud-Based Document Management System",
    description: "Built a secure document management system with version control, collaborative editing, and advanced search capabilities. The system includes role-based access control and automated backup functionality.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0d4435d-1767127410448.png",
    imageAlt: "Professional office workspace with laptop displaying cloud document management interface with folder structure and file preview panels",
    technologies: ["React", "Node.js", "AWS S3", "PostgreSQL", "Elasticsearch", "Socket.io"],
    duration: "9 months",
    teamSize: 5,
    achievements: [
    "Managed 100,000+ documents in testing phase",
    "Implemented end-to-end encryption for security",
    "Deployed on AWS with 99.9% uptime"],

    liveDemo: "https://doc-management.example.com",
    githubRepo: "https://github.com/username/document-management",
    date: "2025-01-10",
    status: "completed",
    category: "Web Development"
  }];


  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const handleFilterChange = useCallback((projects) => {
    setFilteredProjects(projects);
  }, []);

  const handleClearFilters = () => {
    setFilteredProjects(allProjects);
  };

  return (
    <>
      <Helmet>
        <title>Project Portfolio - EngiPortfolio</title>
        <meta
          name="description"
          content="Explore my technical projects showcasing expertise in web development, AI/ML, IoT, blockchain, and more. View live demos and source code." />

      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavigation />

        <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Project Portfolio
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Explore my technical projects spanning various domains including web development, artificial intelligence, IoT, blockchain, and robotics. Each project demonstrates practical application of engineering principles and modern technologies.
            </p>
          </header>

          <ProjectStats projects={allProjects} />

          <FilterControls
            projects={allProjects}
            onFilterChange={handleFilterChange} />


          {filteredProjects?.length > 0 ?
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects?.map((project) =>
            <ProjectCard key={project?.id} project={project} />
            )}
            </div> :

          <EmptyState onClearFilters={handleClearFilters} />
          }
        </main>

        <footer className="border-t border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="caption text-muted-foreground">
              &copy; {new Date()?.getFullYear()} EngiPortfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>);

};

export default ProjectPortfolio;