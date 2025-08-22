import { Card, CardContent } from "@/components/ui/card";
import teamOffice from "@/assets/team-office.jpg";
import globalLogistics from "@/assets/global-logistics.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We are a leading trading company based in Dubai's Free Zone "DAFZA" specializing in 
                mobile electronics and cutting-edge technology solutions for global markets.
              </p>
              
              <p>
                With our extensive logistics network and expert team, we've established ourselves 
                as the trusted partner for businesses worldwide seeking premium mobile technology 
                trading services.
              </p>
              
              <p>
                Our commitment to innovation, reliability, and excellence has made us a preferred 
                choice for partners globally, with presence in UAE, USA and India, handling over 50,000 devices annually.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src={teamOffice} 
              alt="Mobex International team"
              className="rounded-2xl shadow-golden w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src={globalLogistics} 
              alt="Global logistics network"
              className="rounded-2xl shadow-golden w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Global <span className="bg-gradient-primary bg-clip-text text-transparent">Reach</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border shadow-golden">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    Middle East
                  </div>
                  <div className="text-muted-foreground text-sm">
                    UAE, Saudi Arabia, Qatar
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-golden">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    Asia Pacific
                  </div>
                  <div className="text-muted-foreground text-sm">
                    India, Pakistan, Bangladesh
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-golden">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    USA
                  </div>
                  <div className="text-muted-foreground text-sm">
                    North & South America
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-golden">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    Europe
                  </div>
                  <div className="text-muted-foreground text-sm">
                    UK, Germany, Netherlands
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;