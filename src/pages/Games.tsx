import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allGames = [
    { title: "Spade Master", prize: "₹90", players: "234 players", timeLeft: "2h 30m", image: "♠️", status: "live" as const },
    { title: "Heart Champion", prize: "₹200", players: "156 players", timeLeft: "1h 45m", image: "♥️", status: "live" as const },
    { title: "Diamond Rush", prize: "₹150", players: "89 players", timeLeft: "Starting soon", image: "♦️", status: "upcoming" as const },
    { title: "Club Tournament", prize: "₹120", players: "67 players", timeLeft: "3h 15m", image: "♣️", status: "live" as const },
    { title: "Teen Patti Pro", prize: "₹500", players: "445 players", timeLeft: "1h 20m", image: "🃏", status: "live" as const },
    { title: "Rummy Classic", prize: "₹300", players: "234 players", timeLeft: "45m", image: "🎴", status: "live" as const },
    { title: "Poker Championship", prize: "₹1000", players: "123 players", timeLeft: "4h 15m", image: "🃖", status: "upcoming" as const },
    { title: "Blackjack Elite", prize: "₹250", players: "87 players", timeLeft: "2h 10m", image: "🂡", status: "live" as const },
  ];

  const categories = [
    { id: "all", name: "All Games" },
    { id: "card", name: "Card Games" },
    { id: "skill", name: "Skill Games" },
    { id: "puzzle", name: "Puzzle Games" },
    { id: "sports", name: "Sports Games" },
  ];

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "card" && ["♠️", "♥️", "♦️", "♣️", "🃏", "🎴", "🃖", "🂡"].includes(game.image));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 glow-text">All Games</h1>
          <p className="text-muted-foreground">Choose your game and start winning!</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="btn-primary"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <GameCard
              key={index}
              {...game}
              onClick={() => console.log(`Joining ${game.title}`)}
            />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No games found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Games;