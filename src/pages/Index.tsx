
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <>
      <Navbar />
      
      <HeroSection
        title="Energy Engineer & Data Scientist"
        subtitle="Dedicated to sustainable energy solutions and data-driven insights"
        image="public\images\plant.jpg"
        imageAlt="Combined Power Plant"
      />
      
      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full">
                <span className="text-sm font-medium">About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Anooshirvan Mostmand</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm an Energy Engineer and Data Scientist with expertise in energy systems, 
                renewable energy integration, and data-driven solutions. With a background in 
                Mechanical Engineering and an MSc in Energy and Nuclear Engineering, I combine 
                technical knowledge with analytical skills to address complex energy challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My work focuses on optimizing energy systems, reducing environmental impact, 
                and leveraging data science to enhance decision-making in the energy sector. 
                I'm passionate about sustainable solutions and innovative approaches to energy 
                efficiency.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="public\Anooshirvan_Mostmand_CV.pdf" download>
                  <Button className="group">
                    <Download className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Download CV
                  </Button>
                </a>
                <a href="mailto:anooshirvan.mostmand@gmail.com">
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary blur-lg"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src="public\images\Anoosh2.jpg" 
                  alt="Anooshirvan Mostmand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
        
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full">
              <span className="text-sm font-medium">Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Areas of Specialization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Energy Systems Analysis",
                  description: "Specialized in the analysis and optimization of complex energy systems, including thermal plants, renewable integration, and hybrid solutions."
                },
                {
                  title: "Data Science & Machine Learning",
                  description: "Expert in applying data science techniques to energy problems, including predictive maintenance, energy forecasting, and optimization algorithms."
                },
                {
                  title: "Renewable Energy Integration",
                  description: "Focused on solutions for effective integration of renewable energy sources into existing grids and energy systems."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border shadow-sm transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
          >
            <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full">
              <span className="text-sm font-medium">Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm always open to discussing new projects, opportunities, or collaborations. 
                  Feel free to reach out through any of the channels below.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:anooshirvan.mostmand@gmail.com" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@anooshirvanmostmand.com</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/anooshiravan-mostmand/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Anooshirvan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently focused on research and projects related to energy transition, machine 
                  learning applications in energy optimization, and innovative solutions for sustainable energy systems.
                </p>
                <p className="text-muted-foreground">
                  If you're working on similar areas or have interesting challenges in these fields, 
                  I'd be particularly interested in connecting.
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

export default Index;
