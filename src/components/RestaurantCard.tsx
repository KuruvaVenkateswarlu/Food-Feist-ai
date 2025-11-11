import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
}

const RestaurantCard = ({ id, name, image, rating, cuisine, deliveryTime }: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${name} restaurant`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium">{rating}</span>
          </div>
          <span>{deliveryTime}</span>
        </div>
        <p className="text-sm text-muted-foreground">{cuisine}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="default" asChild>
          <Link to={`/menu/${id}`}>Order Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
