import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainNavigation from '../../components/UI/MainNavigation';
import ProjectNavigation from '../../components/UI/ProjectNavigation';
import ProjectHeader from './components/ProjectHeader';
import ImageGallery from './components/ImageGallery';
import ProjectDescription from './components/ProjectDescription';
import TechnicalImplementation from './components/TechnicalImplementation';
import ProjectActions from './components/ProjectActions';
import Achievements from './components/Achievements';
import RelatedProjects from './components/RelatedProjects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const allProjects = [
  {
    id: "smart-irrigation-system",
    title: "Smart Irrigation System",
    tagline: "IoT-based automated irrigation solution for precision agriculture",
    duration: "Aug 2025 - Dec 2025",
    teamSize: "4 Members",
    role: "Lead Developer",
    status: "Completed",
    category: "IoT & Embedded Systems",
    technologies: ["Arduino", "ESP32", "Python", "MQTT", "Firebase", "React", "TensorFlow"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17db12551-1767182945395.png",
    imageAlt: "Modern agricultural field with automated irrigation system showing water sprinklers and sensor equipment under clear blue sky",
    description: "Developed an intelligent irrigation management system using IoT sensors and machine learning to optimize water usage in agricultural fields",
    problemStatement: `Traditional irrigation methods lead to significant water wastage and inefficient crop management. Farmers struggle with:\n\n• Manual monitoring of soil moisture levels across large fields\n• Inability to predict optimal watering schedules\n• Excessive water consumption leading to increased costs\n• Lack of real-time data for informed decision-making\n• Environmental impact due to water resource depletion`,
    solutionApproach: `Designed and implemented a comprehensive IoT-based solution that combines hardware sensors with intelligent software:\n\n• Deployed soil moisture, temperature, and humidity sensors across the field\n• Created a centralized monitoring dashboard for real-time data visualization\n• Implemented machine learning algorithms to predict optimal irrigation schedules\n• Developed automated valve control system for precise water distribution\n• Integrated weather API for rainfall prediction and schedule adjustment`,
    challenges: [
    "Ensuring reliable wireless communication in remote agricultural areas with limited connectivity",
    "Developing power-efficient sensor nodes that could operate for extended periods on battery power",
    "Creating accurate ML models with limited historical agricultural data from the region",
    "Implementing robust error handling for sensor failures and network interruptions",
    "Designing weatherproof enclosures for electronic components in harsh outdoor conditions"],

    outcomes: [
    { value: "45%", label: "Water Savings" },
    { value: "32%", label: "Cost Reduction" },
    { value: "98.5%", label: "System Uptime" }],

    architecture: `The system follows a three-tier architecture:\n\n1. Sensor Layer: ESP32-based nodes with soil moisture, temperature, and humidity sensors distributed across the field\n\n2. Communication Layer: MQTT protocol for lightweight, reliable data transmission to cloud infrastructure\n\n3. Application Layer: React-based web dashboard with Python backend for data processing, ML predictions, and automated control`,
    algorithms: [
    "Random Forest Regression for soil moisture prediction based on weather patterns and historical data",
    "K-Means Clustering to identify field zones with similar irrigation requirements",
    "Time Series Analysis using ARIMA for forecasting water demand",
    "PID Control Algorithm for precise valve actuation and water flow regulation"],

    integration: `Integrated multiple technologies to create a seamless end-to-end solution:\n\n• Firebase Realtime Database for sensor data storage and synchronization\n• OpenWeatherMap API for weather forecasting and rainfall prediction\n• Twilio API for SMS alerts to farmers about critical conditions\n• Google Cloud Platform for ML model training and deployment`,
    codeSnippets: [
    {
      title: "Sensor Data Collection (Arduino/ESP32)",
      code: `#include <WiFi.h>
#include <PubSubClient.h>
#include "DHT.h"

#define SOIL_PIN 34
#define DHT_PIN 4
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  dht.begin();
  connectWiFi();
  client.setServer(mqtt_server, 1883);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  int soilMoisture = analogRead(SOIL_PIN);
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  String payload = createJSON(soilMoisture, temperature, humidity);
  client.publish("irrigation/sensor/data", payload.c_str());
  
  delay(60000); // Send data every minute
}`
    },
    {
      title: "ML Prediction Model (Python)",
      code: `import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

class IrrigationPredictor:
    def __init__(self):
        self.model = RandomForestRegressor(
            n_estimators=100,
            max_depth=10,
            random_state=42
        )
    
    def train(self, X, y):
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        self.model.fit(X_train, y_train)
        score = self.model.score(X_test, y_test)
        return score
    
    def predict_irrigation_need(self, soil_moisture, temperature, 
                                humidity, rainfall_forecast):
        features = np.array([[soil_moisture, temperature, 
                            humidity, rainfall_forecast]])
        return self.model.predict(features)[0]`
    }],

    liveUrl: "https://smart-irrigation-demo.example.com",
    githubUrl: "https://github.com/username/smart-irrigation-system",
    documentationUrl: "https://example.com/docs/smart-irrigation.pdf",
    achievements: [
    {
      type: "award",
      title: "Best Innovation Award",
      description: "Received first prize at the National Engineering Project Competition 2025",
      issuer: "IEEE Student Branch",
      date: "Dec 2025"
    },
    {
      type: "metric",
      title: "Field Deployment Success",
      description: "Successfully deployed across 50 acres of farmland with measurable impact",
      issuer: "Local Agricultural Department",
      date: "Nov 2025"
    },
    {
      type: "recognition",
      title: "Featured in Tech Magazine",
      description: "Project featured in AgriTech Innovation Magazine for sustainable farming solutions",
      issuer: "AgriTech Innovation",
      date: "Jan 2026"
    }]

  },
  {
    id: "ai-powered-healthcare",
    title: "AI-Powered Healthcare Assistant",
    tagline: "Machine learning application for early disease detection",
    duration: "Jan 2025 - May 2025",
    teamSize: "3 Members",
    role: "ML Engineer",
    status: "Completed",
    category: "Artificial Intelligence",
    technologies: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b7e96ff-1764643783122.png",
    imageAlt: "Modern medical laboratory with advanced diagnostic equipment, computer screens displaying medical data analysis, and healthcare technology setup",
    description: "Built a machine learning system for early detection of diseases using medical imaging and patient data analysis"
  },
  {
    id: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Tracker",
    tagline: "Transparent and secure supply chain management system",
    duration: "Sep 2024 - Dec 2024",
    teamSize: "5 Members",
    role: "Blockchain Developer",
    status: "Completed",
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "Web3.js", "Node.js", "MongoDB"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d870f538-1767803333814.png",
    imageAlt: "Global logistics network visualization showing interconnected supply chain routes with shipping containers and digital blockchain nodes",
    description: "Developed a decentralized application for tracking products through the supply chain using blockchain technology"
  }];


  const currentProject = allProjects?.find((p) => p?.id === id);

  useEffect(() => {
    if (!currentProject) {
      navigate('/project-portfolio');
    }
  }, [currentProject, navigate]);

  if (!currentProject) {
    return null;
  }

  const galleryImages = [
  {
    url: currentProject?.image,
    alt: currentProject?.imageAlt
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb36cb23-1766980569781.png",
    alt: "Close-up view of soil moisture sensor embedded in agricultural field with visible electronic components and wiring"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_11dd974ca-1767871528111.png",
    alt: "Real-time monitoring dashboard on laptop screen displaying irrigation system data with graphs and sensor readings"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1e962f7aa-1765891691342.png",
    alt: "Automated irrigation valve system with electronic control unit mounted on water pipeline in agricultural setting"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_18dfa5d2b-1767554752590.png",
    alt: "Agricultural field with rows of crops showing efficient water distribution through smart irrigation system"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3e4c0c8-1766525527117.png",
    alt: "Engineering team members collaborating on project development with laptops and technical diagrams on table"
  }];


  const relatedProjects = allProjects?.filter((p) => p?.id !== currentProject?.id)?.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <ProjectNavigation currentProject={currentProject} allProjects={allProjects} />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <ProjectHeader project={currentProject} />
        <ImageGallery images={galleryImages} />
        <ProjectDescription project={currentProject} />
        <TechnicalImplementation project={currentProject} />
        <ProjectActions project={currentProject} />
        <Achievements achievements={currentProject?.achievements} />
        <RelatedProjects projects={relatedProjects} />
      </main>
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="caption text-center text-muted-foreground md:text-left">
              &copy; {new Date()?.getFullYear()} EngiPortfolio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-smooth hover:text-foreground"
                aria-label="GitHub">

                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-smooth hover:text-foreground"
                aria-label="LinkedIn">

                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground transition-smooth hover:text-foreground"
                aria-label="Email">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />

                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default ProjectDetails;