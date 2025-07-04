import { Button } from "@/components/ui/button";
import { Trophy, Users, Clock } from "lucide-react";

interface GameCardProps {
  title: string;
  prize: string;
  players: string;
  timeLeft: string;
  image: string;
  status: "live" | "upcoming" | "completed";
  onClick?: () => void;
}

const GameCard = ({ title, prize, players, timeLeft, image, status, onClick }: GameCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "live":
        return "bg-green-500";
      case "upcoming":
        return "bg-yellow-500";
      case "completed":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="game-card group cursor-pointer" onClick={onClick}>
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-game-purple to-game-orange rounded-lg mb-4 flex items-center justify-center text-6xl">
          {image}
        </div>
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor()}`}>
          {status.toUpperCase()}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg text-primary">{title}</h3>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-1">
            <Trophy className="w-4 h-4 text-game-gold" />
            <span className="text-game-gold font-semibold">{prize}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{players}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{timeLeft}</span>
        </div>

        <Button className="w-full btn-primary group-hover:scale-105 transition-transform">
          {status === "live" ? "Join Now" : status === "upcoming" ? "Register" : "View Results"}
        </Button>
      </div>
    </div>
  );
};

export default GameCard;