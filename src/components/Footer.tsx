import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="GameHub" className="h-8 w-8" />
              <span className="text-lg font-bold">GameHub</span>
            </div>
            <p className="text-muted-foreground">
              The ultimate destination for skill-based gaming and real money tournaments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/games" className="block hover:text-primary transition-colors">
                Games
              </Link>
              <Link to="/how-to-play" className="block hover:text-primary transition-colors">
                How to Play
              </Link>
              <Link to="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Account</h4>
            <div className="space-y-2">
              <Link to="/wallet" className="block hover:text-primary transition-colors">
                My Wallet
              </Link>
              <Link to="/history" className="block hover:text-primary transition-colors">
                Game History
              </Link>
              <Link to="/profile" className="block hover:text-primary transition-colors">
                Profile
              </Link>
              <Link to="/support" className="block hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/responsible-gaming" className="block hover:text-primary transition-colors">
                Responsible Gaming
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 GameHub. All rights reserved. Play responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;