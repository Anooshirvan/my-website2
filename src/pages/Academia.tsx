
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Calendar, School, BookOpen, Award } from 'lucide-react';

const academicProjects = [
  {
    title: "Thermal Performance Analysis of Combined Cycle Power Plants",
    description: "Master's thesis focused on improving the thermal efficiency of combined cycle power plants through advanced modeling techniques and optimization algorithms.",
    tags: ["MSc Project", "Thermal Systems", "Optimization"],
    image: "/images/academic1.jpg",
    links: {
      other: [{ label: "Research Paper", url: "https://example.com" }]
    }
  },
  {
    title: "Renewable Energy Integration in Microgrids",
    description: "Research project examining the technical and economic challenges of integrating various renewable energy sources into isolated microgrids.",
    tags: ["Renewable Energy", "Microgrids", "Economic Analysis"],
    image: "/images/academic2.jpg",
    links: {
      other: [{ label: "Publication", url: "https://example.com" }]
    }
  },
  {
    title: "Energy Storage Solutions for Grid Stability",
    description: "Investigated various energy storage technologies and their application in enhancing grid stability with high penetration of renewable energy sources.",
    tags: ["Energy Storage", "Grid Stability", "System Analysis"],
    image: "/images/academic3.jpg",
    links: {
      other: [{ label: "Conference Paper", url: "https://example.com" }]
    }
  },
  {
    title: "Computational Fluid Dynamics for Heat Exchanger Design",
    description: "Bachelor's research project applying CFD techniques to optimize heat exchanger designs for improved efficiency and reduced pressure drop.",
    tags: ["BSc Project", "CFD", "Heat Transfer"],
    image: "/images/academic4.jpg",
    links: {}
  }
];

const Academia = () => {
  return (
    <>
      <Navbar />
      
      <HeroSection
        title="Academic Background"
        subtitle="Education, research, and academic contributions in energy engineering"
        image="public\images\Politecnico-di-Torino.jpg"
        imageAlt="University Campus"
      />
      
      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full">
              <span className="text-sm font-medium">Education</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Academic Journey</h2>
            
            <div className="space-y-8">
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className="rounded-full p-2 bg-primary/10">
                    <School className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>MSc in Energy and Nuclear Engineering</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      2018 - 2020
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Completed Master's degree with specialization in energy systems optimization and thermal plants engineering. 
                    Thesis focused on improving efficiency of combined cycle power plants through advanced modeling and optimization techniques.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Advanced courses in thermal systems engineering, renewable energy integration, and energy economics</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Research assistant for department projects on energy storage technologies</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Graduated with honors, thesis received departmental recognition</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className="rounded-full p-2 bg-primary/10">
                    <School className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>BSc in Mechanical Engineering</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      2014 - 2018
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Bachelor's degree with focus on thermodynamics, fluid mechanics, and mechanical design. 
                    Senior project involved CFD analysis for heat exchanger optimization.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Core curriculum in mechanical engineering principles, thermal sciences, and engineering mathematics</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Elective courses in renewable energy systems and computational methods</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Member of engineering society, participated in multiple design competitions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <span className="text-sm font-medium">Research</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Academic Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Selected research projects from my academic career, focusing on energy systems 
              optimization, renewable energy integration, and thermal engineering.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicProjects.map((project, index) => (
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
                    isAcademic={true}
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
          >
            <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full">
              <span className="text-sm font-medium">Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications & Awards</h2>
            
            <Tabs defaultValue="certificates" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger value="certificates">Certifications</TabsTrigger>
                <TabsTrigger value="awards">Awards & Recognition</TabsTrigger>
              </TabsList>
              
              <TabsContent value="certificates" className="space-y-6">
                {[
                  {
                    title: "Data Science for Energy Applications",
                    issuer: "Stanford Online",
                    date: "2021",
                    description: "Advanced certification covering machine learning applications in energy systems"
                  },
                  {
                    title: "Renewable Energy System Design",
                    issuer: "TU Delft",
                    date: "2020",
                    description: "Comprehensive course on designing and integrating renewable energy systems"
                  },
                  {
                    title: "Energy Efficiency Analysis",
                    issuer: "Energy Institute",
                    date: "2019",
                    description: "Professional certification for conducting energy efficiency audits and analyses"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 border border-border rounded-lg bg-card"
                  >
                    <div className="rounded-full p-2 bg-primary/10 shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                      <p className="mt-2 text-sm">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
              
              <TabsContent value="awards" className="space-y-6">
                {[
                  {
                    title: "Outstanding Research Award",
                    issuer: "Department of Energy Engineering",
                    date: "2020",
                    description: "Awarded for master's thesis work on thermal efficiency optimization"
                  },
                  {
                    title: "Energy Innovation Scholarship",
                    issuer: "National Energy Foundation",
                    date: "2019",
                    description: "Competitive scholarship for graduate research in sustainable energy"
                  },
                  {
                    title: "Best Student Paper",
                    issuer: "International Conference on Energy Systems",
                    date: "2018",
                    description: "Recognition for research paper on microgrid optimization"
                  }
                ].map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 border border-border rounded-lg bg-card"
                  >
                    <div className="rounded-full p-2 bg-primary/10 shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">{award.issuer} • {award.date}</p>
                      <p className="mt-2 text-sm">{award.description}</p>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Academia;
