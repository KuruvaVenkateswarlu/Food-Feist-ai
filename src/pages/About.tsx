import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Truck, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Quality Food",
      description: "We partner with the best restaurants to ensure top-quality meals every time.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Our delivery partners ensure your food arrives hot and fresh at your doorstep.",
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "Join millions of happy customers who trust us for their daily meals.",
    },
    {
      icon: Award,
      title: "Best Experience",
      description: "Award-winning service dedicated to making food delivery seamless and enjoyable.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FoodExpress</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Bringing delicious food from your favorite restaurants straight to your door
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At FoodExpress, we're passionate about connecting food lovers with the best
                restaurants in their city. Inspired by the success of platforms like Zomato, we've
                built a service that prioritizes speed, quality, and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to make ordering food online as easy and enjoyable as possible.
                Whether you're craving biryani, pizza, or sushi, we've got you covered with a wide
                selection of cuisines from top-rated restaurants.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-lg text-muted-foreground">Partner Restaurants</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-lg text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100,000+</div>
                <div className="text-lg text-muted-foreground">Orders Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Trust Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Thousands</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've built our reputation on reliability, quality, and exceptional customer
                service. Our customers trust us to deliver their meals on time, every time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground italic mb-4">
                    "Best food delivery service! Always on time and the food arrives hot."
                  </p>
                  <p className="font-semibold">- Priya S.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground italic mb-4">
                    "Wide variety of restaurants and easy to use. My go-to app for ordering food."
                  </p>
                  <p className="font-semibold">- Rahul K.</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground italic mb-4">
                    "Excellent service and great deals. Highly recommend FoodExpress!"
                  </p>
                  <p className="font-semibold">- Anjali M.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
