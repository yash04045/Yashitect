import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Leaf, Heart, GamepadIcon } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'HarvestHub: AI-Driven Agricultural Insights',
      description: 'Comprehensive agricultural platform using CNN for disease detection, crop recommendation, and yield prediction to help farmers make data-driven decisions.',
      technologies: ['Python', 'CNN', 'Computer Vision', 'Image Processing', 'Machine Learning'],
      features: [
        'Disease detection in crop images',
        'Intelligent crop recommendation system',
        'Yield prediction algorithms',
        'Farmer-friendly interface'
      ],
      icon: Leaf,
      status: 'Featured',
      impact: 'Helping farmers optimize crop yields',
      gradient: 'bg-gradient-secondary',
      sourceCodeUrl: 'https://github.com/yash04045/Harvesthub-AI-Driven-Agricultural-Insight',
      readmeUrl: 'https://github.com/yash04045/Harvesthub-AI-Driven-Agricultural-Insight/blob/main/README.md'
    },
    {
      title: 'Breast Cancer Detection Using CNN',
      description: 'Deep learning model for early detection of breast cancer from mammogram images with 87% accuracy, designed for clinical assistance.',
      technologies: ['Python', 'CNN', 'Deep Learning', 'Medical Imaging', 'TensorFlow'],
      features: [
        '87% detection accuracy',
        'Automated mammogram analysis',
        'Early stage cancer detection',
        'Clinical deployment ready'
      ],
      icon: Heart,
      status: 'Research',
      impact: 'Advancing healthcare through AI',
      gradient: 'bg-gradient-primary',
      futureScope: 'Multi-modal imaging integration',
      sourceCodeUrl: 'https://github.com/yash04045/Breast-Cancer-Detection/tree/master/notebooks',
      readmeUrl: 'https://github.com/yash04045/Breast-Cancer-Detection/blob/master/README.md'
    },
    {
      title: 'Hand Gesture Controlled Snake Game',
      description: 'Interactive gaming experience using computer vision to detect hand movements for controlling the classic Snake game without traditional input devices.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Real-time Processing', 'Game Development'],
      features: [
        'Real-time hand tracking',
        'Gesture-based controls',
        'Smooth gameplay experience',
        'Computer vision integration'
      ],
      icon: GamepadIcon,
      status: 'Demo Ready',
      impact: 'Showcasing CV applications in gaming',
      gradient: 'bg-gradient-primary',
      sourceCodeUrl: 'https://github.com/yash04045/Gesture-Snake',
      readmeUrl: 'https://github.com/yash04045/Gesture-Snake/blob/main/README.md'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building AI solutions that make a real difference in the world
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Project Icon & Status */}
                  <div className={`p-8 relative overflow-hidden ${project.title === 'HarvestHub: AI-Driven Agricultural Insights' || project.title === 'Breast Cancer Detection Using CNN' || project.title === 'Hand Gesture Controlled Snake Game' ? '' : project.gradient}`}>
                    {(project.title === 'HarvestHub: AI-Driven Agricultural Insights' || project.title === 'Breast Cancer Detection Using CNN' || project.title === 'Hand Gesture Controlled Snake Game') && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 filter brightness-100"
                        style={{ backgroundImage: `url(${project.title === 'HarvestHub: AI-Driven Agricultural Insights' ? '/src/assets/harvest-background.jpg' : project.title === 'Breast Cancer Detection Using CNN' ? '/src/assets/breast-cancer-background.jpg' : '/src/assets/snake-game-background.jpg'})` }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <project.icon className="h-8 w-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.impact}</p>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 border border-white/20 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 border border-white/20 rounded-full transform -translate-x-12 translate-y-12"></div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        
                        {project.futureScope && (
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                            <p className="text-sm text-accent">
                              <span className="font-semibold">Future Scope:</span> {project.futureScope}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4">
                          <Button 
                            size="sm" 
                            className="bg-gradient-primary hover:bg-gradient-primary/90"
                            asChild={true}
                          >
                            <a href={project.readmeUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Details
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            asChild={true}
                          >
                            <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <Card className="project-card border-primary/30 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in <span className="gradient-text">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always excited to work on innovative AI projects that can make a positive impact. 
                Let's build something amazing together!
              </p>
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
