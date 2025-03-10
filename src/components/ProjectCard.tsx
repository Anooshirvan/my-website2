
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
    other?: { label: string; url: string }[];
  };
  className?: string;
  isAcademic?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  links,
  className,
  isAcademic = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "project-card h-full flex flex-col",
        isHovered ? "shadow-lg" : "shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative overflow-hidden h-52">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${image})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant={isAcademic ? "secondary" : "default"} className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl transition-colors">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
      
      {links && (
        <CardFooter className="flex flex-wrap gap-2 pt-2">
          {links.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </Button>
          )}
          
          {links.demo && (
            <Button variant="default" size="sm" asChild>
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink size={16} />
                <span>View Project</span>
              </a>
            </Button>
          )}
          
          {links.other && links.other.map((link, index) => (
            <Button key={index} variant="outline" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink size={16} />
                <span>{link.label}</span>
              </a>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
