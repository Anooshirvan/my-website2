
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Energy Consumption Forecasting",
    description: "Developed a machine learning model to predict energy consumption patterns in industrial settings, resulting in a 15% improvement in energy efficiency.",
    tags: ["Machine Learning", "Python", "Energy Optimization"],
    image: "/images/project1.jpg",
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    }
  },
  {
    title: "Renewable Energy Integration Analysis",
    description: "Conducted comprehensive analysis of integrating solar and wind energy into existing power grids, addressing issues of intermittency and storage optimization.",
    tags: ["Renewable Energy", "Data Analysis", "Energy Systems"],
    image: "/images/project2.jpg",
    links: {
      github: "https://github.com",
      other: [{ label: "Research Paper", url: "https://example.com" }]
    }
  },
  {
    title: "Power Plant Efficiency Optimization",
    description: "Created a data-driven optimization framework for combined cycle power plants, improving thermal efficiency by 3.2% while reducing emissions.",
    tags: ["Optimization", "Energy Systems", "Data Science"],
    image: "/images/project3.jpg",
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    }
  },
  {
    title: "Energy Market Price Prediction",
    description: "Built a predictive model for energy market price fluctuations using time series analysis and machine learning algorithms, achieving 92% accuracy.",
    tags: ["Time Series", "Python", "Market Analysis"],
    image: "/images/project4.jpg",
    links: {
      github: "https://github.com",
    }
  },
  {
    title: "Sustainable Building Energy Management",
    description: "Designed and implemented an IoT-based energy management system for commercial buildings, reducing energy consumption by 18% annually.",
    tags: ["IoT", "Energy Management", "Sustainability"],
    image: "/images/project5.jpg",
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    }
  },
  {
    title: "Carbon Footprint Analysis Tool",
    description: "Developed a comprehensive carbon footprint assessment tool for industrial processes, identifying key areas for emission reduction.",
    tags: ["Sustainability", "Data Visualization", "Carbon Analysis"],
    image: "/images/project6.jpg",
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    }
  }
];

const Projects = () => {
  return (
    <>
      <Navbar />
      
      <HeroSection
        title="Projects & Research"
        subtitle="Exploring sustainable energy solutions through applied research and data science"
        image="public\images\wind+plant.jpg"
        imageAlt="Energy Research Laboratory"
      />
      
      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full">
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              A collection of my work in energy systems analysis, renewable energy integration, 
              and data science applications in the energy sector. Each project represents a unique 
              challenge and solution approach.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    links={project.links}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary rounded-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-bold mb-4">Research Methodology</h2>
            <p className="text-muted-foreground mb-6">
              My approach to projects and research combines rigorous engineering principles with 
              data-driven analysis. I focus on:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Data Collection & Analysis</h3>
                <p className="text-muted-foreground">
                  Utilizing comprehensive data collection methods and advanced analytical techniques to 
                  extract meaningful insights from complex energy systems.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">System Modeling & Simulation</h3>
                <p className="text-muted-foreground">
                  Developing detailed system models and simulations to predict performance, identify 
                  optimization opportunities, and test innovative solutions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Interdisciplinary Collaboration</h3>
                <p className="text-muted-foreground">
                  Working across disciplines to integrate perspectives from engineering, computer science, 
                  economics, and environmental science.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Practical Implementation</h3>
                <p className="text-muted-foreground">
                  Focusing on solutions that can be implemented in real-world settings, with attention to 
                  technical feasibility, economic viability, and sustainability.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
