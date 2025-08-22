import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "50K+",
      label: "Devices Traded",
      description: "Successfully facilitated trading of over 50,000 mobile devices in the last year"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "4X",
      label: "Team Growth",
      description: "Quadrupled our expert team size to better serve our growing global client base"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "100+",
      label: "New Partners",
      description: "Established partnerships with 100+ new suppliers and distributors worldwide"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "25+",
      label: "New Markets",
      description: "Expanded our reach to 25 new international markets across 4 continents"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our impressive milestones achieved in the last year
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-golden transition-all duration-500 group"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto text-primary-foreground shadow-golden group-hover:shadow-glow transition-all duration-300">
                  {achievement.icon}
                </div>
                
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {achievement.label}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional achievements section */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-gradient-card border-border shadow-golden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Digital Innovation
              </h3>
               <p className="text-muted-foreground mb-6">
                Enhanced our mobile technology trading services with improved inventory management, 
                competitive pricing, and streamlined order processing, reducing transaction time by 60%.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg border border-primary/20">
                  AI-Powered Analytics
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg border border-primary/20">
                  Real-time Tracking
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg border border-primary/20">
                  Automated Processing
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-golden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Quality Assurance
              </h3>
              <p className="text-muted-foreground mb-6">
                Achieved 99.8% customer satisfaction rate with zero major security incidents.
              </p>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                99.8%
              </div>
              <div className="text-muted-foreground">
                Customer Satisfaction
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;