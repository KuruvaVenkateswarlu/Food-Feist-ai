import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">FoodExpress</h3>
            <p className="text-sm text-muted-foreground">
              Your favorite food delivered fast to your doorstep. Experience the best
              restaurants in your city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BejWPBZYK/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/sriharshan_reddy_01?utm_source=qr&igsh=dWI5YXN5Z2J4a3Rz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ReddySange53955?s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Check out our promotional posts on social media for exclusive deals!
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
