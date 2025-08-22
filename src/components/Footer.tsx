const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/63705677-3c8c-4218-a166-f10887d02c5a.png" 
              alt="Mobex International Logo" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground max-w-sm">
              Your trusted partner in mobile technology trade. Leading the global market 
              with innovative B2B solutions and worldwide logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#achievements" className="block text-muted-foreground hover:text-primary transition-colors">
                Achievements
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>DAFZA, Dubai Airport Free Zone</p>
              <p>Dubai, United Arab Emirates</p>
              <p>info@mobexinternational.com</p>
              <p>+971569443529 / +19293301131</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Mobex International FZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;