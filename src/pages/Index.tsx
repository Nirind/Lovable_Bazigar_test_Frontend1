import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, QrCode, Smartphone, Trophy, Shield, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import heroBanner from "@/assets/hero-banner.png";
import mobileAppBanner from "@/assets/mobile-app-banner.png";

const Index = () => {
  const [activeGame, setActiveGame] = useState(0);

  const featuredGames = [
    { title: "Spade Master", prize: "₹90", players: "234 players", timeLeft: "2h 30m", image: "♠️", status: "live" as const },
    { title: "Heart Champion", prize: "₹200", players: "156 players", timeLeft: "1h 45m", image: "♥️", status: "live" as const },
    { title: "Diamond Rush", prize: "₹150", players: "89 players", timeLeft: "Starting soon", image: "♦️", status: "upcoming" as const },
    { title: "Club Tournament", prize: "₹120", players: "67 players", timeLeft: "3h 15m", image: "♣️", status: "live" as const },
  ];

  const gameCategories = [
    { name: "Card Games", count: 12, icon: "🃏", description: "Classic card games with modern twists" },
    { name: "Skill Games", count: 8, icon: "🎯", description: "Test your skills and strategy" },
    { name: "Puzzle Games", count: 15, icon: "🧩", description: "Mind-bending challenges" },
    { name: "Sports Games", count: 6, icon: "⚽", description: "Virtual sports competitions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Featured Games */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold glow-text">
                Play & Win
                <span className="text-primary block">Real Money</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join thousands of players in skill-based games and tournaments
              </p>
              
              {/* Featured Game Cards */}
              <div className="grid grid-cols-2 gap-4">
                {featuredGames.map((game, index) => (
                  <GameCard
                    key={index}
                    {...game}
                    onClick={() => setActiveGame(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Hero Banner */}
            <div className="relative">
              <img 
                src={heroBanner} 
                alt="Gaming Banner" 
                className="w-full rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Download Our Mobile App</h2>
              <p className="text-muted-foreground">
                Take your gaming experience on the go with our mobile app. Play anytime, anywhere!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-card p-6 rounded-lg border border-border space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-black" />
                  </div>
                  <p className="text-center text-sm">Scan QR Code</p>
                </div>
                
                <div className="space-y-4 flex-1">
                  <Button className="w-full btn-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Download for Android
                  </Button>
                  <Button className="w-full btn-secondary">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Download for iOS
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={mobileAppBanner} 
                alt="Mobile App" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Game Categories</h2>
            <p className="text-muted-foreground">Choose from our exciting collection of skill-based games</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameCategories.map((category, index) => (
              <Link
                key={index}
                to="/games"
                className="game-card text-center group"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="text-primary font-semibold">{category.count} Games</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Play</h2>
            <p className="text-muted-foreground">Get started in just a few simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-bold">Create Account</h3>
              <p className="text-muted-foreground">Sign up and verify your account to get started</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="text-xl font-bold">Add Money</h3>
              <p className="text-muted-foreground">Add money to your wallet using secure payment methods</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-bold">Play & Win</h3>
              <p className="text-muted-foreground">Join games, showcase your skills, and win real money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose GameHub?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">100% Secure</h3>
                    <p className="text-muted-foreground">Your money and data are completely safe with us</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Instant Withdrawals</h3>
                    <p className="text-muted-foreground">Withdraw your winnings instantly to your bank account</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Fair Play</h3>
                    <p className="text-muted-foreground">Skill-based games with fair play guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock customer support for all your queries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-center">Start Playing Today!</h3>
                <div className="space-y-4">
                  <Button className="w-full btn-primary text-lg py-6">
                    Register Now & Get ₹50 Bonus
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    *Terms and conditions apply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
