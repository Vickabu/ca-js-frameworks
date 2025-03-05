import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lazySalesLogo.png";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Title thingy",
      price: 350,
      discountPrice: null,
      image: "../assets/lazySalesLogo.png" 
    },
    {
      id: 2,
      title: "Title thingy",
      price: 350,
      discountPrice: 250,
      image: "../assets/lazySalesLogo.png" 
    },
    {
      id: 3,
      title: "Title thingy",
      price: 350,
      discountPrice: null,
      image: "../assets/lazySalesLogo.png" 
    },
  ]);

  
  const [isCartOverlayVisible, setCartOverlayVisible] = useState(false);

  
  const cartCount = cartItems.length;

  
  const toggleCartOverlay = () => {
    setCartOverlayVisible(!isCartOverlayVisible);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#C8F9C6] relative">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Lazy Sales Logo"
          className="object-contain"
        />
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
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />

                  
                  <div className="flex-1 px-2">
                    <h2 className="font-bold">{item.title}</h2>
                    {item.discountPrice && item.discountPrice < item.price ? (
                      <div>
                        <p className="line-through text-gray-500">Kr {item.price}</p>
                        <p className="text-green-600 font-bold">Kr {item.discountPrice}</p>
                      </div>
                    ) : (
                      <p className="font-bold">Kr {item.price}</p>
                    )}
                  </div>

                  
                  <button
                    className="text-red-500 text-xl font-bold"
                    onClick={() => {
                      
                      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                    }}
                  >
                    X
                  </button>
                </div>
              ))}

              
              <button className="bg-green-600 text-white py-2 px-4 w-full rounded-md font-bold hover:bg-green-700">
                Go to cart
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}