import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import heroImage from "@/assets/hero-food.jpg";
import restaurant1 from "@/assets/restaurant1.jpg";
import restaurant2 from "@/assets/restaurant2.jpg";
import restaurant3 from "@/assets/restaurant3.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRestaurants = [
    {
      id: 1,
      name: "Spice Paradise",
      image: restaurant1,
      rating: 4.5,
      cuisine: "Indian, Biryani, Curry",
      deliveryTime: "30-40 min",
    },
    {
      id: 2,
      name: "The Royal Dine",
      image: restaurant2,
      rating: 4.8,
      cuisine: "Continental, Italian",
      deliveryTime: "25-35 min",
    },
    {
      id: 3,
      name: "Cafe Delight",
      image: restaurant3,
      rating: 4.3,
      cuisine: "Cafe, Desserts, Coffee",
      deliveryTime: "20-30 min",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Delicious Food Delivered to Your Door
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-slide-up">
              Order from the best restaurants near you. Fast delivery, great taste!
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-slide-up"
              onClick={() => window.location.href = "/menu"}
            >
              Order Now
            </Button>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Find Your Favorite Food
              </h2>
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for restaurants or dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Featured Restaurants Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Restaurants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Keywords Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              🤖 AI-Suggested Keywords for SEO
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "best biryani near me",
                  "online food delivery fast",
                  "top restaurants in city",
                  "home delivery food",
                  "order pizza online",
                  "late night food delivery",
                  "healthy food delivery",
                  "cheap food delivery",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border hover:border-primary transition-colors cursor-pointer"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                These keywords are AI-generated to improve search visibility and help customers
                find us easily.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
