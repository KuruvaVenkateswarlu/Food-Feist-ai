import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">FoodExpress</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/menu") ? "text-primary" : "text-foreground"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/report"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/report") ? "text-primary" : "text-foreground"
              }`}
            >
              Report
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/") ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/menu") ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/cart") ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              Cart
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/about") ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/contact") ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/report"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/report") ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              Report
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
