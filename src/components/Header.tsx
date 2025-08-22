import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/63705677-3c8c-4218-a166-f10887d02c5a.png" 
              alt="Mobex International Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-colors">
              Achievements
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-golden transition-all duration-300 hover:shadow-glow"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;