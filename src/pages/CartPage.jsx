import { useEffect, useState } from "react";
import { UseCart } from "../components/CartContext";
import Button from "../components/Button";

function CartPage() {
  const { cart, removeFromCart } = UseCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      if (cart.length === 0) {
        throw new Error("Your cart is empty.");
      }
      setCartItems(cart);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [cart]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-2xl">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.image.url} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: Kr {item.discountedPrice || item.price}</p>
                </div>
              </div>
              <Button text="Remove" onClick={() => removeFromCart(item.id)} />
            </div>
          ))}

          <h3 className="text-xl font-bold mt-4">
            Total: Kr{" "}
            {cartItems.reduce(
              (total, item) => total + (item.discountedPrice || item.price) * item.quantity,
              0
            )}
          </h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;
