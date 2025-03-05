import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { UseCart } from "../components/CartContext";
import logo from "../assets/lazySalesLogo.png";

export default function Header() {
  
  const { cart, removeFromCart } = UseCart();

  
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  
  const [isCartOverlayVisible, setCartOverlayVisible] = useState(false);

  const toggleCartOverlay = () => {
    setCartOverlayVisible((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#C8F9C6] relative">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-black hover:underline">
        <img src={logo} alt="Lazy Sales Logo" className=" h-40 w-40 object-contain" />
        </Link>
      </div>

      <nav className="flex items-center gap-8 text-black">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>

        
        <div className="relative">
         
          <div onClick={toggleCartOverlay} className="cursor-pointer relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          
          {isCartOverlayVisible && (
            <div className="absolute right-0 mt-2 w-[350px] border border-black bg-white p-4 shadow-lg z-10">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  
                  {item.image && (
                    <img
                      src={item.image.url}
                      alt={item.title}
                      className="w-16 h-16 object-cover"
                    />
                  )}
                  <div className="flex-1 px-2">
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="font-bold">Kr {item.price}</p>
                  </div>
                  <button
                    className="text-white text-xl font-bold"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
              ))}
              {
              <Link to="/checkout" className="bg-green-600 text-white py-2 px-4 w-full rounded-md font-bold hover:bg-green-700">
                Go to cart
        </Link>

              }
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}