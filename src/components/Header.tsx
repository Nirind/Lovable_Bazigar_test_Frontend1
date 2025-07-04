import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, User, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="GameHub" className="h-10 w-10" />
            <span className="text-xl font-bold glow-text">GameHub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/games" className="hover:text-primary transition-colors">
              Games
            </Link>
            <Link to="/how-to-play" className="hover:text-primary transition-colors">
              How to Play
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/wallet" className="hover:text-primary transition-colors">
              Wallet
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Wallet className="w-4 h-4 mr-2" />
              ₹0
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;