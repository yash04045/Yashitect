import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import SimpleParticleBackground from './SimpleParticleBackground';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Engineer. Researcher. AI Dreamer.';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('scrollToSection called with:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust this offset according to your fixed header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log('Scrolling to:', y);
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.log('Element not found for id:', sectionId);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simple Particle Background */}
      <SimpleParticleBackground />
      
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Geometric background elements with motion */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-primary"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-24 h-24 border border-accent"
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-16 h-16 border border-secondary"
          animate={{ 
            y: [0, -20, 0],
            rotate: 45
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Hello, I'm
                </span>
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block">Yash</span>
                <span className="block gradient-text">Singh</span>
              </motion.h1>
              
              <div className="h-8">
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Passionate about AI and endlessly curious about how things work under the hood. I’m someone who dives deep, learns fast, and doesn't back off from a challenge. For me, technology isn't just about code — it's about creating impact, solving real problems, and staying locked in on a goal until it’s done. I believe in building with purpose, learning with hunger, and always chasing what’s next.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="glow-on-hover bg-gradient-primary hover:bg-gradient-primary/90"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <button
                type="button"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md px-6 py-3 text-lg font-medium transition-colors duration-200"
                onClick={() => {
                  console.log("Let's Connect button clicked");
                  scrollToSection('contact');
                }}
              >
                Let's Connect
              </button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV */}
              {/* </Button> */}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a 
                href="mailto:yashsinghss047@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://i.postimg.cc/NMBpL9LS/Whats-App-Image-2025-07-24-at-13-01-41-1026f006.jpg" 
                  alt="Yash Singh" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements with enhanced animation */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  x: { duration: 3, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <span className="text-xs font-bold text-secondary-foreground">ML</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator with enhanced animation */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
