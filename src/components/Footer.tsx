
import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Anooshirvan Mostmand</h3>
            <p className="text-muted-foreground max-w-md">
              Energy Engineer & Data Scientist passionate about sustainable energy solutions and data-driven insights.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 items-center md:items-end">
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@anooshirvanmostmand.com" aria-label="Email"
                 className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Mail size={20} />
              </a>
              <a href="/Anooshirvan_Mostmand_CV.pdf" download aria-label="Download CV"
                 className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <FileText size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anooshirvan Mostmand. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
