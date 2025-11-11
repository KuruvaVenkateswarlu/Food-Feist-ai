import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import biryani from "@/assets/biryani.jpg";
import pizza from "@/assets/pizza.jpg";
import burger from "@/assets/burger.jpg";
import sushi from "@/assets/sushi.jpg";
import pasta from "@/assets/pasta.jpg";
import tacos from "@/assets/tacos.jpg";

const Menu = () => {
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();
  const { addItem } = useCart();

  const menuItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      image: biryani,
      price: 299,
      description: "Aromatic basmati rice with tender chicken and spices",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image: pizza,
      price: 349,
      description: "Fresh mozzarella, tomato sauce, and basil",
    },
    {
      id: 3,
      name: "Classic Burger",
      image: burger,
      price: 199,
      description: "Juicy beef patty with fresh vegetables and fries",
    },
    {
      id: 4,
      name: "Sushi Platter",
      image: sushi,
      price: 499,
      description: "Assorted fresh sushi rolls and sashimi",
    },
    {
      id: 5,
      name: "Creamy Pasta",
      image: pasta,
      price: 279,
      description: "Al dente pasta in rich creamy sauce",
    },
    {
      id: 6,
      name: "Tacos Supreme",
      image: tacos,
      price: 249,
      description: "Three soft tacos with your choice of filling",
    },
  ];

  const handleAddToCart = (item: { id: number; name: string; image: string; price: number }) => {
    addItem({ id: item.id, name: item.name, image: item.image, price: item.price });
    setCartCount((prev) => prev + 1);
    toast({ title: "Added to cart!", description: `${item.name} has been added to your cart.` });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our delicious selection of dishes prepared with love and the finest
              ingredients.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
