import restaurant1 from "@/assets/restaurant1.jpg";
import restaurant2 from "@/assets/restaurant2.jpg";
import restaurant3 from "@/assets/restaurant3.jpg";
import biryani from "@/assets/biryani.jpg";
import pizza from "@/assets/pizza.jpg";
import burger from "@/assets/burger.jpg";
import sushi from "@/assets/sushi.jpg";
import pasta from "@/assets/pasta.jpg";
import tacos from "@/assets/tacos.jpg";

export type MenuItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type MenuCategory = {
  name: string; // e.g., "North Indian", "South Indian", "Chinese"
  items: MenuItem[];
};

export type Restaurant = {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  categories: MenuCategory[];
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Spice Paradise",
    image: restaurant1,
    rating: 4.5,
    cuisine: "Indian, Biryani, Curry",
    deliveryTime: "30-40 min",
    categories: [
      {
        name: "North Indian",
        items: [
          {
            id: 101,
            name: "Chicken Biryani",
            image: biryani,
            price: 299,
            description: "Aromatic basmati rice with tender chicken and spices",
          },
          {
            id: 102,
            name: "Paneer Butter Masala",
            image: pasta,
            price: 279,
            description: "Rich tomato gravy with paneer and butter",
          },
          {
            id: 103,
            name: "Butter Naan",
            image: pizza,
            price: 99,
            description: "Soft leavened bread topped with butter",
          },
        ],
      },
      {
        name: "South Indian",
        items: [
          {
            id: 104,
            name: "Veg Biryani",
            image: biryani,
            price: 269,
            description: "Fragrant rice cooked with mixed vegetables",
          },
          {
            id: 105,
            name: "Masala Dosa",
            image: tacos,
            price: 149,
            description: "Crispy dosa stuffed with spiced potato masala",
          },
          {
            id: 106,
            name: "Idli Sambar",
            image: burger,
            price: 129,
            description: "Steamed rice cakes served with sambar and chutney",
          },
        ],
      },
      {
        name: "Chinese",
        items: [
          {
            id: 107,
            name: "Veg Fried Rice",
            image: pasta,
            price: 199,
            description: "Wok-tossed rice with vegetables and soy",
          },
          {
            id: 108,
            name: "Hakka Noodles",
            image: pizza,
            price: 189,
            description: "Stir-fried noodles with vegetables",
          },
          {
            id: 109,
            name: "Manchurian",
            image: burger,
            price: 209,
            description: "Crispy vegetable balls in tangy sauce",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "The Royal Dine",
    image: restaurant2,
    rating: 4.8,
    cuisine: "Continental, Italian",
    deliveryTime: "25-35 min",
    categories: [
      {
        name: "North Indian",
        items: [
          {
            id: 201,
            name: "Mutton Biryani",
            image: biryani,
            price: 349,
            description: "Slow-cooked mutton with fragrant basmati rice",
          },
          {
            id: 202,
            name: "Dal Makhani",
            image: pasta,
            price: 229,
            description: "Creamy lentils simmered overnight",
          },
        ],
      },
      {
        name: "South Indian",
        items: [
          {
            id: 203,
            name: "Rava Dosa",
            image: tacos,
            price: 159,
            description: "Crispy semolina dosa with chutney",
          },
          {
            id: 204,
            name: "Curd Rice",
            image: burger,
            price: 139,
            description: "Comforting yogurt rice with tempering",
          },
        ],
      },
      {
        name: "Chinese",
        items: [
          {
            id: 205,
            name: "Chicken Fried Rice",
            image: pasta,
            price: 249,
            description: "Classic fried rice with chicken",
          },
          {
            id: 206,
            name: "Schezwan Noodles",
            image: pizza,
            price: 219,
            description: "Spicy noodles tossed in Schezwan sauce",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Cafe Delight",
    image: restaurant3,
    rating: 4.3,
    cuisine: "Cafe, Desserts, Coffee",
    deliveryTime: "20-30 min",
    categories: [
      {
        name: "North Indian",
        items: [
          {
            id: 301,
            name: "Veg Kebab",
            image: burger,
            price: 189,
            description: "Grilled vegetable kebabs with spices",
          },
        ],
      },
      {
        name: "South Indian",
        items: [
          {
            id: 302,
            name: "Podi Idli",
            image: burger,
            price: 149,
            description: "Idli tossed in spicy podi and ghee",
          },
        ],
      },
      {
        name: "Chinese",
        items: [
          {
            id: 303,
            name: "Spring Rolls",
            image: sushi,
            price: 159,
            description: "Crispy rolls stuffed with vegetables",
          },
        ],
      },
    ],
  },
];

export const getRestaurantById = (id: number) => restaurants.find((r) => r.id === id);