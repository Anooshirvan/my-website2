
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md",
        scrolled ? "shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold tracking-tight text-primary transition-colors animate-fadeIn">
          Anooshirvan Mostmand
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={({ isActive }) => 
            cn("nav-link text-foreground/80 hover:text-foreground transition-colors", 
              isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            cn("nav-link text-foreground/80 hover:text-foreground transition-colors", 
              isActive ? "active" : "")}>
            Projects
          </NavLink>
          <NavLink to="/academia" className={({ isActive }) => 
            cn("nav-link text-foreground/80 hover:text-foreground transition-colors", 
              isActive ? "active" : "")}>
            Academia
          </NavLink>
          <a href="/Anooshirvan_Mostmand_CV.pdf" download>
            <Button variant="outline" className="flex items-center gap-2 group">
              <Download size={16} className="group-hover:animate-pulse" />
              <span>CV</span>
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col pt-24 px-6 md:hidden transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center text-lg">
          <NavLink 
            to="/" 
            className="w-full text-center py-2 border-b border-border"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className="w-full text-center py-2 border-b border-border"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/academia" 
            className="w-full text-center py-2 border-b border-border"
            onClick={() => setIsOpen(false)}
          >
            Academia
          </NavLink>
          <a 
            href="/Anooshirvan_Mostmand_CV.pdf" 
            download 
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Download size={16} />
              <span>Download CV</span>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
