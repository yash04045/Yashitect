import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and a mission to build AI for the welfare of society
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6 fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                "I lock onto goals and achieve them by any means necessary. I'm driven by curiosity 
                and want to build AI for the welfare of society."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With strong foundations in Python, Machine Learning, and Java DSA, I am constantly 
                exploring how AI is shaping the world and how I can be part of it. Every challenge 
                is an opportunity to learn and grow.
              </p>
            </div>

            {/* Personal Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">Determined achiever</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Purpose-Driven</h4>
                  <p className="text-sm text-muted-foreground">AI for society</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Timeline */}
          <div className="space-y-6 fade-in">
            <Card className="project-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Education</h3>
                    <div className="mt-4 space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">B.Tech in Computer Science & Engineering</h4>
                        <p className="text-primary text-sm font-medium">AI & ML Specialization</p>
                        <p className="text-muted-foreground text-sm">VIT Bhopal</p>
                        <p className="text-muted-foreground text-sm">Graduating 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="project-card border-primary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Mission Statement</h3>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "To leverage artificial intelligence and machine learning to create solutions 
                  that address real-world challenges and contribute to societal welfare through 
                  innovative technology."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;