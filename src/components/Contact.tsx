import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to elevate your mobile technology trading? Get in touch with our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-golden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send us a message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name"
                    className="bg-background border-border focus:border-primary"
                  />
                  <Input 
                    placeholder="Your Email"
                    type="email"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <Input 
                  placeholder="Company Name"
                  className="bg-background border-border focus:border-primary"
                />
                
                <Input 
                  placeholder="Subject"
                  className="bg-background border-border focus:border-primary"
                />
                
                <Textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="bg-background border-border focus:border-primary"
                />
                
                <Button 
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-golden transition-all duration-300 hover:shadow-glow"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border shadow-golden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary rounded-lg p-3 text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dubai Office</h4>
                    <p className="text-muted-foreground">
                      DAFZA, Dubai Airport Free Zone<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-golden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary rounded-lg p-3 text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-muted-foreground">
                      +971569443529<br />
                      +19293301131
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-golden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary rounded-lg p-3 text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">
                      info@mobexinternational.com<br />
                      sales@mobexinternational.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-golden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary rounded-lg p-3 text-primary-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Sunday - Thursday: 9:00 AM - 6:00 PM GST<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;