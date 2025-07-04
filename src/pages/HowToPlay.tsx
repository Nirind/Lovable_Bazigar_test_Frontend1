import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, CreditCard, Gamepad2, Trophy, Shield, Clock } from "lucide-react";

const HowToPlay = () => {
  const gameRules = [
    {
      id: "spade",
      name: "Spade Master",
      description: "Classic card game with strategic play",
      rules: [
        "Players are dealt 13 cards each",
        "Spades are always trump cards",
        "Bid on tricks you think you can win",
        "Score points by making your bid exactly",
        "Highest score after multiple rounds wins"
      ]
    },
    {
      id: "hearts",
      name: "Heart Champion",
      description: "Avoid penalty cards and score low",
      rules: [
        "Avoid taking hearts (1 point each)",
        "Avoid the Queen of Spades (13 points)",
        "Lowest score wins the game",
        "Pass 3 cards before each hand",
        "First to 100 points loses"
      ]
    },
    {
      id: "rummy",
      name: "Rummy Classic",
      description: "Form sets and sequences to win",
      rules: [
        "Form valid sets (3-4 same rank) and sequences (3+ consecutive cards)",
        "Draw and discard cards strategically",
        "Declare when you have all valid combinations",
        "Jokers can substitute any card",
        "First to declare with valid hand wins"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 glow-text">How to Play</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how to get started and master your favorite games on GameHub
          </p>
        </div>

        {/* Getting Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Getting Started</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="game-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>1. Create Account</CardTitle>
                <CardDescription>Sign up with your email and verify your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Enter your email and create password</p>
                <p className="text-sm">• Verify your email address</p>
                <p className="text-sm">• Complete your profile</p>
                <p className="text-sm">• Add your bank details for withdrawals</p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle>2. Add Money</CardTitle>
                <CardDescription>Fund your wallet using secure payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Use UPI, Cards, or Net Banking</p>
                <p className="text-sm">• Minimum deposit: ₹10</p>
                <p className="text-sm">• Instant deposits</p>
                <p className="text-sm">• 100% secure transactions</p>
              </CardContent>
            </Card>

            <Card className="game-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle>3. Play & Win</CardTitle>
                <CardDescription>Join games and start winning real money</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Choose your favorite game</p>
                <p className="text-sm">• Join tournaments or practice</p>
                <p className="text-sm">• Play with skill, not luck</p>
                <p className="text-sm">• Withdraw winnings instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Game Rules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Game Rules</h2>
          <Tabs defaultValue="spade" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {gameRules.map((game) => (
                <TabsTrigger key={game.id} value={game.id}>
                  {game.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {gameRules.map((game) => (
              <TabsContent key={game.id} value={game.id}>
                <Card className="game-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">{game.name}</CardTitle>
                    <CardDescription className="text-lg">{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {game.rules.map((rule, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                          </div>
                          <p className="text-muted-foreground">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Fair Play & Security */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="game-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                Fair Play Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">• Random number generation (RNG) certified</p>
              <p className="text-muted-foreground">• Anti-fraud detection system</p>
              <p className="text-muted-foreground">• Regular audits and compliance checks</p>
              <p className="text-muted-foreground">• Player vs Player, no house edge</p>
              <p className="text-muted-foreground">• Skill-based games only</p>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Quick Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">• Start with practice games to learn</p>
              <p className="text-muted-foreground">• Set daily playing limits</p>
              <p className="text-muted-foreground">• Withdraw winnings regularly</p>
              <p className="text-muted-foreground">• Read game rules carefully</p>
              <p className="text-muted-foreground">• Play responsibly and have fun</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToPlay;