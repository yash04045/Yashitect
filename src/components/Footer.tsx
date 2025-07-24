import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">YS</span>
              <span className="text-lg font-semibold">Yash Singh</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              AI Engineer passionate about building intelligent systems that serve society. 
              Always ready for the next challenge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:yashsinghss047@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">yashsinghss047@gmail.com</span>
              </a>
              <div className="flex space-x-3">
                <a 
                  href="#"
                  className="w-8 h-8 border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#"
                  className="w-8 h-8 border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Yash Singh. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and curiosity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;