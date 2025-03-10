
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-foreground mb-8">Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home size={16} />
                <span>Back to Home</span>
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft size={16} className="mr-2" />
              <span>Go Back</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
