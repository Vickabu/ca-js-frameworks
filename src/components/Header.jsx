/* import { useState, useRef, useEffect } from "react";
  import { Link } from "react-router-dom";
  import { ShoppingCart } from "lucide-react";
  import { UseCart } from "../components/CartContext";
  import logo from "../assets/lazySalesLogo.png";
  
  export default function Header() {
    const { cart, removeFromCart } = UseCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
    
    const [isCartOverlayVisible, setCartOverlayVisible] = useState(false);
  
    
    const overlayRef = useRef(null);
    const cartIconContainerRef = useRef(null);
  
    
    const toggleCartOverlay = () => {
      setCartOverlayVisible((prev) => !prev);
    };
  
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        
        if (
          isCartOverlayVisible &&
          overlayRef.current &&
          !overlayRef.current.contains(event.target) &&
          cartIconContainerRef.current &&
          !cartIconContainerRef.current.contains(event.target)
        ) {
          setCartOverlayVisible(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isCartOverlayVisible]);
  
    return (
      <header className="flex items-center justify-between px-8 py-4 bg-[#C8F9C6] relative">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-black hover:underline">
            <img src={logo} alt="Lazy Sales Logo" className="h-40 w-40 object-contain" />
          </Link>
        </div>
  
        <nav className="flex items-center gap-8 text-black">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
  
          <div className="relative" ref={cartIconContainerRef}>
            <div onClick={toggleCartOverlay} className="cursor-pointer relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
  
            {isCartOverlayVisible && (
              <div
                ref={overlayRef}
                className="absolute right-0 mt-2 w-[350px] border border-black bg-white p-4 shadow-lg z-10"
              >
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
                <Link
                  to="/checkout"
                  onClick={() => setCartOverlayVisible(false)}
                  className="bg-green-600 text-white py-2 px-4 w-full rounded-md font-bold hover:bg-green-700"
                >
                  Go to cart
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
 */




  /* 

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { UseCart } from "../components/CartContext";
import logo from "../assets/lazySalesLogo.png";

export default function Header() {
  const { cart, removeFromCart } = UseCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [isCartOverlayVisible, setCartOverlayVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const overlayRef = useRef(null);
  const cartIconContainerRef = useRef(null);

  const toggleCartOverlay = () => {
    setCartOverlayVisible((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCartOverlayVisible &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target) &&
        cartIconContainerRef.current &&
        !cartIconContainerRef.current.contains(event.target)
      ) {
        setCartOverlayVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOverlayVisible]);

  return (
    <header className="bg-[#C8F9C6] relative">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-black hover:underline">
            <img
              src={logo}
              alt="Lazy Sales Logo"
              className="h-40 w-40 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          
          <nav className="hidden md:flex items-center gap-8 text-black">
            <Link
              to="/"
              className="hover:underline transition-colors duration-200 hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="hover:underline transition-colors duration-200 hover:text-gray-700"
            >
              Contact
            </Link>
          </nav>

          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          
          <div className="relative" ref={cartIconContainerRef}>
            <div
              onClick={toggleCartOverlay}
              className="cursor-pointer relative transition-transform duration-200 hover:scale-110"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            {isCartOverlayVisible && (
              <div
                ref={overlayRef}
                className="absolute right-0 mt-2 w-[350px] border border-black bg-white p-4 shadow-lg z-10 transition-all duration-300 ease-out transform"
              >
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4">
                    {item.image && (
                      <img
                        src={item.image.url}
                        alt={item.title}
                        className="w-16 h-16 object-cover transition-transform duration-200 hover:scale-105"
                      />
                    )}
                    <div className="flex-1 px-2">
                      <h2 className="font-bold">{item.title}</h2>
                      <p className="font-bold">Kr {item.price}</p>
                    </div>
                    <button
                      className="text-white text-xl font-bold transition-colors duration-200 hover:text-red-300"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
                <Link
                  to="/checkout"
                  onClick={() => setCartOverlayVisible(false)}
                  className="bg-green-600 text-white py-2 px-4 w-full rounded-md font-bold hover:bg-green-700 transition-colors duration-200"
                >
                  Go to cart
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-black px-8 py-4">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="block mb-2 hover:underline transition-colors duration-200 hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="block hover:underline transition-colors duration-200 hover:text-gray-700"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
} */


  import { useState, useRef, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { ShoppingCart, Menu, X } from "lucide-react";
  import { UseCart } from "../components/CartContext";
  import Button from "../components/Button";
  import logo from "../assets/lazySalesLogo.png";
  
  export default function Header() {
    const { cart, removeFromCart } = UseCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
    const [isCartOverlayVisible, setCartOverlayVisible] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const overlayRef = useRef(null);
    const cartIconContainerRef = useRef(null);
  
    const toggleCartOverlay = () => {
      setCartOverlayVisible((prev) => !prev);
    };
  
    const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };
  
    const goToCheckout = () => {
      setCartOverlayVisible(false);
      navigate("/checkout");
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          isCartOverlayVisible &&
          overlayRef.current &&
          !overlayRef.current.contains(event.target) &&
          cartIconContainerRef.current &&
          !cartIconContainerRef.current.contains(event.target)
        ) {
          setCartOverlayVisible(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isCartOverlayVisible]);
  
    return (
      <header className="bg-[#C8F9C6] relative">
        <div className="flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold text-black hover:underline">
              <img
                src={logo}
                alt="Lazy Sales Logo"
                className="h-40 w-40 object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
  
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8 text-black">
              <Link
                to="/"
                className="hover:underline transition-colors duration-200 hover:text-gray-700"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="hover:underline transition-colors duration-200 hover:text-gray-700"
              >
                Contact
              </Link>
            </nav>
  
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
  
            <div className="relative" ref={cartIconContainerRef}>
              <div
                onClick={toggleCartOverlay}
                className="cursor-pointer relative transition-transform duration-200 hover:scale-110"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
  
              {isCartOverlayVisible && (
                <div
                  ref={overlayRef}
                  className="absolute right-0 mt-2 w-[350px] border border-black bg-white p-4 shadow-lg z-10 transition-all duration-300 ease-out transform"
                >
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-4">
                      {item.image && (
                        <img
                          src={item.image.url}
                          alt={item.title}
                          className="w-16 h-16 object-cover transition-transform duration-200 hover:scale-105"
                        />
                      )}
                      <div className="flex-1 px-2">
                        <h2 className="font-bold">{item.title}</h2>
                        <p className="font-bold">Kr {item.price}</p>
                      </div>
                      <button
                        className="text-white text-xl font-bold transition-colors duration-200 hover:text-red-300"
                        onClick={() => removeFromCart(item.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
  
                  <Button 
                    text="Go to cart"
                    onClick={goToCheckout}
                    className="w-full bg-green-600 text-white hover:bg-green-700"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
  
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-black px-8 py-2">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/"
              className="block mb-2 hover:underline transition-colors duration-200 hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/contact"
              className="block hover:underline transition-colors duration-200 hover:text-gray-700"
            >
              Contact
            </Link>
          </nav>
        )}
      </header>
    );
  }
  