import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import { restaurants, getRestaurantById } from "@/data/restaurants";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const RestaurantMenu = () => {
  const params = useParams();
  const id = useMemo(() => Number(params.id), [params.id]);
  const restaurant = useMemo(() => getRestaurantById(id), [id]);
  const { toast } = useToast();
  const { addItem } = useCart();

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Restaurant not found</h1>
            <p className="text-muted-foreground mb-6">The restaurant you are looking for does not exist.</p>
            <Button asChild>
              <Link to="/">
                Go back home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = (item: { id: number; name: string; image: string; price: number }) => {
    addItem({ id: item.id, name: item.name, image: item.image, price: item.price });
    toast({ title: "Added to cart!", description: `${item.name} added from ${restaurant.name}.` });
  };

  const defaultTab = restaurant.categories[0]?.name || "Menu";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{restaurant.name}</h1>
                <p className="text-muted-foreground mt-2">
                  {restaurant.cuisine} • {restaurant.rating.toFixed(1)} ★ • {restaurant.deliveryTime}
                </p>
              </div>
              <Button asChild>
                <Link to="/cart">Go to Cart</Link>
              </Button>
            </div>
          </header>

          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-4">
              {restaurant.categories.map((cat) => (
                <TabsTrigger key={cat.name} value={cat.name}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {restaurant.categories.map((cat) => (
              <TabsContent key={cat.name} value={cat.name}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      description={item.description}
                      onAddToCart={() => handleAddToCart(item)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantMenu;