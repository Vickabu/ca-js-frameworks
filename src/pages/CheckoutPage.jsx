import { useState, useEffect } from "react";
import { UseCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity } = UseCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cart.length === 0) {
      setError("Your cart is empty.");
    } else {
      setCartItems(cart);
    }
  }, [cart]);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    alert("Order completed! 🎉");
    console.log("Order details:", customer);
    navigate("/checkout-success");
  };

  const handleQuantityChange = (itemId, quantity) => {if (quantity <= 0) return;
    updateQuantity(itemId, quantity)
  }
 
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  if (error) return <h2 className="text-center mt-8">{error}</h2>;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 min-h-screen">
      <div className="w-full md:w-2/3 p-6 shadow-lg rounded order-1 md:order-2">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 mb-2 rounded">
            <div className="flex items-center">
              <img src={item.image.url} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: Kr {item.discountedPrice || item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} min="1" className="border p-2 w-20 text-center rounded"/>
            </div>
            <div onClick={() => handleRemoveFromCart(item.id)}  className="bg-red-500 text-white p-2 rounded cursor-pointer">X</div>
          </div>
        ))}
        <hr className="my-3" />
        <div className="flex justify-between mb-4">
          <p>Subtotal:</p>
          <p>Kr {totalAmount}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg">
          <p>Total:</p>
          <p>Kr {totalAmount + 50}</p>
        </div>
        <hr className="my-3" />
      </div>

      <div className="w-full md:w-1/3 p-6 shadow-lg rounded order-2 md:order-1 text-center">
        <h2 className="text-xl font-bold mb-4">Customer Information</h2>
        <input 
          type="text" name="fullName" placeholder="Full Name" value={customer.fullName} 
          onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
        />
        <input 
          type="email" name="email" placeholder="Email Address" value={customer.email} 
          onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
        />
        <input 
          type="text" name="address" placeholder="Shipping Address" value={customer.address} 
          onChange={handleInputChange} className="border p-2 w-full mb-5 rounded shadow-lg"
        />

        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <input 
          type="text" name="cardNumber" placeholder="Card Number" value={customer.cardNumber} 
          onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
        />
        <div className="flex gap-2 mb-3">
          <input 
            type="text" name="expiryDate" placeholder="MM/YY" value={customer.expiryDate} 
            onChange={handleInputChange} className="border p-2 w-1/2 rounded shadow-lg"
          />
          <input 
            type="text" name="cvv" placeholder="CVV" value={customer.cvv} 
            onChange={handleInputChange} className="border p-2 w-1/2 rounded shadow-lg"
          />
        </div>
        <input 
          type="text" name="cardOwner" placeholder="Cardholders Name" value={customer.cardOwner} 
          onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
        />
        

        <button 
          onClick={handleOrderSubmit} 
          className="mt-5 bg-green-600 py-2 px-4 w-full rounded-md font-bold hover:bg-green-700"
        >
          Complete Order
        </button>
      </div>
    </div>
  );
}
