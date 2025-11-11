import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, increment, decrement, removeItem, clearCart, totalItems, totalPrice } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({ title: "Cart is empty", description: "Add items to cart before checkout." });
      return;
    }
    toast({ title: "Checkout started", description: "This is a demo checkout flow." });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

          <Card>
            <CardContent className="p-0">
              {items.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">Your cart is empty.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Subtotal</TableHead>
                      <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="h-12 w-12 rounded object-cover" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">₹{item.price}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <Button variant="outline" size="icon" onClick={() => decrement(item.id)}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => increment(item.id)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">₹{item.price * item.quantity}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-muted-foreground">Total items: {totalItems}</div>
            <div className="text-xl font-bold">Total: ₹{totalPrice}</div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Button variant="secondary" onClick={clearCart} disabled={items.length === 0}>
              Clear Cart
            </Button>
            <Button onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;