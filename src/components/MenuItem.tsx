import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  image: string;
  price: number;
  description?: string;
  onAddToCart: () => void;
}

const MenuItem = ({ name, image, price, description, onAddToCart }: MenuItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${name} dish`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          <Button
            size="sm"
            onClick={onAddToCart}
            className="gap-1"
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
