import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../components/CartContext";  
import OrderSummary from "../components/OrderSummary";  
import PaymentForm from "../components/PaymentForm";  
import CustomerForm from "../components/CustomerForm";
import Button from "../components/Button";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = UseCart();
  const navigate = useNavigate();
  
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardOwner: "", 
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [originalTotal, setOriginalTotal] = useState(0);

  useEffect(() => {
    if (cart.length === 0) {
      setTotalAmount(0);
      setOriginalTotal(0);
    } else {
      const original = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const total = cart.reduce(
        (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
        0
      );
      setOriginalTotal(original.toFixed(2));
      setTotalAmount(total.toFixed(2));
    }
  }, [cart]);

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    alert("Order completed! 🎉");
    console.log("Order details:", customer);
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 min-h-screen">
      <div className="w-full md:w-2/3 p-6 shadow-lg rounded order-1 md:order-2">
        <OrderSummary
          cart={cart}
          totalAmount={totalAmount}
          originalTotal={originalTotal}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>

      <div className="w-full md:w-1/3 p-6 shadow-lg rounded order-2 md:order-1">
        <CustomerForm customer={customer} handleInputChange={handleInputChange} />
        <PaymentForm customer={customer} handleInputChange={handleInputChange} />

        <Button 
          text="Complete Order" 
          onClick={handleOrderSubmit} 
          type="submit" 
          variant="secondary" 
        />
      </div>
    </div>
  );
}