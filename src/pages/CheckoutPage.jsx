import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseCart } from '../components/CartContext';
import OrderSummary from '../components/OrderSummary';
import PaymentForm from '../components/PaymentForm';
import CustomerForm from '../components/CustomerForm';
import Button from '../components/Button';
import { ShoppingCart, ChevronDown } from 'lucide-react';

const generateOrderNumber = () => {
  return `#${Math.floor(Math.random() * 900000) + 100000}`;
};

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = UseCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardOwner: '',
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [originalTotal, setOriginalTotal] = useState(0);

  useEffect(() => {
    if (cart.length === 0) {
      setTotalAmount(0);
      setOriginalTotal(0);
    } else {
      const original = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const total = cart.reduce(
        (sum, item) =>
          sum + (item.discountedPrice || item.price) * item.quantity,
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
    const generatedOrderNumber = generateOrderNumber();
    clearCart();
    navigate('/checkout-success', {
      state: { orderNumber: generatedOrderNumber },
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:p-6">
      {cart.length === 0 ? (
        <div className="w-full text-center p-10 shadow-lg rounded align-center my-auto">
          <ShoppingCart size={50} className="mx-auto mb-4" />
          <p className="text-gray-600 text-lg font-semibold my-6">
            Your cart is empty. You have to add stuff, to buy stuff - it is not
            that hard!
          </p>
          <p className="mb-4">
            Push the button, choose a product, add it to your cart... then
            checkout...
          </p>
          <ChevronDown
            size={24}
            className="text-gray-500 animate-bounce mx-auto"
          />
          <Button
            text="Start Shopping"
            onClick={() => navigate('/')}
            variant="primary"
          />
        </div>
      ) : (
        <>
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
            <CustomerForm
              customer={customer}
              handleInputChange={handleInputChange}
            />
            <PaymentForm
              customer={customer}
              handleInputChange={handleInputChange}
            />

            <Button
              text="Complete Order"
              onClick={handleOrderSubmit}
              type="submit"
              variant="primary"
            />
          </div>
        </>
      )}
    </div>
  );
}
