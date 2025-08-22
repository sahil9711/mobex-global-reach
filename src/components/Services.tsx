import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, CreditCard, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Device Trading",
      description: "Comprehensive mobile device trading services with premium quality assurance and competitive pricing.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Logistics Network", 
      description: "Worldwide shipping and logistics solutions ensuring fast, secure delivery to over 50 countries.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Team Support",
      description: "Dedicated on-site team in Dubai providing 24/7 support and consultation for all your trading needs.",
      gradient: "from-pink-500 to-orange-600"
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Financial Solutions",
      description: "Comprehensive financial system with flexible payment options, credit facilities, and secure transactions.",
      gradient: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Mobex Level
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your mobile technology trading experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-golden transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;