import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Coffee, Lightbulb } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Trophy,
      value: '87%',
      label: 'Model Accuracy',
      description: 'Breast Cancer Detection',
      color: 'text-primary'
    },
    {
      icon: Lightbulb,
      value: '3+',
      label: 'AI Projects',
      description: 'Innovative Solutions',
      color: 'text-secondary'
    },
    {
      icon: Coffee,
      value: '500+',
      label: 'Hours Coding',
      description: 'Learning & Building',
      color: 'text-accent'
    },
    {
      icon: Users,
      value: '2026',
      label: 'Graduation Year',
      description: 'VIT Bhopal',
      color: 'text-orange-accent'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-r from-muted/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card className="project-card text-center h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-bold gradient-text mb-1"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.1) + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;