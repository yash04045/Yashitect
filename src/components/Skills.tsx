import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Brain, Cpu } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90, color: 'bg-gradient-primary' },
        { name: 'Java', level: 85, color: 'bg-gradient-secondary' },
        { name: 'C++', level: 80, color: 'bg-gradient-primary' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'CNNs', level: 85, color: 'bg-gradient-primary' },
        { name: 'Computer Vision', level: 80, color: 'bg-gradient-secondary' },
        { name: 'Deep Learning', level: 75, color: 'bg-gradient-primary' },
      ]
    },
    {
      title: 'Data Structures & Algorithms',
      icon: Cpu,
      skills: [
        { name: 'DSA (Java)', level: 85, color: 'bg-gradient-secondary' },
        { name: 'Problem Solving', level: 88, color: 'bg-gradient-primary' },
        { name: 'Algorithms', level: 82, color: 'bg-gradient-secondary' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: [
        { name: 'Image Processing', level: 80, color: 'bg-gradient-primary' },
        { name: 'Model Development', level: 78, color: 'bg-gradient-secondary' },
        { name: 'Research', level: 85, color: 'bg-gradient-primary' },
      ]
    }
  ];

  const futureGoals = [
    'Advanced Neural Networks',
    'Natural Language Processing',
    'Computer Vision Systems',
    'AI Model Deployment',
    'MLOps & Production',
    'Research & Publications'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id === 'skills-section' && !animationTriggered) {
              setAnimationTriggered(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animationTriggered]);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building strong foundations while continuously learning and growing
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="project-card fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${skill.color}`}
                          style={{ 
                            width: animationTriggered ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Learning Goals */}
        <div className="fade-in">
          <Card className="project-card border-accent/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Future Learning <span className="gradient-text">Goals</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Areas I'm excited to explore and master in my AI journey
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {futureGoals.map((goal, index) => (
                  <Badge 
                    key={goal} 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-accent text-accent hover:bg-accent/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {goal}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6 inline-block px-6 py-3 bg-gradient-secondary/20 rounded-full">
                <span className="text-secondary font-medium">🚀 Coming Soon: AI Model Development Services</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;