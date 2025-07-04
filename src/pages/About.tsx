import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Shield, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Players", value: "50,000+" },
    { icon: Trophy, label: "Tournaments", value: "1,000+" },
    { icon: Shield, label: "Secure Games", value: "100%" },
    { icon: Star, label: "App Rating", value: "4.8/5" },
  ];

  const team = [
    {
      name: "Raj Patel",
      role: "CEO & Founder",
      description: "Gaming industry veteran with 10+ years experience",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      description: "Tech expert ensuring fair play and security",
    },
    {
      name: "Amit Kumar",
      role: "Head of Gaming",
      description: "Game design specialist and player experience expert",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 glow-text">About GameHub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's leading skill-based gaming platform where millions of players come together 
            to showcase their talent and win real money in a fair and secure environment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="game-card text-center">
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                GameHub was founded in 2020 with a simple mission: to create a platform where 
                skill truly matters. We believe that everyone deserves a fair chance to showcase 
                their gaming abilities and be rewarded for their talent.
              </p>
              <p>
                Starting with just a few card games, we've grown to become one of India's most 
                trusted gaming platforms, serving over 50,000 active players across the country. 
                Our commitment to fair play, security, and player satisfaction has made us the 
                preferred choice for serious gamers.
              </p>
              <p>
                Today, we continue to innovate and expand our offerings, always keeping our 
                players' interests at heart. Every feature we build, every game we add, and 
                every policy we implement is designed to enhance your gaming experience.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="game-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">2020</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </CardContent>
            </Card>
            <Card className="game-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">₹10Cr+</div>
                <div className="text-sm text-muted-foreground">Winnings Paid</div>
              </CardContent>
            </Card>
            <Card className="game-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </CardContent>
            </Card>
            <Card className="game-card">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Games</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Fair Play
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We ensure every game is fair and transparent with certified random number 
                  generation and strict anti-fraud measures.
                </p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-primary" />
                  Community First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our players are our priority. We listen to feedback and continuously 
                  improve based on community needs and suggestions.
                </p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-primary" />
                  Skill Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We celebrate skill and strategy over luck, providing a platform where 
                  talented players can earn recognition and rewards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="game-card text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Card className="game-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
            <CardDescription>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">support@gamehub.com</div>
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-muted-foreground">+91 98765 43210</div>
              </div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-muted-foreground">Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;