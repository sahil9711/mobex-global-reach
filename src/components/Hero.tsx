import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
      
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroDevices} 
          alt="Premium mobile devices"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  MOBEX
                </span>
                <br />
                <span className="text-foreground">
                  INTERNATIONAL
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Your trusted partner in mobile technology trade
              </p>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Leading the global mobile technology trading market with innovative B2B solutions, 
                worldwide logistics, and premium financial systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-golden transition-all duration-300 hover:shadow-glow"
              >
                Explore Our Platform
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-1 gap-6 max-w-sm">
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-golden">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  200K+
                </div>
                <div className="text-muted-foreground mt-2">
                  Devices traded annually
                </div>
              </div>
              
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-golden">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-muted-foreground mt-2">
                  Global partners
                </div>
              </div>
              
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-golden">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-muted-foreground mt-2">
                  Years of excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;