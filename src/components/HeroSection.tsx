
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  showScrollIndicator?: boolean;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  image, 
  imageAlt, 
  showScrollIndicator = true,
  className 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
  }, [image]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center overflow-hidden",
        className
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 bg-black/50 z-0 transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
      
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center z-[-1] transition-opacity duration-1000 transform scale-[1.01]",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundImage: `url(${image})` }}
        aria-label={imageAlt}
      />
      
      <div className="container mx-auto px-6 z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToContent}
            className="rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white"
          >
            <ChevronDown className="h-5 w-5 animate-pulse" />
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
